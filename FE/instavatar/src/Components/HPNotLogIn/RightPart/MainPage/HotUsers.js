import React, { useEffect } from "react";
import { Button } from "reactstrap";
import { getAllUsers } from "../../../../Redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import "./HotUsers.css";
import { Link } from "react-router-dom";
function HotUsers(props) {
  let dispatchRedux = useDispatch();
  useEffect(() => {
    dispatchRedux(getAllUsers());
  }, []);
  let users = useSelector((state) => state.users);

  users.sort((a, b) => b.follows.length - a.follows.length);
  const top5Users = users.slice(0, 5);

  let items = top5Users.map((user, index) => {
    let avatar = `/imgs/avatars/${user.avatar}`;
    return (
      <div key={index} id="HotUser" className="row">
        <div id="UserInfo" className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <img className="Avatar" src={avatar} alt={user.avatar} />
        </div>
        <div id="UserInfo">
          <b>{user.username}</b>
          <br></br>
          <p>{user.follows.length} người theo dõi</p>
        </div>
      </div>
    );
  });
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Button>Đăng nhập</Button>
          <br></br>
          <br></br>Top Follows<br></br>
          <br></br>
        </div>
      </div>

      {items}

      <div className="row">
        <div id="WebInfo" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <Link>Giới thiệu </Link>

          <Link>Trợ giúp </Link>

          <Link>Điều khoản</Link>

          <p>
            <br></br>© 2023 INSTAVATAR FROM GROUP 1
          </p>
        </div>
      </div>
    </div>
  );
}

export default HotUsers;
