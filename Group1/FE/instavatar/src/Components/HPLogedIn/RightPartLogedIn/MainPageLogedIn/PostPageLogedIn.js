import React from "react";
import FollowingsBar from "./PostPageLogedIn/FollowingsBar";
import ListPost from "./PostPageLogedIn/ListPost";
import "./PostPageLogedIn.css";
function PostPageLogedIn(props) {
  return (
    <div>
      <div id="PostsPage" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <FollowingsBar />
        <ListPost />
      </div>
    </div>
  );
}

export default PostPageLogedIn;
