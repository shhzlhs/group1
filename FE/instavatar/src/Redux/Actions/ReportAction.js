import {
  SET_COMMENT_REPORT,
  SET_POST_REPORT,
  SET_USER_REPORT,
} from "../ActionType/ReportActionTypes";

export const setPostReportAction = (post) => {
  return { type: SET_POST_REPORT, payload: post };
};
export const setCommentReportAction = (comment) => {
  return { type: SET_COMMENT_REPORT, payload: comment };
};
export const setUserReportAction = (user) => {
  return { type: SET_USER_REPORT, payload: user };
};
