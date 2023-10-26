import {
  CLOSE_COMMENT_LIKES_MODAL,
  CLOSE_FOLLOWINGS_LIST_MODAL,
  CLOSE_FOLLOWS_LIST_MODAL,
  CLOSE_NOS,
  CLOSE_POST_LIKES_MODAL,
  CLOSE_REPLIES,
  SHOW_COMMENT_LIKES_MODAL,
  SHOW_FOLLOWINGS_LIST_MODAL,
  SHOW_FOLLOWS_LIST_MODAL,
  SHOW_NOS,
  SHOW_POST_LIKES_MODAL,
  SHOW_REPLIES,
} from "../ActionType/ModalActionTypes";

const showFollowsListModal = () => {
  return { type: SHOW_FOLLOWS_LIST_MODAL };
};
const showFollowingsListModal = () => {
  return { type: SHOW_FOLLOWINGS_LIST_MODAL };
};
const showPostLikesModal = () => {
  return { type: SHOW_POST_LIKES_MODAL };
};
const showCommentLikesModal = () => {
  return { type: SHOW_COMMENT_LIKES_MODAL };
};
const showReplies = () => {
  return { type: SHOW_REPLIES };
};

const closeFollowingsListModal = () => {
  return { type: CLOSE_FOLLOWINGS_LIST_MODAL };
};
const closeFollowsListModal = () => {
  return { type: CLOSE_FOLLOWS_LIST_MODAL };
};
const closePostLikesModal = () => {
  return { type: CLOSE_POST_LIKES_MODAL };
};
const closeCommentLikesModal = () => {
  return { type: CLOSE_COMMENT_LIKES_MODAL };
};

const closeRePlies = () => {
  return { type: CLOSE_REPLIES };
};
const showNosModal = () => {
  return { type: SHOW_NOS };
};
const closeNosModal = () => {
  return { type: CLOSE_NOS };
};
export {
  closeFollowingsListModal,
  closeFollowsListModal,
  showFollowingsListModal,
  showFollowsListModal,
  showCommentLikesModal,
  showPostLikesModal,
  showReplies,
  closeCommentLikesModal,
  closePostLikesModal,
  closeRePlies,
  showNosModal,
  closeNosModal,
};
