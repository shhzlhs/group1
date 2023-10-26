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
const showCommentLikesModalReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_COMMENT_LIKES_MODAL:
      return true;
    case CLOSE_COMMENT_LIKES_MODAL:
      return false;
    default:
      return state;
  }
};
const showPostLikesModalReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_POST_LIKES_MODAL:
      return true;
    case CLOSE_POST_LIKES_MODAL:
      return false;
    default:
      return state;
  }
};
const showRepliesReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_REPLIES:
      return true;
    case CLOSE_REPLIES:
      return false;
    default:
      return state;
  }
};
const showNosReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_NOS:
      return true;
    case CLOSE_NOS:
      return false;
    default:
      return state;
  }
};
export {
  showFollowingsListModalReducer,
  showFollowsListModalReducer,
  showCommentLikesModalReducer,
  showPostLikesModalReducer,
  showRepliesReducer,
  showNosReducer,
};
