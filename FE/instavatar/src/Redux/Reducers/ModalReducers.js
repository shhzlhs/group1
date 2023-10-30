import {
  CLOSE_COMMENT_LIKES_MODAL,
  CLOSE_CREATE_POST_MODAL,
  CLOSE_DEL_CON_CONFIRM_MODAL,
  CLOSE_DEL_CON_MODAL,
  CLOSE_DEL_NO,
  CLOSE_FOLLOWINGS_LIST_MODAL,
  CLOSE_FOLLOWS_LIST_MODAL,
  CLOSE_NOS,
  CLOSE_POST_LIKES_MODAL,
  CLOSE_REPLIES,
  SHOW_COMMENT_LIKES_MODAL,
  SHOW_CREATE_POST_MODAL,
  SHOW_DEL_CON_CONFIRM_MODAL,
  SHOW_DEL_CON_MODAL,
  SHOW_DEL_NO,
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
const showDelNoReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_DEL_NO:
      return true;
    case CLOSE_DEL_NO:
      return false;
    default:
      return state;
  }
};
const showCreatePostReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_CREATE_POST_MODAL:
      return true;
    case CLOSE_CREATE_POST_MODAL:
      return false;
    default:
      return state;
  }
};
const showDelConReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_DEL_CON_MODAL:
      return true;
    case CLOSE_DEL_CON_MODAL:
      return false;
    default:
      return state;
  }
};
const showDelConConfirmReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_DEL_CON_CONFIRM_MODAL:
      return true;
    case CLOSE_DEL_CON_CONFIRM_MODAL:
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
  showDelNoReducer,
  showCreatePostReducer,
  showDelConConfirmReducer,
  showDelConReducer,
};
