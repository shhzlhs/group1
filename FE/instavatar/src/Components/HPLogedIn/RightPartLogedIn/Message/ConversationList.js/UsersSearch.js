import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ConversationList.css";
import { Button } from "reactstrap";

import {
  createConversationRedux,
  getConversationsByUserId,
  getListNumberOfNotReadYetMessagePerConversationByUser,
  hideConversationSearch,
  setCoversationDetail,
} from "../../../../../Redux/Actions/ConversationAction";
import { useNavigate } from "react-router-dom";
import { updateToReadCompleteByConversationAndUserAPI } from "../../../../../API/MessageAPI";
import { getNumberOfNotReadYetMessage } from "../../../../../Redux/Actions/MessageActions";
function UsersSearch(props) {
  let navigate = useNavigate();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let hideSearch = useSelector((state) => state.hideConversationSearch);
  let conversations = useSelector((state) => state.conversations);
  let listOfNotReads = useSelector((state) => state.listOfNotReads);
  let dispatch = useDispatch();
  let inputForSearch = useSelector(
    (state) => state.inputToSearchUserForWriteNewMessage
  );
  let followings =
    userLogedIn && userLogedIn.followings && userLogedIn.followings.length > 0
      ? userLogedIn.followings
      : null;
  let usersForUse =
    followings && followings.length > 0
      ? followings.filter((following) =>
          following.username.includes(inputForSearch)
        )
      : null;

  let createConversation = (user) => {
    let conversation = conversations.find(
      (con) =>
        (con.user1Id === userLogedIn.id && con.user2Id === user.id) ||
        (con.user1Id === user.id && con.user2Id === userLogedIn.id)
    );
    if (conversation) {
      let notRead = listOfNotReads.find(
        (not) =>
          not.conversationId === conversation.id && not.numberOfNotRead > 0
      );
      if (!notRead) {
        dispatch(setCoversationDetail(conversation));
        dispatch(hideConversationSearch());
      } else {
        updateToReadCompleteByConversationAndUserAPI(
          conversation.id,
          userLogedIn.id
        ).then(() => {
          dispatch(getNumberOfNotReadYetMessage(userLogedIn.id));
          dispatch(
            getListNumberOfNotReadYetMessagePerConversationByUser(
              userLogedIn.id
            )
          );
          dispatch(getConversationsByUserId(userLogedIn.id));
          dispatch(hideConversationSearch());
          navigate("/instavatar/logedIn/message");
        });
      }
    } else {
      dispatch(
        createConversationRedux(
          { user1Id: userLogedIn.id, user2Id: user.id },
          userLogedIn.id
        )
      );

      let conver = conversations.find(
        (con) => con.user1Id === userLogedIn.id && con.user2Id === user.id
      );
      dispatch(setCoversationDetail(conver));
      dispatch(hideConversationSearch());
    }
  };
  let items =
    usersForUse && usersForUse.length > 0 ? (
      usersForUse.map((user, index) => {
        return (
          <div key={index} className="row">
            <Button
              onClick={() => {
                createConversation(user);
              }}
              id="EachRowButton"
            >
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <img
                    className="avatar"
                    alt={user.username}
                    src={`/imgs/avatars/${user.avatar}`}
                  ></img>
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  {user.username}
                </div>
              </div>
            </Button>
          </div>
        );
      })
    ) : (
      <div hidden={hideSearch} className="row">
        Không tìm thấy kết quả
      </div>
    );

  return (
    <div className="SearchList" hidden={hideSearch}>
      {items}
    </div>
  );
}

export default UsersSearch;
