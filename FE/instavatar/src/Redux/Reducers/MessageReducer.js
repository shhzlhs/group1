import {
  GET_ALL_MESSAGES_BY_CONVERSATION,
  GET_LAST_MESSAGES_BY_USER,
} from "../ActionType/MessageActionType";

export const lastMessageReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LAST_MESSAGES_BY_USER:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};
export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES_BY_CONVERSATION:
      return [...action.payload];
    default:
      return [...state];
  }
};
