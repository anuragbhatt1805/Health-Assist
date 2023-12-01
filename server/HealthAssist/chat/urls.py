from django.urls import path, include
from rest_framework.routers import DefaultRouter
from chat import routing
from chat.views import ChatRoomViewSet, ChatRoomMembershipViewSet, ChatMessageViewSet

router = DefaultRouter()
router.register(r'chat-rooms', ChatRoomViewSet, basename='chat-room')
router.register(r'chat-room-memberships', ChatRoomMembershipViewSet, basename='chat-room-membership')
router.register(r'chat-messages', ChatMessageViewSet, basename='chat-message')

urlpatterns = [
    path('', include(router.urls)),
    path('ws/', include(routing.websocket_urlpatterns)),
]
