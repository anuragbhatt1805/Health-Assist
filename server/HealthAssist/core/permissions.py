from rest_framework import permissions

class UpdateOwnProfile(permissions.BasePermission):
    """Class which allows user to update edit/update their own profile"""

    def has_object_permission(self, request, view, obj):
        """Check if user is trying to edit his own profile"""
        if request.user.is_superuser != True and obj.is_superuser:
            return False
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.id == request.user.id or request.user.is_superuser == True