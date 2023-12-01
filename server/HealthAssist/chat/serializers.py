from rest_framework import serializers
from chat.models import *


class ChatRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatRoom
        fields = '__all__'


class ChatRoomMembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatRoomMembership
        fields = '__all__'


class ChatMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessage
        fields = '__all__'
