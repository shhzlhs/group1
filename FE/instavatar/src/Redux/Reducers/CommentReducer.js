import { SET_COMMENT_DETAIL } from "../ActionType/CommentActionTypes";

export const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_COMMENT_DETAIL:
      state = action.payload;
      return state;

    default:
      return state;
  }
};
