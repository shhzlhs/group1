import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLastMessagesByUser,
  getMessagesByConversation,
} from "../../../../../Redux/Actions/MessageActions";
import CreateConversationButton from "../ConversationList.js/CreateConversationButton";
import "./MessagesArea.css";
import None from "./None";
import { Button, Input } from "reactstrap";
import { createMessageAPI } from "../../../../../API/MessageAPI";
import { formatRelativeTime, parseDateString } from "../../../../../Funtions";
import { recoverConversationByUserAPI } from "../../../../../API/CoversationAPI";
function ShowMessages(props) {
  let dispatch = useDispatch();
  let conversation = useSelector((state) => state.conversationDetail);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  useEffect(() => {
    if (Object.keys(conversation).length > 0) {
      dispatch(getMessagesByConversation(conversation.id));
    }
  }, [conversation]);
  let baseMessages = useSelector((state) => state.messages);

  let messages =
    baseMessages && baseMessages.length > 0
      ? baseMessages.filter((mess) => {
          if (mess.conversationUser1Username === userLogedIn.username) {
            return mess.del1 !== "Y";
          } else if (mess.conversationUser2Username === userLogedIn.username) {
            return mess.del2 !== "Y";
          }
          return false;
        })
      : null;

  if (messages && messages.length > 1) {
    messages.sort((messA, messB) => {
      const dateA = parseDateString(messA.createdAt);
      const dateB = parseDateString(messB.createdAt);
      return dateA - dateB;
    });
  }
  let [input, setInput] = useState("");
  let sendMessage = () => {
    if (input.trim() !== "" && Object.keys(conversation).length !== 0) {
      createMessageAPI({
        senderId: userLogedIn.id,
        conversationId: conversation.id,
        content: input,
      }).then(() => {
        if (
          conversation.user1Username === userLogedIn.username &&
          conversation.del2 === "Y"
        ) {
          recoverConversationByUserAPI(conversation.user2Id, conversation.id);
        } else if (
          conversation.user2Username === userLogedIn.username &&
          conversation.del1 === "Y"
        ) {
          recoverConversationByUserAPI(conversation.user1Id, conversation.id);
        }
        dispatch(getMessagesByConversation(conversation.id));
        dispatch(getLastMessagesByUser(userLogedIn.id));
        setInput("");
      });
    }
  };
  let items = () => {
    if (Object.keys(conversation).length === 0) {
      return (
        <div id="NoneMess" className="row">
          <None />
          <CreateConversationButton />
        </div>
      );
    } else {
      if (messages && messages.length > 0) {
        return messages.map((message, index) => {
          let eachMess =
            message.senderId !== userLogedIn.id ? (
              <div
                id="ReceiveMessage"
                className="col-xs-8 col-sm-8 col-md-8 col-lg-8"
              >
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <img
                    className="MessageAvatar"
                    alt={message.senderUsername}
                    src={`/imgs/avatars/${message.senderAvatar}`}
                  ></img>
                </div>
                <div id="ReceiveContent">{message.content}</div>{" "}
                <div>
                  <small>
                    <i>
                      {formatRelativeTime(parseDateString(message.createdAt))}
                    </i>
                  </small>
                </div>
              </div>
            ) : (
              <div id="SendMessage" className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>

                <div
                  id="RightMessDiv"
                  className="col-xs-8 col-sm-8 col-md-8 col-lg-8"
                >
                  <div>
                    <small>
                      <i>
                        {formatRelativeTime(parseDateString(message.createdAt))}
                      </i>
                    </small>
                  </div>{" "}
                  <div id="SendContent">{message.content}</div>
                </div>
              </div>
            );

          return (
            <div key={index} className="row">
              {eachMess}
            </div>
          );
        });
      } else {
        return "Chưa có tin nhắn nào";
      }
    }
  };
  return (
    <div className="row">
      <div id="ShowMessage" className="row">
        {items()}
      </div>
      <div className="row">
        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <Input
            type="text"
            placeholder="Nhập tin nhắn..."
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          ></Input>
        </div>

        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <Button type="submit" onClick={sendMessage} color="primary">
            Gửi
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShowMessages;
