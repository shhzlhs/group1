import React from "react";
import { useSelector } from "react-redux";
import "./MessagesArea.css";
import { formatRelativeTime, parseDateString } from "../../../../../Funtions";
import { Button } from "reactstrap";

function InfoBar(props) {
  const conversationDetail = useSelector((state) => state.conversationDetail);
  const userLogedIn = useSelector((state) => state.userLogedIn);

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
        <img
          className="BigMessAvatar"
          alt={user.username}
          src={user.avatar}
        ></img>
      </div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <div className="row">
          <div id="LeftMessDiv" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <h2>{user.fullName}</h2>
          </div>

          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <Button id="GiftButton">
              <img
                className="GiftIcon"
                alt="Tặng quà"
                src="/imgs/icons/Gift.png"
              ></img>
            </Button>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Button color="danger">Xoá cuộc trò chuyện</Button>
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
