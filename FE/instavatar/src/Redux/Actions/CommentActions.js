import { getCommentByIdAPI } from "../../API/CommentAPI";
import { SET_COMMENT_DETAIL } from "../ActionType/CommentActionTypes";

export const setCommentDetailRedux = (comment) => {
  return { type: SET_COMMENT_DETAIL, payload: comment };
};
export const setCommentDetail = (id) => {
  return (dispatch) => {
    return getCommentByIdAPI(id).then((res) => {
      dispatch(setCommentDetailRedux(res));
    });
  };
};
