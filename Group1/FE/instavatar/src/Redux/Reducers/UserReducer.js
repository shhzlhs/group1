import { GET_ALL_USERS, SET_FOLLOWS_BAR } from "../ActionType/UserActionTypes";

var initialState = [];
const userReducer = (
  state = [
    {
      followings: [{ avatar: "", username: "" }],
      follows: [{ avatar: "", username: "" }],
    },
  ],
  action
) => {
  switch (action.type) {
    case GET_ALL_USERS:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};
const followsBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOLLOWS_BAR:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};
export { userReducer, followsBarReducer };
