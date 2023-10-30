import React from "react";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../RightPartLogedIn/AdminPage.css";
import { FaUsers } from "react-icons/fa";
function UsersButton(props) {
  let navigate = useNavigate();
  return (
    <div class="buttonDefault">
      <Button
        id="MenuButton"
        onClick={() => {
          navigate("/instavatar/logedIn/admin/users");
        }}
      >
        <div class="AdminIconParent">
          <FaUsers class="AdminIcon"/>
        </div>

        <h3 class="title">Quản lý người dùng</h3>
      </Button>
    </div>
  );
}

export default UsersButton;
