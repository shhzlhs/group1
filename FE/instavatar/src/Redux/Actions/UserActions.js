import { getAllUsersAPI, getUserByUsernameAPI } from "../../API/UserAPI";
import {
  GET_ALL_USERS,
  SET_FOLLOWS_BAR,
  SET_USER_DETAIL,
  SET_USER_LOGEDIN,
} from "../ActionType/UserActionTypes";
const setUserLogedIn = (user) => {
  return { type: SET_USER_LOGEDIN, payload: user };
};
const setUserDetailRedux = (user) => {
  return { type: SET_USER_DETAIL, payload: user };
};
const setUserDetail = (username) => {
  return (dispatch) => {
    return getUserByUsernameAPI(username).then((res) => {
      dispatch(setUserDetailRedux(res));
    });
  };
};
const getAllUsersRedux = (users) => {
  return {
    type: GET_ALL_USERS,
    payload: users,
  };
};
const setFollowsBar = (users) => {
  return {
    type: SET_FOLLOWS_BAR,
    payload: users,
  };
};
const getAllUsers = () => {
  return (dispatch) => {
    return getAllUsersAPI().then((res) => {
      dispatch(getAllUsersRedux(res));
    });
  };
};
export {
  getAllUsers,
  getAllUsersRedux,
  setFollowsBar,
  setUserDetail,
  setUserLogedIn,
};
