import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MessagesArea.css";
import { formatRelativeTime, parseDateString } from "../../../../../Funtions";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { setConversationToDel } from "../../../../../Redux/Actions/ConversationAction";
import {
  showDelConModal,
  showGiveInMessageAction,
} from "../../../../../Redux/Actions/ModalActions";
import { setUserToGiveItemAction } from "../../../../../Redux/Actions/StoreActions";

function InfoBar(props) {
  let dispatch = useDispatch();
  const conversationDetail = useSelector((state) => state.conversationDetail);
  const userLogedIn = useSelector((state) => state.userLogedIn);
  let users = useSelector((state) => state.users);

  const getUser = () => {
    if (Object.keys(conversationDetail).length === 0) {
      return null;
    }

    const user1IsLoggedInUser =
      conversationDetail.user1Username === userLogedIn.username;

    const otherUser = user1IsLoggedInUser
      ? {
          id: conversationDetail.user2Id,
          username: conversationDetail.user2Username,
          fullName: conversationDetail.user2FullName,
          avatar: "/imgs/avatars/" + conversationDetail.user2Avatar,
        }
      : {
          id: conversationDetail.user1Id,
          username: conversationDetail.user1Username,
          fullName: conversationDetail.user1FullName,
          avatar: "/imgs/avatars/" + conversationDetail.user1Avatar,
        };

    return otherUser;
  };
  let onClickDelConversation = () => {
    dispatch(setConversationToDel(conversationDetail));
    dispatch(showDelConModal());
  };
  const user = getUser();
  let history =
    conversationDetail &&
    Object.keys(conversationDetail).length !== 0 &&
    conversationDetail.createdAt &&
    formatRelativeTime(parseDateString(conversationDetail.createdAt)) ===
      "Vừa xong"
      ? "Vừa bắt đầu trò chuyện"
      : conversationDetail &&
        Object.keys(conversationDetail).length !== 0 &&
        conversationDetail.createdAt &&
        formatRelativeTime(parseDateString(conversationDetail.createdAt)) !==
          "Vừa xong"
      ? `Bắt đầu trò chuyện từ ${formatRelativeTime(
          parseDateString(conversationDetail.createdAt)
        )}`
      : null;
  let items = user ? (
    <div>
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <Link to={`/instavatar/logedIn/user/${user.username}`}>
          <img
            className="BigMessAvatar"
            alt={user.username}
            src={user.avatar}
          ></img>
        </Link>
      </div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <div className="row">
          <div id="LeftMessDiv" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <Link to={`/instavatar/logedIn/user/${user.username}`}>
              <h2>{user.fullName}</h2>
            </Link>
          </div>

          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <Button
              onClick={() => {
                let username =
                  userLogedIn.username === conversationDetail.user1Username
                    ? conversationDetail.user2Username
                    : conversationDetail.user1Username;
                let userToGive = users.find((us) => us.username === username);

                dispatch(setUserToGiveItemAction(userToGive));
                dispatch(showGiveInMessageAction());
              }}
              id="GiftButton"
            >
              <img
                className="GiftIcon"
                alt="Tặng quà"
                src="/imgs/icons/Gift.png"
              ></img>
            </Button>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Button onClick={onClickDelConversation} color="danger">
              Xoá cuộc trò chuyện
            </Button>
          </div>
        </div>
        <div id="LeftMessDiv" className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <i>{history}</i>
          </div>
        </div>
      </div>
    </div>
  ) : null;
  let id = user ? "InfoBar" : "NoneInfoBar";
  return (
    <div id={id} className="row">
      {items}
    </div>
  );
}

export default InfoBar;
