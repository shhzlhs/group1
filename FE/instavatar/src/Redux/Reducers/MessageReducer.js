import {
  GET_ALL_MESSAGES_BY_CONVERSATION,
  GET_LAST_MESSAGES_BY_USER,
  GET_NUMBER_OF_NOT_READ_MESSAGES,
} from "../ActionType/MessageActionType";

export const lastMessageReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LAST_MESSAGES_BY_USER:
      return [...action.payload];
    default:
      return state;
  }
};
export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES_BY_CONVERSATION:
      return [...action.payload];
    default:
      return state;
  }
};
export const numberOfNotReadReducer = (state = 0, action) => {
  switch (action.type) {
    case GET_NUMBER_OF_NOT_READ_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};
