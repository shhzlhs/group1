import React from "react";
import ListFollowings from "./ListFollowings";
import "./FollowingsBar.css";
function FollowingsBar(props) {
  return (
    <div id="Fl" className="row">
      <ListFollowings />
    </div>
  );
}

export default FollowingsBar;
