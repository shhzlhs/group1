import React from "react";
import { Link } from "react-router-dom";

function AdminMenu(props) {
  return (
    <div id="AdminMenuBox" className="row">
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="row">
          <Link to={"/instavatar/logedIn/usersAdmin"}>
            <img
              className="AdminMenu"
              src="/imgs/icons/UsersAdmin.png"
              alt="UsersAdmin"
            />
          </Link>
        </div>

        <div id="center" className="row">
          <Link to={"/instavatar/logedIn/usersAdmin"}>
            <h3>Quản lý Users</h3>
          </Link>
        </div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="row">
          <Link>
            <img
              className="AdminMenu"
              src="/imgs/icons/PostsAdmin.png"
              alt="PostsAdmin"
            />
          </Link>
        </div>

        <div id="center" className="row">
          <Link>
            <h3>Quản lý Posts</h3>
          </Link>
        </div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="row">
          <Link>
            <img
              className="AdminMenu"
              src="/imgs/icons/ItemsAdmin.png"
              alt="ItemsAdmin"
            />
          </Link>
        </div>

        <div id="center" className="row">
          <Link>
            <h3>Quản lý Cửa hàng</h3>
          </Link>
        </div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="row">
          <Link>
            <img
              className="AdminMenu"
              src="/imgs/icons/MoneyAdmin.png"
              alt="MoneyAdmin"
            />
          </Link>
        </div>

        <div id="center" className="row">
          <Link>
            <h3>Lịch sử giao dịch</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;
