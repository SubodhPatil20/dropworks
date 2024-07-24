import { WsEmitEventTypes, WsListenEventMessagesPayloadTypes, WsListenEventTypes } from './ws.event-type';
import { WsMessage } from './ws.message';

export type WsListenEvents = {
  [WsListenEventTypes.Messages]: (data: WsMessage<WsListenEventMessagesPayloadTypes>) => void;
};

export type WsEmitEvents = {
  [WsEmitEventTypes.Messages]: void,
};
