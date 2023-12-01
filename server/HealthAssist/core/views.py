from rest_framework import (
    generics, authentication, permissions,
    viewsets, filters, mixins, status
)
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.exceptions import PermissionDenied
from rest_framework.decorators import action
from rest_framework.response import Response
from core.serializer import *
from core.permissions import UpdateOwnProfile


class CreateTokenView(ObtainAuthToken):
    """Create a new auth token for user"""
    serializer_class = AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES

class CreateUserView(generics.CreateAPIView):
    """Create a new user in the system"""
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()


class ManageUserView(viewsets.ModelViewSet,
                     mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin):
    """Manage the authenticated user"""
    serializer_class = UserDetailSerializer
    permission_classes = (permissions.IsAuthenticated, UpdateOwnProfile)
    authentication_classes = (authentication.TokenAuthentication,)
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('name', 'email', 'phone', 'profession')
    filter_fields = ('is_staff')
    queryset = User.objects.all()

    def get_queryset(self):
            user = self.request.user

            if user.is_superuser:
                return User.objects.all()
            elif user.is_staff:
                return User.objects.all()
            else:
                return User.objects.filter(is_staff=True) | User.objects.filter(id=str(user.id))

    def get_object(self):
        user = self.request.user
        if user.is_staff or user.is_superuser:
            return self.get_queryset().get(pk=self.kwargs['pk'])
        else:
            # Non-staff users can only view and manage their own profile
            if (self.kwargs['pk'] == str(user.id) or User.objects.get(id=self.kwargs['pk']).is_staff):
                return self.get_queryset().get(pk=self.kwargs['pk'])
            raise PermissionDenied('You2 do not have permission to view or manage this user.')

    def get_serializer_class(self):
        user = self.request.user

        if self.action == 'list' or self.action == 'create':
            if not user.is_staff and self.get_object().is_staff:
                return DoctorSerializer
            return UserSerializer

        else:
            profile = self.get_object()
            if str(profile.id) == str(user.id) or user.is_superuser:
                return UserDetailSerializer

            elif user.is_staff:
                if profile.is_staff:
                    return DoctorDetailSerializer
                else:
                    return UserDetailSerializer

            else:
                if profile.is_staff:
                    return UserDetailSerializer
                else:
                    PermissionDenied('You3 do not have permission to view or manage this user.')
            return self.serializer_class


class ManageInsuranceView(viewsets.ModelViewSet,
                          mixins.RetrieveModelMixin,
                          mixins.UpdateModelMixin,
                          mixins.DestroyModelMixin):
    """Manage the authenticated user"""
    serializer_class = InsuranceSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (authentication.TokenAuthentication,)
    queryset = Insurance.objects.all()

    def get_object(self):
        """Retrieve and return authenticated user"""
        return Insurance.objects.get(id=self.request.user.insurance)