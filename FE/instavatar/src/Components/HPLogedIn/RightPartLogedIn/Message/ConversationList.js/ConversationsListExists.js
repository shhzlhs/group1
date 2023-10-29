import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getConversationsByUserId,
  setCoversationDetail,
} from "../../../../../Redux/Actions/ConversationAction";
import "./ConversationList.css";
import { getLastMessagesByUser } from "../../../../../Redux/Actions/MessageActions";
import {
  formatRelativeTime,
  getFirstTenCharacters,
  parseDateString,
} from "../../../../../Funtions";
import { Button } from "reactstrap";
import {
  getListNumberOfNotReadMessageByUserAPI,
  updateToReadCompleteByConversationAndUser,
} from "../../../../../API/MessageAPI";
function ConversationsListExists(props) {
  let dispatch = useDispatch();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let hideSearch = useSelector((state) => state.hideConversationSearch);
  let [notReads, setNotReads] = useState([]);
  useEffect(() => {
    dispatch(getConversationsByUserId(userLogedIn.id));
    dispatch(getLastMessagesByUser(userLogedIn.id));
    getListNumberOfNotReadMessageByUserAPI(userLogedIn.id).then((res) => {
      setNotReads(res);
    });
  }, [userLogedIn]);

  let baseConversations = useSelector((state) => state.conversations);

  let lastMessages = useSelector((state) => state.lastMessages);

  let conversations =
    baseConversations &&
    lastMessages &&
    notReads &&
    notReads.length > 0 &&
    baseConversations.length > 0 &&
    lastMessages.length > 0
      ? baseConversations.map((element) => {
          let lastMessage = lastMessages.find(
            (lm) => lm.conversationId === element.id
          );
          let notRead = notReads.find(
            (not) => not.conversationId === element.id
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
    });
  }
  let viewConversation = (con) => {
    updateToReadCompleteByConversationAndUser(con.id, userLogedIn.id).then(
      () => {
        dispatch(setCoversationDetail(con));
      }
    );
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
            conversation.lastMessage.senderId === userLogedIn.id
              ? `Bạn: ${getFirstTenCharacters(
                  conversation.lastMessage.content
                )}...`
              : `${getFirstTenCharacters(conversation.lastMessage.content)}...`;
          let number =
            conversation.notRead && conversation.notRead.numberOfNotRead > 0
              ? conversation.notRead.numberOfNotRead
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
                        <small>
                          {formatRelativeTime(
                            parseDateString(conversation.lastMessage.createdAt)
                          )}
                        </small>
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
