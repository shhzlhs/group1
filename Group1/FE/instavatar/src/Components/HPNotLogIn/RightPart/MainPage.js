import React from "react";
import PostsPage from "./MainPage/PostsPage";
import "./MainPage.css";
import HotUsers from "./MainPage/HotUsers";
function MainPage(props) {
  return (
    <div className="MainPage">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <PostsPage />
        <HotUsers />
      </div>
    </div>
  );
}

export default MainPage;
