import json
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from channels.generic.websocket import AsyncWebsocketConsumer


class ChatConsumer(AsyncWebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        # Unsubscribe from the chat room channel group when disconnecting
        chat_room_id = self.scope['url'].kwargs['chat_room_id']
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_discard)(
            'chat_room_' + chat_room_id,
            self
        )

    def receive(self, text_data):
        data = json.loads(text_data)
        chat_room_id = self.scope['url'].kwargs['chat_room_id']
        message = data['message']

        # Broadcast the message to all users in the chat room
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'chat_room_' + chat_room_id,
            {
                'type': 'chat_message',
                'message': message,
                'sender': self.scope['user'].id,
            }
        )
