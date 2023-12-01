from rest_framework import viewsets
from chat.serializers import *
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync



# Create your views here.
class ChatRoomViewSet(viewsets.ModelViewSet):
    queryset = ChatRoom.objects.all()
    serializer_class = ChatRoomSerializer


class ChatRoomMembershipViewSet(viewsets.ModelViewSet):
    queryset = ChatRoomMembership.objects.all()
    serializer_class = ChatRoomMembershipSerializer


class ChatMessageViewSet(viewsets.ModelViewSet):
    queryset = ChatMessage.objects.all()
    serializer_class = ChatMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Save the message to the database
        instance = serializer.save()

        # Broadcast the message to the real-time chat component
        chat_room_id = instance.chat_room_id
        message = instance.message
        sender = instance.sender.id

        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'chat_room_' + str(chat_room_id),
            {
                'type': 'chat_message',
                'message': message,
                'sender': sender,
            }
        )

        return serializer.representation
