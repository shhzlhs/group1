import {
  deleteNotificationAPI,
  getNotificationsByUserIdAPI,
} from "../../API/NotificationAPI";
import {
  DELETE_NO,
  GET_NO_BY_USER_ID,
  SET_NO_DEL,
} from "../ActionType/NotificationActionTypes";

export const getNoByUserIdRedux = (nos) => {
  return {
    type: GET_NO_BY_USER_ID,
    payload: nos,
  };
};
export const getNoByUserId = (userId) => {
  return (dispatch) => {
    return getNotificationsByUserIdAPI(userId).then((res) => {
      dispatch(getNoByUserIdRedux(res));
    });
  };
};
export const deleteNoRedux = (no) => {
  return {
    type: DELETE_NO,
    payload: no,
  };
};
export const deleteNo = (no) => {
  return (dispatch) => {
    return deleteNotificationAPI(no.id).then(() => {
      dispatch(deleteNoRedux(no));
    });
  };
};
export const setNoDel = (no) => {
  return { type: SET_NO_DEL, payload: no };
};
