import { getAllUsersAPI } from "../../API/UserAPI";
import { GET_ALL_USERS, SET_FOLLOWS_BAR } from "../ActionType/UserActionTypes";

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
export { getAllUsers, getAllUsersRedux, setFollowsBar };
