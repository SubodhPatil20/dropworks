export interface WsMessage<T = string, P = any> {
  type: T;
  payload: P;
}
