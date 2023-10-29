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
  showCreatePostReducer,
  showDelNoReducer,
  showFollowingsListModalReducer,
  showFollowsListModalReducer,
  showNosReducer,
  showPostLikesModalReducer,
  showRepliesReducer,
} from "./ModalReducers";
import { commentReducer } from "./CommentReducer";
import { noDelReducer, notificationReducer } from "./NotificationReducer";
import {
  conversationDetailReducer,
  conversationsReducer,
  hideConversationSearchReducer,
  inputToSearchUserForWriteNewMessageReducer,
} from "./ConversationReducer";
import { lastMessageReducer, messagesReducer } from "./MessageReducer";
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
  showDelNo: showDelNoReducer,
  noDel: noDelReducer,
  showCreatePost: showCreatePostReducer,
  inputToSearchUserForWriteNewMessage:
    inputToSearchUserForWriteNewMessageReducer,
  hideConversationSearch: hideConversationSearchReducer,
  conversations: conversationsReducer,
  conversationDetail: conversationDetailReducer,
  lastMessages: lastMessageReducer,
  messages: messagesReducer,
});
export { rootReducer };
