export enum WsListenEventTypes {
  Messages = 'messages',
}

export enum WsListenEventMessagesPayloadTypes {
  MessagesNewDialog = 'messages_new_dialog',
  MessagesUpdateDialog = 'messages_update_dialog',
  MessagesDeleteDialog = 'messages_delete_dialog',
  MessagesNewMessage = 'messages_new_message',
}

export enum WsEmitEventTypes {
  Messages = 'messages',
}

