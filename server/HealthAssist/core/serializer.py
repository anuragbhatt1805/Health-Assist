"""Serializers for the user authentication and registration process."""

from django.contrib.auth import (
    get_user_model,
    authenticate
)
from django.utils.translation import gettext as _
from rest_framework import serializers
from core.models import *


class InsuranceSerializer(serializers.ModelSerializer):
    """Serializer for Insurance objects"""

    class Meta:
        model = Insurance
        fields = ('id', 'company', 'policy', 'amount', 'expiry')


class UserSerializer(serializers.ModelSerializer):
    """Serializer for the users object"""

    class Meta:
        model = get_user_model()
        fields = [
            'id', 'email', 'name', 'dob', 'password', 'is_staff'
        ]
        extra_kwargs = {
            'password': {'write_only': True, 'min_length': 5},
        }
        read_only_fields = ['id',]

    def create(self, validated_data):
        """Create a new user with encrypted password"""
        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        """Update a user, setting the password correctly and return it"""
        password = validated_data.pop('password', None)
        insurance = validated_data.pop('insurance', None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()

        if insurance:
            insurance = Insurance.objects.get(id=insurance)
            if not insurance:
                raise ValueError('Insurance does not exist')
            user.insurance = insurance
            user.save()

        return user


class AuthTokenSerializer(serializers.Serializer):
    """Serializer for user Auth Token"""
    email = serializers.EmailField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False,
    )

    def validate(self, attrs):
        """Validate and authenticate the user"""
        email = attrs.get('email')
        password = attrs.get('password')

        user = authenticate(
            request=self.context.get('request'),
            username=email,
            password=password,
        )

        if not user:
            msg = _('Unable to authenticate user with provided credentials')
            raise serializers.ValidationError(msg, code='authentication')

        attrs['user'] = user
        return attrs


class UserDetailSerializer(UserSerializer):

    insurance = InsuranceSerializer()

    class Meta(UserSerializer.Meta):
        fields = UserSerializer.Meta.fields + [
            'aabhaId', 'phone', 'address', 'profile', 'profession',
            'height', 'weight', 'blood_group', 'insurance',
        ]
        read_only_fields = UserSerializer.Meta.read_only_fields

class DoctorDetailSerializer(UserSerializer):

    class Meta(UserSerializer.Meta):
        fields = UserSerializer.Meta.fields + [
            'aabhaId', 'phone', 'address', 'profile', 'profession',
            'height', 'weight', 'blood_group',
        ]
        read_only_fields = UserSerializer.Meta.read_only_fields+[
            'aabhaId', 'phone', 'address', 'profile', 'profession',
            'height', 'weight', 'blood_group',
        ]

class DoctorSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        fields = UserSerializer.Meta.fields + [
            'phone', 'profile', 'profession',
        ]
        read_only_fields = UserSerializer.Meta.read_only_fields+[
            'phone', 'profile', 'profession',
        ]