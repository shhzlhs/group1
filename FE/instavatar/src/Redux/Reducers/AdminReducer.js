import {
  SET_INPUT_FORSEARCH_USER_ADMIN,
  SET_LENGTH_OF_REPORTS_USER,
  SET_STATUS_FORSEARCH_USER_ADMIN,
} from "../ActionType/AdminActionTypes";

export const inputForSearchUserAdminReducer = (state = "", action) => {
  switch (action.type) {
    case SET_INPUT_FORSEARCH_USER_ADMIN:
      return action.payload;

    default:
      return state;
  }
};

export const statusForSearchUserReducer = (state = "", action) => {
  switch (action.type) {
    case SET_STATUS_FORSEARCH_USER_ADMIN:
      return action.payload;

    default:
      return state;
  }
};
export const lengthOfReportsForSearchUserReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_LENGTH_OF_REPORTS_USER:
      return action.payload;

    default:
      return state;
  }
};
