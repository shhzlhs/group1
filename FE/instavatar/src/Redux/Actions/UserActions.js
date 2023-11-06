import {
  changeMoneyByUserAPI,
  editUserAPI,
  getAllUsersAPI,
  getUserByUsernameAPI,
} from "../../API/UserAPI";
import {
  GET_ALL_USERS,
  SET_FOLLOWS_BAR,
  SET_INPUT_TO_SEARCH_USER,
  SET_USER_DETAIL,
  SET_USER_LOGEDIN,
  SET_USER_TO_SHOW_ITEMS,
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
const setUserToShowItemsRedux = (user) => {
  return { type: SET_USER_TO_SHOW_ITEMS, payload: user };
};
const setUserToShowItemsAction = (username) => {
  return (dispatch) => {
    return getUserByUsernameAPI(username).then((res) => {
      dispatch(setUserToShowItemsRedux(res));
    });
  };
};
const setInputToSearchUserAction = (input) => {
  return { type: SET_INPUT_TO_SEARCH_USER, payload: input };
};
const updateCoinGoldUserLogedIn = (userId, coin, gold) => {
  return (dispatch) => {
    return changeMoneyByUserAPI(userId, coin, gold).then((res) => {
      dispatch(setUserLogedIn(res));
      dispatch(setUserToShowItemsRedux(res));
    });
  };
};
const editUserProfileAction = (userId, user) => {
  return (dispatch) => {
    return editUserAPI(userId, user).then((res) => {
      dispatch(setUserLogedIn(res));
      dispatch(setUserDetailRedux(res));
    });
  };
};
export {
  getAllUsers,
  getAllUsersRedux,
  setFollowsBar,
  setUserDetail,
  setUserLogedIn,
  setUserDetailRedux,
  setUserToShowItemsAction,
  setUserToShowItemsRedux,
  setInputToSearchUserAction,
  updateCoinGoldUserLogedIn,
  editUserProfileAction,
};
