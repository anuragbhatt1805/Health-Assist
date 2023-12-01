from django.test import TestCase
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from chat.models import ChatMessage
from mock import Mock
import json

class ChatRealtimeTest(TestCase):

    def test_message_broadcasting_and_reception(self):
        # Create mock objects
        mock_client = Mock()
        mock_channel_layer = Mock()

        # Send a message
        message_content = "Hello, World!"
        chat_room_id = 1
        ChatMessage.objects.create(chat_room_id=chat_room_id, sender="test_user", message=message_content)

        # Trigger real-time message broadcasting
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'chat_room_' + str(chat_room_id),
            {
                'type': 'chat_message',
                'message': message_content,
                'sender': 'test_user',
            }
        )

        # Verify message reception
        mock_client.receive.assert_called_once_with(json.dumps({
            'type': 'chat_message',
            'message': message_content,
            'sender': 'test_user',
        }))
