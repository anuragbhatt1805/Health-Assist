import uuid, os
from django.db import models
from django.conf import settings

def chat_image_upload(instance, filepath):
    ext = os.path.splitext(filepath)[1]
    filename = f"{uuid.uuid4()}{ext}"
    return os.path.join('uploads', 'message', 'image', filename)

def chat_pdf_upload(instance, filepath):
    ext = os.path.splitext(filepath)[1]
    filename = f"{uuid.uuid4()}{ext}"
    return os.path.join('uploads', 'message', 'pdf', filename)

# Custom Models
class ChatRoom(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, blank=False, null=False)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    objects = models.Manager()


class ChatRoomMembership(models.Model):
    chat_room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    joined_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    objects = models.Manager()


class ChatMessage(models.Model):
    chat_room = models.ForeignKey('ChatRoom', on_delete=models.CASCADE)
    sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    message = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='chat_image_upload', null=True)
    pdf_file = models.FileField(upload_to='chat_pdf_upload', null=True)
    sent_at = models.DateTimeField(auto_now_add=True)

    objects = models.Manager()