import React from "react";
import { Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { setInputToSearchUserForWriteNewMessage } from "../../../../../Redux/Actions/ConversationAction";
import "./ConversationList.css";
function SearchUserBar(props) {
  let input = useSelector((state) => state.inputToSearchUserForWriteNewMessage);
  let hideSearch = useSelector((state) => state.hideConversationSearch);
  let dispatch = useDispatch();
  return (
    <div hidden={hideSearch} id="SearchBar" className="row">
      <Input
        value={input}
        onChange={(event) => {
          dispatch(setInputToSearchUserForWriteNewMessage(event.target.value));
        }}
        type="text"
        placeholder="Bạn muốn gửi tin nhắn cho ai?"
      ></Input>
    </div>
  );
}

export default SearchUserBar;
