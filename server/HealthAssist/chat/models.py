import uuid, os
from django.db import models
from django.conf import settings


# Custom Models
class ChatRoom(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)