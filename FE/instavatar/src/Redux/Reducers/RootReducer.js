import { combineReducers } from "redux";
import {
  followsBarReducer,
  inputForSearchUserReducer,
  userDetailReducer,
  userLogedInReducer,
  userReducer,
  userToShowItemsReducer,
} from "./UserReducer";
import { postReducer, potsDetailReducer } from "./PostReducer";
import {
  showCommentLikesModalReducer,
  showCreatePostReducer,
  showCreateReportConfirmReducer,
  showDelConConfirmReducer,
  showDelConReducer,
  showDelNoReducer,
  showDeleteUserItemReducer,
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
import { userItemDetailReducer } from "./UserItemReducer";
import { gamesReducer } from "./GameReducer";
import { gameSlotsReducer } from "./GameSlotReducer";
import {
  coinOrGoldReducer,
  inputToSearchTranReducer,
  maxDateReducer,
  minDateReducer,
  tranTypeReducer,
  transactionsReducer,
} from "./TransactionReducer";
import {
  coinOrGoldStoreToFilterReducer,
  itemTypeStoreReducer,
  itemsReducer,
} from "./ItemsReducer";
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
  userToShowItems: userToShowItemsReducer,
  userItemDetail: userItemDetailReducer,
  showDeleteUserItem: showDeleteUserItemReducer,
  inputForSearchUserInSearchPage: inputForSearchUserReducer,
  games: gamesReducer,
  gameSlots: gameSlotsReducer,
  inputForSearchTransaction: inputToSearchTranReducer,
  coinOrGold: coinOrGoldReducer,
  tranType: tranTypeReducer,
  minDate: minDateReducer,
  maxDate: maxDateReducer,
  transactions: transactionsReducer,
  items: itemsReducer,
  coinOrGoldStore: coinOrGoldStoreToFilterReducer,
  itemType: itemTypeStoreReducer,
});
export { rootReducer };
