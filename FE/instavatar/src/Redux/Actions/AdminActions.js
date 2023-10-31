import {
  SET_INPUT_FORSEARCH_USER_ADMIN,
  SET_LENGTH_OF_REPORTS_USER,
  SET_STATUS_FORSEARCH_USER_ADMIN,
} from "../ActionType/AdminActionTypes";

export const setInputForSearchUserAdminAction = (input) => {
  return { type: SET_INPUT_FORSEARCH_USER_ADMIN, payload: input };
};
export const setStatusForSearchUserAdminAction = (status) => {
  return { type: SET_STATUS_FORSEARCH_USER_ADMIN, payload: status };
};
export const setLengthOfReportsUserAction = (length) => {
  return { type: SET_LENGTH_OF_REPORTS_USER, payload: length };
};
