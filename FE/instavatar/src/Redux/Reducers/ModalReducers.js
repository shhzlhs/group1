import {
  CLOSE_FOLLOWINGS_LIST_MODAL,
  CLOSE_FOLLOWS_LIST_MODAL,
  SHOW_FOLLOWINGS_LIST_MODAL,
  SHOW_FOLLOWS_LIST_MODAL,
} from "../ActionType/ModalActionTypes";

const showFollowsListModalReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_FOLLOWS_LIST_MODAL:
      return true;
    case CLOSE_FOLLOWS_LIST_MODAL:
      return false;
    default:
      return state;
  }
};

const showFollowingsListModalReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_FOLLOWINGS_LIST_MODAL:
      return true;
    case CLOSE_FOLLOWINGS_LIST_MODAL:
      return false;
    default:
      return state;
  }
};

export { showFollowingsListModalReducer, showFollowsListModalReducer };
