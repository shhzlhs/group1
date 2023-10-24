import {
  GET_ALL_USERS,
  SET_FOLLOWS_BAR,
  SET_USER_DETAIL,
  SET_USER_LOGEDIN,
} from "../ActionType/UserActionTypes";

var initialState = [];
const userReducer = (
  state = [
    {
      avatar: "",
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
const userDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_DETAIL:
      state = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
const userLogedInReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_LOGEDIN:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export {
  userReducer,
  followsBarReducer,
  userDetailReducer,
  userLogedInReducer,
};
