import uuid, os
from django.conf import settings
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin
)


# Custom Function for Profile Picture
def profile_file_name(instance, filepath):
    "Function for Profile Picture"
    ext = os.path.splitext(filepath)[1]
    filename = f"{uuid.uuid4()}{ext}"
    return os.path.join('profile', filename)


# Custom Manager for Models
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        "Create and save a new user"
        if not email:
            raise ValueError('Users must have an email')
        if not extra_fields.get('name'):
            raise ValueError('Users must have a name')
        if not extra_fields.get('dob'):
            raise ValueError('Users must have a date of birth')
        if extra_fields.get('insurance'):
            insurance = Insurance.objects.get(id=extra_fields.get('insurance'))
            if not insurance:
                # insurance = Insurance(id=extra_fields.get('insurance'))
                ValueError('Insurance does not exist')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a new superuser with given details"""
        user = self.create_user(email, password, **extra_fields)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user


# Custome Models for the Application
class Insurance(models.Model):
    "Custom models for Insurance"
    id = models.CharField(max_length=20, primary_key=True)
    company = models.CharField(max_length=255)
    policy = models.CharField(max_length=255)
    amount = models.IntegerField()
    expiry = models.DateField()
    objects = models.Manager()

class User(AbstractBaseUser, PermissionsMixin):
    "Custom user model that supports using email instead of email"

    # The following fields are required by Django
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    aabhaId = models.CharField(max_length=20, unique=True, editable=False, default=None, null=True)
    email = models.EmailField(max_length=255, unique=True)
    phone = models.CharField(max_length=15, unique=True, null=True)

    name = models.CharField(max_length=255)
    dob = models.DateField()
    address = models.CharField(max_length=255, null=True)
    profile = models.ImageField(upload_to=profile_file_name, null=True)

    height = models.FloatField(null=True)
    weight = models.FloatField(null=True)
    blood_group = models.CharField(max_length=5, null=True)
    profession = models.CharField(max_length=255, null=True)

    insurance = models.OneToOneField(Insurance, on_delete=models.CASCADE, null=True)
    date_joined = models.DateField(auto_now_add=True)

    # The following fields are required by Django
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    # External Important Fields
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'dob']

    # The following fields are required by Django
    objects = UserManager()
