import React from "react";
import MoneyInfo from "./UserItemsTop/MoneyInfo";
import LinkToStore from "./UserItemsTop/LinkToStore";
import ItemInfo from "./UserItemsTop/ItemInfo";
function UserItemsTop(props) {
  return (
    <div className="row">
      <MoneyInfo />
      <LinkToStore />
      <ItemInfo />
    </div>
  );
}

export default UserItemsTop;
