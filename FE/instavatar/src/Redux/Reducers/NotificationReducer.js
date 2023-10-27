import {
  DELETE_NO,
  GET_NO_BY_USER_ID,
  SET_NO_DEL,
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
export const noDelReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_NO_DEL:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
