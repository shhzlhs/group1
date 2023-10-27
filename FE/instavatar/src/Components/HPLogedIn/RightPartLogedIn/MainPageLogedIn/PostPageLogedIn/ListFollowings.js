import React, { useState } from "react";
import "./ListFollowings.css";
import { selectItemsFromIndex } from "../../../../../Funtions";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ListFollowings(props) {
  let reduxState = useSelector((state) => state);
  let userLogedIn = reduxState.userLogedIn;
  let [fIndex, setFIndex] = useState(0);
  let followings = [];
  if (userLogedIn.followings.length > 0) {
    followings = selectItemsFromIndex(userLogedIn.followings, fIndex, 6);
  }

  let items = [];

  if (userLogedIn.followings.length > 0) {
    items = followings.map((following, index) => {
      const avatar = `/imgs/avatars/${following.avatar}`;
      const url = "/instavatar/logedIn/user/" + following.username;
      return (
        <div key={index} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <Link to={url}>
            <Button className="AvatarButton">
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
            </Button>
          </Link>
        </div>
      );
    });
  }
  let pre = () => {
    if (userLogedIn.followings.length > 6) {
      if (fIndex > 0 && fIndex < 6) {
        setFIndex(0);
      } else if (fIndex > 5) {
        setFIndex(fIndex - 6);
      }
    }
  };
  let next = () => {
    if (userLogedIn.followings.length > 6) {
      if (fIndex > userLogedIn.followings.length - 12) {
        setFIndex(userLogedIn.followings.length - 6);
      } else if (fIndex < userLogedIn.followings.length - 12) {
        setFIndex(fIndex + 6);
      }
    }
  };
  return (
    <>
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <Button id="NextButton" onClick={pre}>
          <img
            className="NextButton"
            src="/imgs/icons/Pre.png"
            alt="Next"
          ></img>
        </Button>
      </div>

      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">{items}</div>

      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <Button id="NextButton" onClick={next}>
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
