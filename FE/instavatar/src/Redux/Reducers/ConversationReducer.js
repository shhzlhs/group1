import {
  GET_CONVERSATIONS_BY_USER_ID,
  HIDE_CONVERSATION_SEARCH,
  SET_CONVERSATION_DETAIL,
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
