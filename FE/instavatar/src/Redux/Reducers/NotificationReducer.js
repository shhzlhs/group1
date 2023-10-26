import {
  DELETE_NO,
  GET_NO_BY_USER_ID,
} from "../ActionType/NotificationActionTypes";

export const notificationReducer = (state = [], action) => {
  switch (action.type) {
    case GET_NO_BY_USER_ID:
      state = action.payload;
      return [...state];
    case DELETE_NO:
      return [...state.filter((st) => st !== action.payload)];
    default:
      return state;
  }
};
