import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchPage.css";

import { Link } from "react-router-dom";
function UserSearchList(props) {
  let input = useSelector((state) => state.inputForSearchUserInSearchPage);
  let baseUsers = useSelector((state) => state.users);
  let users =
    input && baseUsers && baseUsers.length > 0
      ? baseUsers.filter(
          (user) =>
            user.username.includes(input) || user.fullName.includes(input)
        )
      : null;
  let items =
    users && users.length > 0 ? (
      users.map((user, index) => {
        let lengthOfFollows =
          user.follows && user.follows.length > 0 ? (
            <i>{`• ${user.follows.length} người theo dõi`}</i>
          ) : null;

        return (
          <div id="EachSearchRow" key={index} className="row">
            <Link to={`/instavatar/logedIn/user/${user.username}`}>
              {" "}
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <img
                  className="EachUserSearchAvatar"
                  alt={user.username}
                  src={`/imgs/avatars/${user.avatar}`}
                ></img>
              </div>
              <div
                id="EachUserSearchText"
                className="col-xs-10 col-sm-10 col-md-10 col-lg-10"
              >
                <div className="row">
                  <b>{user.username}</b>
                </div>
                <div className="row">
                  {`${user.fullName} `}
                  {lengthOfFollows}
                </div>
              </div>
            </Link>
          </div>
        );
      })
    ) : (
      <div className="row">Không tìm thấy kết quả nào</div>
    );

  return (
    <div id="UserSearchList" className="row">
      {items}
    </div>
  );
}

export default UserSearchList;
