import {
  createCoversationAPI,
  delConversationByUserAPI,
  deleteConversationByIdAPI,
  getConversationsByUserIdAPI,
} from "../../API/CoversationAPI";
import {
  getLastMessageByUserIdAPI,
  getListNumberOfNotReadMessageByUserAPI,
} from "../../API/MessageAPI";
import {
  DELETE_CONVERSATION,
  GET_CONVERSATIONS_BY_USER_ID,
  GET_LIST_NUMBER_OF_NOT_READ_YET_MESSAGES_PER_CONVERSATION_BY_USER,
  HIDE_CONVERSATION_SEARCH,
  SET_CONVERSATION_DETAIL,
  SET_CONVERSATION_TO_DEL,
  SET_INPUT_TO_SEARCH_USER_FOR_WRITE_NEW_MESSAGE,
  SHOW_CONVERSATION_SEARCH,
} from "../ActionType/ConversationActionType";
import { getLastMessageByUserRedux } from "./MessageActions";

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
export const getListNumberOfNotReadYetMessagePerConversationByUserRedux = (
  res
) => {
  return {
    type: GET_LIST_NUMBER_OF_NOT_READ_YET_MESSAGES_PER_CONVERSATION_BY_USER,
    payload: res,
  };
};
export const getListNumberOfNotReadYetMessagePerConversationByUser = (
  userId
) => {
  return (dispatch) => {
    return getListNumberOfNotReadMessageByUserAPI(userId).then((res) => {
      dispatch(getListNumberOfNotReadYetMessagePerConversationByUserRedux(res));
    });
  };
};

export const createConversationRedux = (con, userId) => {
  return (dispatch) => {
    createCoversationAPI(con).then(() => {
      return getConversationsByUserIdAPI(userId).then((res) => {
        dispatch(getConversationsByUserIdRedux(res));
      });
    });
    getLastMessageByUserIdAPI(userId).then((res) => {
      dispatch(getLastMessageByUserRedux(res));
    });
  };
};
export const deleteConversationRedux = (con) => {
  return { type: DELETE_CONVERSATION, payload: con };
};
export const delelteConversation = (con) => {
  return (dispatch) => {
    return deleteConversationByIdAPI(con.id).then(() => {
      dispatch(deleteConversationRedux(con));
    });
  };
};
export const updateToDelByUser = (userId, con) => {
  return (dispatch) => {
    return delConversationByUserAPI(userId, con.id).then(() => {
      dispatch(deleteConversationRedux(con));
    });
  };
};
export const setConversationToDel = (con) => {
  return { type: SET_CONVERSATION_TO_DEL, payload: con };
};
