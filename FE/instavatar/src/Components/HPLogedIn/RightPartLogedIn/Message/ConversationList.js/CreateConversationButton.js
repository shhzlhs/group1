import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { showConversationSearch } from "../../../../../Redux/Actions/ConversationAction";
function CreateConversationButton(props) {
  let dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(showConversationSearch());
      }}
      className="row"
    >
      <Button color="primary">Soạn tin nhắn</Button>
    </div>
  );
}

export default CreateConversationButton;
