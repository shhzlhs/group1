import {
  getLastMessageByUserIdAPI,
  getMessagesByConversationIdAPI,
  getNumberOfNotReadYetMessagesByUserIdAPI,
} from "../../API/MessageAPI";
import {
  GET_ALL_MESSAGES_BY_CONVERSATION,
  GET_LAST_MESSAGES_BY_USER,
  GET_NUMBER_OF_NOT_READ_MESSAGES,
} from "../ActionType/MessageActionType";
export const getLastMessageByUserRedux = (messes) => {
  return { type: GET_LAST_MESSAGES_BY_USER, payload: messes };
};
export const getLastMessagesByUser = (userId) => {
  return (dispatch) => {
    return getLastMessageByUserIdAPI(userId).then((res) => {
      dispatch(getLastMessageByUserRedux(res));
    });
  };
};
export const getMessagesByConversationRedux = (messes) => {
  return {
    type: GET_ALL_MESSAGES_BY_CONVERSATION,
    payload: messes,
  };
};
export const getMessagesByConversation = (conId) => {
  return (dispatch) => {
    return getMessagesByConversationIdAPI(conId).then((res) => {
      dispatch(getMessagesByConversationRedux(res));
    });
  };
};
export const getNumberOfNotReadYeatMessageRedux = (number) => {
  return { type: GET_NUMBER_OF_NOT_READ_MESSAGES, payload: number };
};
export const getNumberOfNotReadYetMessage = (userId) => {
  return (dispatch) => {
    return getNumberOfNotReadYetMessagesByUserIdAPI(userId).then((res) => {
      dispatch(getNumberOfNotReadYeatMessageRedux(res));
    });
  };
};
