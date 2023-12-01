from django.urls import path, include
from django.conf import settings

from chat.consumers import ChatConsumer

websocket_urlpatterns = [
    path('ws/chat-rooms/<chat_room_id>/', ChatConsumer),
]
