import {
  CLOSE_BUY_GAME_SLOT_MODAL,
  CLOSE_BUY_ITEM_MODAL,
  CLOSE_COMMENT_LIKES_MODAL,
  CLOSE_CREATE_POST_MODAL,
  CLOSE_CREATE_REPORT_CONFIRM,
  CLOSE_DELETE_USER_ITEM_MODAL,
  CLOSE_DEL_CON_CONFIRM_MODAL,
  CLOSE_DEL_CON_MODAL,
  CLOSE_DEL_NO,
  CLOSE_EDIT_PROFILE_MODAL,
  CLOSE_FOLLOWINGS_LIST_MODAL,
  CLOSE_FOLLOWS_LIST_MODAL,
  CLOSE_GIVE_ITEM_MODAL,
  CLOSE_GIVE_ITEM_MODAL_IN_MESSAGE,
  CLOSE_LIST_FOLLOWINGS_TO_GIVE_ITEM,
  CLOSE_MODAL_TO_CONFIRM_GIVE_ITEM,
  CLOSE_NOS,
  CLOSE_POST_LIKES_MODAL,
  CLOSE_REPLIES,
  CLOSE_REPORT_MODAL,
  SHOW_BUY_GAME_SLOT_MODAL,
  SHOW_BUY_ITEM_MODAL,
  SHOW_COMMENT_LIKES_MODAL,
  SHOW_CREATE_POST_MODAL,
  SHOW_CREATE_REPORT_CONFIRM,
  SHOW_DELETE_USER_ITEM_MODAL,
  SHOW_DEL_CON_CONFIRM_MODAL,
  SHOW_DEL_CON_MODAL,
  SHOW_DEL_NO,
  SHOW_EDIT_PROFILE_MODAL,
  SHOW_FOLLOWINGS_LIST_MODAL,
  SHOW_FOLLOWS_LIST_MODAL,
  SHOW_GIVE_ITEM_MODAL,
  SHOW_GIVE_ITEM_MODAL_IN_MESSAGE,
  SHOW_LIST_FOLLOWINGS_TO_GIVE_ITEM,
  SHOW_MODAL_TO_CONFIRM_GIVE_ITEM,
  SHOW_NOS,
  SHOW_POST_LIKES_MODAL,
  SHOW_REPLIES,
  SHOW_REPORT_MODAL,
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
const showReportReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_REPORT_MODAL:
      return true;
    case CLOSE_REPORT_MODAL:
      return false;
    default:
      return state;
  }
};
const showCreateReportConfirmReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_CREATE_REPORT_CONFIRM:
      return true;
    case CLOSE_CREATE_REPORT_CONFIRM:
      return false;
    default:
      return state;
  }
};
const showDeleteUserItemReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_DELETE_USER_ITEM_MODAL:
      return true;
    case CLOSE_DELETE_USER_ITEM_MODAL:
      return false;
    default:
      return state;
  }
};
const showBuyItemModalReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_BUY_ITEM_MODAL:
      return true;
    case CLOSE_BUY_ITEM_MODAL:
      return false;
    default:
      return state;
  }
};
const showGiveItemModalReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_GIVE_ITEM_MODAL:
      return true;
    case CLOSE_GIVE_ITEM_MODAL:
      return false;
    default:
      return state;
  }
};
const showListToGiveReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_LIST_FOLLOWINGS_TO_GIVE_ITEM:
      return true;
    case CLOSE_LIST_FOLLOWINGS_TO_GIVE_ITEM:
      return false;
    default:
      return state;
  }
};
const showConfirmGiveItemReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_MODAL_TO_CONFIRM_GIVE_ITEM:
      return true;
    case CLOSE_MODAL_TO_CONFIRM_GIVE_ITEM:
      return false;
    default:
      return state;
  }
};
const showBuyGameSlotReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_BUY_GAME_SLOT_MODAL:
      return true;
    case CLOSE_BUY_GAME_SLOT_MODAL:
      return false;
    default:
      return state;
  }
};
const showEditProfileReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_EDIT_PROFILE_MODAL:
      return true;
    case CLOSE_EDIT_PROFILE_MODAL:
      return false;
    default:
      return state;
  }
};
const showGiveItemInMessageReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_GIVE_ITEM_MODAL_IN_MESSAGE:
      return true;
    case CLOSE_GIVE_ITEM_MODAL_IN_MESSAGE:
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
  showCreateReportConfirmReducer,
  showReportReducer,
  showDeleteUserItemReducer,
  showBuyItemModalReducer,
  showGiveItemModalReducer,
  showListToGiveReducer,
  showConfirmGiveItemReducer,
  showBuyGameSlotReducer,
  showEditProfileReducer,
  showGiveItemInMessageReducer,
};
