import { combineReducers } from "redux";
import {
  followsBarReducer,
  userDetailReducer,
  userLogedInReducer,
  userReducer,
} from "./UserReducer";
import { postReducer, potsDetailReducer } from "./PostReducer";
import {
  showCommentLikesModalReducer,
  showFollowingsListModalReducer,
  showFollowsListModalReducer,
  showNosReducer,
  showPostLikesModalReducer,
  showRepliesReducer,
} from "./ModalReducers";
import { commentReducer } from "./CommentReducer";
import { notificationReducer } from "./NotificationReducer";
const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  followsBar: followsBarReducer,
  userDetail: userDetailReducer,
  userLogedIn: userLogedInReducer,
  postDetail: potsDetailReducer,
  showFollows: showFollowsListModalReducer,
  showFollowings: showFollowingsListModalReducer,
  commentDetail: commentReducer,
  showCommentLikes: showCommentLikesModalReducer,
  showPostLikes: showPostLikesModalReducer,
  showReplies: showRepliesReducer,
  notifications: notificationReducer,
  showNos: showNosReducer,
});
export { rootReducer };
