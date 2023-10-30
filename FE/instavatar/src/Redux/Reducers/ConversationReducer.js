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

export const inputToSearchUserForWriteNewMessageReducer = (
  state = "",
  action
) => {
  switch (action.type) {
    case SET_INPUT_TO_SEARCH_USER_FOR_WRITE_NEW_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
export const conversationsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CONVERSATIONS_BY_USER_ID:
      state = action.payload;
      return [...state];

    case DELETE_CONVERSATION:
      let conversation = action.payload;
      let conversations = state.filter((con) => con.id !== conversation.id);
      return [...conversations];
    default:
      return state;
  }
};
export const conversationDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CONVERSATION_DETAIL:
      state = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export const conversationToDelReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CONVERSATION_TO_DEL:
      state = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export const hideConversationSearchReducer = (state = true, action) => {
  switch (action.type) {
    case SHOW_CONVERSATION_SEARCH:
      return false;
    case HIDE_CONVERSATION_SEARCH:
      return true;
    default:
      return state;
  }
};
export const listNumberOfNotReadMessagesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_NUMBER_OF_NOT_READ_YET_MESSAGES_PER_CONVERSATION_BY_USER:
      return [...action.payload];
    default:
      return [...state];
  }
};
