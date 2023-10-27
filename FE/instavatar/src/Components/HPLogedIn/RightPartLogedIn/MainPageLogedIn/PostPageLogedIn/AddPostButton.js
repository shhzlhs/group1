import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { showCreatePostModal } from "../../../../../Redux/Actions/ModalActions";
function AddPostButton(props) {
  let dispatch = useDispatch();
  return (
    <div className="row">
      <Button
        onClick={() => {
          dispatch(showCreatePostModal());
        }}
        color="success"
      >
        Tạo bài viết
      </Button>
    </div>
  );
}

export default AddPostButton;
