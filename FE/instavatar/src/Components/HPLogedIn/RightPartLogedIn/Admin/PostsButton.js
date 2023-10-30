import React from "react";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../RightPartLogedIn/AdminPage.css";
import { BsPostcardFill } from "react-icons/bs";
function PostsButton(props) {
  let navigate = useNavigate();
  return (
    <div class="buttonDefault">
      <Button
        id="MenuButton"
        onClick={() => {
          navigate("/instavatar/logedIn/admin/posts");
        }}
      >
        <div class="AdminIconParent">
          <BsPostcardFill class="AdminIcon" />
        </div>

        <h3 class="title"> Quản lý posts</h3>
      </Button>
    </div>
  );
}

export default PostsButton;
