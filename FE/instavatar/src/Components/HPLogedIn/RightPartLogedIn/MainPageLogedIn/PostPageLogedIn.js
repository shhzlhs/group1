import React from "react";
import FollowingsBar from "./PostPageLogedIn/FollowingsBar";
import ListPost from "./PostPageLogedIn/ListPost";
import "./PostPageLogedIn.css";
import AddPostButton from "./PostPageLogedIn/AddPostButton";
import CreatePostModal from "../CreatePostModal";
function PostPageLogedIn(props) {
  return (
    <div>
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div className="row">
          <FollowingsBar />
        </div>

        <div id="PostsPage" className="row">
          <AddPostButton />
          <ListPost />

          <CreatePostModal />
        </div>
      </div>
    </div>
  );
}

export default PostPageLogedIn;
