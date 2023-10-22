import { GET_ALL_POST } from "../ActionType/PostActionTypes";
import { GET_ALL_USERS } from "../ActionType/UserActionTypes";

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
export { postReducer };
