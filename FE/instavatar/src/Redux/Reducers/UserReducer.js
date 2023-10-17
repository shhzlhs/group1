import { GET_ALL_USERS } from "../ActionType/UserActionTypes";

var initialState = [];
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};
export { userReducer };
