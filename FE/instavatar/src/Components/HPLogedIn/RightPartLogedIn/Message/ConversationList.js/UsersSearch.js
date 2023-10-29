import React from "react";
import { useSelector } from "react-redux";
import "./ConversationList.css";
import { Button } from "reactstrap";
function UsersSearch(props) {
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let hideSearch = useSelector((state) => state.hideConversationSearch);
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
  let items =
    usersForUse && usersForUse.length > 0 ? (
      usersForUse.map((user, index) => {
        return (
          <div key={index} className="row">
            <Button id="EachRowButton">
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
