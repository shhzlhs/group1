import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getConversationsByUserId,
  getListNumberOfNotReadYetMessagePerConversationByUser,
  setCoversationDetail,
} from "../../../../../Redux/Actions/ConversationAction";
import "./ConversationList.css";
import {
  getLastMessagesByUser,
  getNumberOfNotReadYetMessage,
} from "../../../../../Redux/Actions/MessageActions";
import {
  formatRelativeTime,
  getFirstTenCharacters,
  parseDateString,
} from "../../../../../Funtions";
import { Button } from "reactstrap";
import { updateToReadCompleteByConversationAndUserAPI } from "../../../../../API/MessageAPI";
function ConversationsListExists(props) {
  let dispatch = useDispatch();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let hideSearch = useSelector((state) => state.hideConversationSearch);

  useEffect(() => {
    if (userLogedIn) {
      dispatch(getConversationsByUserId(userLogedIn.id));

      dispatch(getLastMessagesByUser(userLogedIn.id));
      dispatch(
        getListNumberOfNotReadYetMessagePerConversationByUser(userLogedIn.id)
      );
    }
  }, []);

  let baseConversations = useSelector((state) => state.conversations);
  const baseConversation1s =
    baseConversations && baseConversations.length > 0
      ? baseConversations.filter((conversation) => {
          if (conversation.user1Username === userLogedIn.username) {
            return conversation.del1 !== "Y";
          } else if (conversation.user2Username === userLogedIn.username) {
            return conversation.del2 !== "Y";
          }
          return false;
        })
      : null;

  let lastMessages = useSelector((state) => state.lastMessages);

  let notReads = useSelector((state) => state.listOfNotReads);

  let conversations =
    baseConversation1s &&
    lastMessages &&
    notReads &&
    notReads.length > 0 &&
    baseConversation1s.length > 0 &&
    lastMessages.length > 0
      ? baseConversation1s.map((element) => {
          let notRead = notReads.find(
            (notRead) => notRead.conversationId === element.id
          );
          let lastMessage = lastMessages.find(
            (lm) => lm.conversationId === element.id
          );

          return { ...element, lastMessage: lastMessage, notRead: notRead };
        })
      : null;

  if (conversations && conversations.length > 1) {
    conversations.sort((conA, conB) => {
      if (conA.lastMessage && conB.lastMessage) {
        const dateA = parseDateString(conA.lastMessage.createdAt);
        const dateB = parseDateString(conB.lastMessage.createdAt);
        return dateB - dateA;
      }
      return 0;
    });
  }
  let viewConversation = (con) => {
    if (con.notRead && con.notRead.numberOfNotRead > 0) {
      updateToReadCompleteByConversationAndUserAPI(con.id, userLogedIn.id).then(
        () => {
          dispatch(getLastMessagesByUser(userLogedIn.id));
          dispatch(
            getListNumberOfNotReadYetMessagePerConversationByUser(
              userLogedIn.id
            )
          );
          dispatch(getNumberOfNotReadYetMessage(userLogedIn.id));

          dispatch(setCoversationDetail(con));
        }
      );
    } else {
      dispatch(setCoversationDetail(con));
    }
  };
  let items =
    conversations && conversations.length > 0
      ? conversations.map((conversation, index) => {
          let user =
            conversation.user1Username === userLogedIn.username
              ? {
                  id: conversation.user2Id,
                  username: conversation.user2Username,
                  fullName: conversation.user2FullName,
                  avatar: "/imgs/avatars/" + conversation.user2Avatar,
                }
              : {
                  id: conversation.user1Id,
                  username: conversation.user1Username,
                  fullName: conversation.user1FullName,
                  avatar: "/imgs/avatars/" + conversation.user1Avatar,
                };

          let lastMessageContent =
            conversation.lastMessage &&
            conversation.lastMessage.content &&
            conversation.lastMessage.senderId === userLogedIn.id
              ? `Bạn: ${getFirstTenCharacters(
                  conversation.lastMessage.content
                )}...`
              : conversation.lastMessage &&
                conversation.lastMessage.content &&
                conversation.lastMessage.senderId !== userLogedIn.id
              ? `${getFirstTenCharacters(conversation.lastMessage.content)}...`
              : null;
          let number =
            conversation.notRead && conversation.notRead.numberOfNotRead > 0
              ? conversation.notRead.numberOfNotRead
              : null;
          let timestamp =
            conversation.lastMessage && conversation.lastMessage.createdAt
              ? formatRelativeTime(
                  parseDateString(conversation.lastMessage.createdAt)
                )
              : null;
          let id =
            conversation.notRead && conversation.notRead.numberOfNotRead > 0
              ? "EachConversation1"
              : "EachConversation2";
          return (
            <div id={id} key={index} className="row">
              <Button
                onClick={() => {
                  viewConversation(conversation);
                }}
                id="EachRowButton"
              >
                <div className="row">
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <img
                      className="avatar"
                      src={user.avatar}
                      alt={user.username}
                    ></img>
                  </div>

                  <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <div id="LeftDiv" className="row">
                      <b>{`${user.fullName} `}</b>
                      <b className="number">{number}</b>
                    </div>

                    <div className="row">
                      <div
                        id="LeftDiv"
                        className="col-xs-8 col-sm-8 col-md-8 col-lg-8"
                      >
                        <small> {lastMessageContent}</small>
                      </div>
                      <div
                        id="LeftDiv"
                        className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
                      >
                        <small>{timestamp}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Button>
            </div>
          );
        })
      : "Chưa có cuộc trò chuyện nào";
  return (
    <div id="List" hidden={!hideSearch}>
      {items}
    </div>
  );
}

export default ConversationsListExists;
