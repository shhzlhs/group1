import {
  CLOSE_FOLLOWINGS_LIST_MODAL,
  CLOSE_FOLLOWS_LIST_MODAL,
  SHOW_FOLLOWINGS_LIST_MODAL,
  SHOW_FOLLOWS_LIST_MODAL,
} from "../ActionType/ModalActionTypes";

const showFollowsListModal = () => {
  return { type: SHOW_FOLLOWS_LIST_MODAL };
};
const showFollowingsListModal = () => {
  return { type: SHOW_FOLLOWINGS_LIST_MODAL };
};
const closeFollowingsListModal = () => {
  return { type: CLOSE_FOLLOWINGS_LIST_MODAL };
};
const closeFollowsListModal = () => {
  return { type: CLOSE_FOLLOWS_LIST_MODAL };
};
export {
  closeFollowingsListModal,
  closeFollowsListModal,
  showFollowingsListModal,
  showFollowsListModal,
};
