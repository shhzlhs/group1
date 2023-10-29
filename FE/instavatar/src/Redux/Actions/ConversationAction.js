import { getConversationsByUserIdAPI } from "../../API/CoversationAPI";
import {
  GET_CONVERSATIONS_BY_USER_ID,
  HIDE_CONVERSATION_SEARCH,
  SET_CONVERSATION_DETAIL,
  SET_INPUT_TO_SEARCH_USER_FOR_WRITE_NEW_MESSAGE,
  SHOW_CONVERSATION_SEARCH,
} from "../ActionType/ConversationActionType";

export const setInputToSearchUserForWriteNewMessage = (input) => {
  return {
    type: SET_INPUT_TO_SEARCH_USER_FOR_WRITE_NEW_MESSAGE,
    payload: input,
  };
};
export const showConversationSearch = () => {
  return { type: SHOW_CONVERSATION_SEARCH };
};
export const hideConversationSearch = () => {
  return { type: HIDE_CONVERSATION_SEARCH };
};
export const setCoversationDetail = (con) => {
  return { type: SET_CONVERSATION_DETAIL, payload: con };
};
export const getConversationsByUserIdRedux = (convers) => {
  return { type: GET_CONVERSATIONS_BY_USER_ID, payload: convers };
};
export const getConversationsByUserId = (userId) => {
  return (dispatch) => {
    return getConversationsByUserIdAPI(userId).then((res) => {
      dispatch(getConversationsByUserIdRedux(res));
    });
  };
};
