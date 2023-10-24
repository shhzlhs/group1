import { GET_ALL_POST, GET_POST_BY_ID } from "../ActionType/PostActionTypes";

var initialState = [];
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};
const potsDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POST_BY_ID:
      state = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export { postReducer, potsDetailReducer };
