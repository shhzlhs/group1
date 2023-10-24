import React from "react";
import PostPageLogedIn from "./MainPageLogedIn/PostPageLogedIn";
import "./MainPageLogedIn.css";
import UserArea from "./MainPageLogedIn/UserArea";
function MainPageLogedIn(props) {
  return (
    <div className="MainPageLogedIn">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <PostPageLogedIn />
        <UserArea />
      </div>
    </div>
  );
}

export default MainPageLogedIn;
