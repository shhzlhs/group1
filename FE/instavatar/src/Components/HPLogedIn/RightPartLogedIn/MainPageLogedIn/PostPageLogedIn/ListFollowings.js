import React, { useState } from "react";
import "./ListFollowings.css";
import { selectItemsFromIndex } from "../../../../../Funtions";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUsernameDetail } from "../../../../../Redux/Actions/UserActions";
function ListFollowings(props) {
  let reduxState = useSelector((state) => state);
  let dispatch = useDispatch();
  let users = reduxState.users;
  let [fIndex, setFIndex] = useState(0);
  let followings = [];
  if (users[0].followings.length > 0) {
    followings = selectItemsFromIndex(users[0].followings, fIndex, 8);
  }

  let items = [];

  if (users[0].followings.length > 0) {
    items = followings.map((following, index) => {
      const avatar = `/imgs/avatars/${following.avatar}`;
      const url = `/instavatar/logedIn/user/${following.username}`;
      return (
        <div key={index} className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
          <Button className="AvatarButton">
            <Link to={url}>
              <div className="row">
                <img
                  className="FollowingsAvatar"
                  src={avatar}
                  alt={following.username}
                />
              </div>
              <div id="UserText" className="row">
                {following.username}
              </div>
            </Link>
          </Button>
        </div>
      );
    });
  }
  let pre = () => {
    if (fIndex > 0 && fIndex < 8) {
      setFIndex(0);
    } else if (fIndex > 7) {
      setFIndex(fIndex - 8);
    }
  };
  let next = () => {
    if (fIndex > users[0].followings.length - 16) {
      setFIndex(users[0].followings.length - 8);
    } else if (fIndex < users[0].followings.length - 16) {
      setFIndex(fIndex + 8);
    }
  };
  return (
    <>
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <Button onClick={pre}>
          <img
            className="NextButton"
            src="/imgs/icons/Pre.png"
            alt="Next"
          ></img>
        </Button>
      </div>
      {items}
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <Button onClick={next}>
          <img
            className="NextButton"
            src="/imgs/icons/Next.png"
            alt="Next"
          ></img>
        </Button>
      </div>
    </>
  );
}

export default ListFollowings;
