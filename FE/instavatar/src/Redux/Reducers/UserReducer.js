import {
  GET_ALL_USERS,
  SET_FOLLOWS_BAR,
  SET_INPUT_TO_SEARCH_USER,
  SET_USER_DETAIL,
  SET_USER_LOGEDIN,
  SET_USER_TO_SHOW_ITEMS,
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
const userToShowItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_TO_SHOW_ITEMS:
      return { ...action.payload };
    default:
      return state;
  }
};
const inputForSearchUserReducer = (state = "", action) => {
  switch (action.type) {
    case SET_INPUT_TO_SEARCH_USER:
      return action.payload;
    default:
      return state;
  }
};
export {
  userReducer,
  followsBarReducer,
  userDetailReducer,
  userLogedInReducer,
  userToShowItemsReducer,
  inputForSearchUserReducer,
};
