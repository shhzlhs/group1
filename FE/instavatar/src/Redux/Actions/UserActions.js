import { getAllUsersAPI } from "../../API/UserAPI";
import { GET_ALL_USERS } from "../ActionType/UserActionTypes";

const getAllUsersRedux = (users) => {
  return {
    type: GET_ALL_USERS,
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
export { getAllUsers, getAllUsersRedux };
