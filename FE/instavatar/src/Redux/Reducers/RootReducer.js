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
  showCreateReportConfirmReducer,
  showDelConConfirmReducer,
  showDelConReducer,
  showDelNoReducer,
  showFollowingsListModalReducer,
  showFollowsListModalReducer,
  showNosReducer,
  showPostLikesModalReducer,
  showRepliesReducer,
  showReportReducer,
} from "./ModalReducers";
import { commentReducer } from "./CommentReducer";
import { noDelReducer, notificationReducer } from "./NotificationReducer";
import {
  conversationDetailReducer,
  conversationToDelReducer,
  conversationsReducer,
  hideConversationSearchReducer,
  inputToSearchUserForWriteNewMessageReducer,
  listNumberOfNotReadMessagesReducer,
} from "./ConversationReducer";
import {
  lastMessageReducer,
  messagesReducer,
  numberOfNotReadReducer,
} from "./MessageReducer";
import {
  commentReportReducer,
  postReportReducer,
  userReportReducer,
} from "./ReportReducer";
import {
  inputForSearchUserAdminReducer,
  lengthOfReportsForSearchUserReducer,
  statusForSearchUserReducer,
} from "./AdminReducer";
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
  numberOfNotRead: numberOfNotReadReducer,
  listOfNotReads: listNumberOfNotReadMessagesReducer,
  conversationToDel: conversationToDelReducer,
  showDelCon: showDelConReducer,
  showDelConConfirm: showDelConConfirmReducer,
  userReport: userReportReducer,
  postReport: postReportReducer,
  commentReport: commentReportReducer,
  showReport: showReportReducer,
  showCreateReportConfirm: showCreateReportConfirmReducer,
  inputForSearchUserAdmin: inputForSearchUserAdminReducer,
  statusForSearchUser: statusForSearchUserReducer,
  lengthOfReportsUser: lengthOfReportsForSearchUserReducer,
});
export { rootReducer };
