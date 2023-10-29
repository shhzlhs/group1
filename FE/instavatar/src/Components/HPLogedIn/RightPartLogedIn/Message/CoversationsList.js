import React from "react";
import CreateConversationButton from "./ConversationList.js/CreateConversationButton";
import SearchUserBar from "./ConversationList.js/SearchUserBar";
import UsersSearch from "./ConversationList.js/UsersSearch";
import CloseButton from "./ConversationList.js/CloseButton";
import ConversationsListExists from "./ConversationList.js/ConversationsListExists";

function CoversationsList(props) {
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <CreateConversationButton />
      <SearchUserBar />
      <CloseButton />
      <UsersSearch />
      <ConversationsListExists />
    </div>
  );
}

export default CoversationsList;
