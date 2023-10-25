import React from "react";
import "./UserArea.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getCommonElements,
  getRandomElementFromArray,
  getRandomElementsFromArray,
  selectItemsFromIndex,
} from "../../../../../Funtions";
import "./UserArea.css";
import { Button } from "reactstrap";
import { addFollowAPI } from "../../../../../API/FollowAPI";
import { setUserLogedIn } from "../../../../../Redux/Actions/UserActions";
import { getUserByUsernameAPI } from "../../../../../API/UserAPI";
import { Link } from "react-router-dom";
function Sugguets(props) {
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let dispatch = useDispatch();
  let users = useSelector((state) => state.users);
  users.sort((a, b) => b.follows.length - a.follows.length);
  let followingss = userLogedIn ? userLogedIn.followings : null;
  let followingUsernames = followingss
    ? followingss.map((following) => following.username)
    : [];
  let allFollowings1 = followingss
    ? followingss
        .map((user) => user.followings)
        .reduce((acc, followings) => acc.concat(followings), [])
    : [];

  let allFollowings2 = allFollowings1.filter(
    (following) => following.username !== userLogedIn.username
  );
  let followingUsernames1 = allFollowings2
    ? allFollowings2.map((following) => following.username)
    : [];
  let followingUsernames2 = Array.from(new Set(followingUsernames1));
  const allFollowings3 = users.filter((user) =>
    followingUsernames2.includes(user.username)
  );
  let allFollowings = allFollowings3.filter(
    (itemA) => !followingUsernames.includes(itemA.username)
  );
  let sugguets =
    allFollowings.length !== 0
      ? getRandomElementsFromArray(allFollowings, 5)
      : selectItemsFromIndex(users, 0, 5);
  let items = sugguets
    ? sugguets.map((sugguet, index) => {
        let sugguetUser = users
          ? users.find((user) => user.username === sugguet.username)
          : {};
        let usernames = sugguetUser.follows.map((follow) => follow.username);
        let closeUsers = getCommonElements(usernames, followingUsernames);
        let text = () => {
          if (closeUsers.length === 0) {
            return `Có ${sugguetUser.follows.length} người theo dõi`;
          } else {
            let us = getRandomElementFromArray(closeUsers);

            if (sugguetUser.follows.length === 1) {
              return `${us} theo dõi`;
            } else {
              return `${us} và ${
                sugguetUser.follows.length - 1
              } người theo dõi`;
            }
          }
        };
        let follow = (followingId) => {
          let follow = { followerId: userLogedIn.id, followingId: followingId };
          addFollowAPI(follow).then(() => {
            getUserByUsernameAPI(userLogedIn.username).then((res) =>
              dispatch(setUserLogedIn(res))
            );
          });
        };
        return (
          <div key={index} id="SugguestRow" className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <Link to={`/instavatar/logedIn/user/${sugguetUser.username}`}>
                  <img
                    alt={sugguetUser.username}
                    src={`/imgs/avatars/${sugguetUser.avatar}`}
                    className="SugguestAvatar"
                  ></img>
                </Link>
              </div>

              <div
                id="Username"
                className="col-xs-9 col-sm-9 col-md-9 col-lg-9"
              >
                <div className="row">
                  <b>{sugguet.username}</b>
                </div>

                <div className="row">{text()}</div>
              </div>
            </div>

            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <Button
                color="primary"
                onClick={() => {
                  follow(sugguetUser.id);
                }}
              >
                Theo dõi
              </Button>
            </div>
          </div>
        );
      })
    : null;
  return (
    <div id="Sugguest" className="row">
      <div className="row">Đề xuất cho bạn</div>

      <div id="SugguestBox" className="row">
        {items}
      </div>
    </div>
  );
}

export default Sugguets;
