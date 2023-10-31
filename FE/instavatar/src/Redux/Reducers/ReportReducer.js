import {
  SET_COMMENT_REPORT,
  SET_POST_REPORT,
  SET_USER_REPORT,
} from "../ActionType/ReportActionTypes";

export const postReportReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_POST_REPORT:
      return { ...action.payload };
    default:
      return state;
  }
};
export const commentReportReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_COMMENT_REPORT:
      return { ...action.payload };
    default:
      return state;
  }
};
export const userReportReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_REPORT:
      return { ...action.payload };
    default:
      return state;
  }
};
