from django.contrib import admin
from .models import ChatRoom, ChatRoomMembership, ChatMessage

# Register your models here.
admin.site.register(ChatRoom)
admin.site.register(ChatRoomMembership)
admin.site.register(ChatMessage)