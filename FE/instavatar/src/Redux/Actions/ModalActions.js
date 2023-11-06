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
const showDelNoModal = () => {
  return { type: SHOW_DEL_NO };
};
const closeDelNoModal = () => {
  return { type: CLOSE_DEL_NO };
};
const showCreatePostModal = () => {
  return { type: SHOW_CREATE_POST_MODAL };
};
const closeCreatePostModal = () => {
  return { type: CLOSE_CREATE_POST_MODAL };
};
const showDelConModal = () => {
  return { type: SHOW_DEL_CON_MODAL };
};
const closeDelConModal = () => {
  return { type: CLOSE_DEL_CON_MODAL };
};
const showDelConConfirmModal = () => {
  return { type: SHOW_DEL_CON_CONFIRM_MODAL };
};
const closeDelConConfirmModal = () => {
  return { type: CLOSE_DEL_CON_CONFIRM_MODAL };
};
const showReportModalAction = () => {
  return { type: SHOW_REPORT_MODAL };
};
const closeReportModalAction = () => {
  return { type: CLOSE_REPORT_MODAL };
};
const showCreateReportConfirmModalAction = () => {
  return { type: SHOW_CREATE_REPORT_CONFIRM };
};
const closeCreateReportConfirmModalAction = () => {
  return { type: CLOSE_CREATE_REPORT_CONFIRM };
};
const showDeleteUserItemModal = () => {
  return { type: SHOW_DELETE_USER_ITEM_MODAL };
};
const closeDeleteUserItemModal = () => {
  return { type: CLOSE_DELETE_USER_ITEM_MODAL };
};
const showBuyItemModal = () => {
  return { type: SHOW_BUY_ITEM_MODAL };
};
const closeBuyItemModal = () => {
  return { type: CLOSE_BUY_ITEM_MODAL };
};
const showGiveItemModal = () => {
  return { type: SHOW_GIVE_ITEM_MODAL };
};
const closeGiveItemModal = () => {
  return { type: CLOSE_GIVE_ITEM_MODAL };
};
const showListToGive = () => {
  return { type: SHOW_LIST_FOLLOWINGS_TO_GIVE_ITEM };
};
const closeListToGive = () => {
  return { type: CLOSE_LIST_FOLLOWINGS_TO_GIVE_ITEM };
};
const showConfirmGiveItemAction = () => {
  return { type: SHOW_MODAL_TO_CONFIRM_GIVE_ITEM };
};
const closeConfirmGiveItemAction = () => {
  return { type: CLOSE_MODAL_TO_CONFIRM_GIVE_ITEM };
};
const showBuyGameSlotModalAction = () => {
  return { type: SHOW_BUY_GAME_SLOT_MODAL };
};
const closeBuyGameSlotModalAction = () => {
  return { type: CLOSE_BUY_GAME_SLOT_MODAL };
};
const showEditProfileModal = () => {
  return { type: SHOW_EDIT_PROFILE_MODAL };
};
const closeEditProfileModal = () => {
  return { type: CLOSE_EDIT_PROFILE_MODAL };
};
const showGiveInMessageAction = () => {
  return { type: SHOW_GIVE_ITEM_MODAL_IN_MESSAGE };
};
const closeGiveInMessageAction = () => {
  return { type: CLOSE_GIVE_ITEM_MODAL_IN_MESSAGE };
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
  showDelNoModal,
  closeDelNoModal,
  showCreatePostModal,
  closeCreatePostModal,
  showDelConConfirmModal,
  closeDelConConfirmModal,
  closeDelConModal,
  showDelConModal,
  showCreateReportConfirmModalAction,
  showReportModalAction,
  closeCreateReportConfirmModalAction,
  closeReportModalAction,
  showDeleteUserItemModal,
  closeDeleteUserItemModal,
  showBuyItemModal,
  closeBuyItemModal,
  showGiveItemModal,
  closeGiveItemModal,
  showListToGive,
  closeListToGive,
  showConfirmGiveItemAction,
  closeConfirmGiveItemAction,
  closeBuyGameSlotModalAction,
  showBuyGameSlotModalAction,
  showEditProfileModal,
  closeEditProfileModal,
  showGiveInMessageAction,
  closeGiveInMessageAction,
};
