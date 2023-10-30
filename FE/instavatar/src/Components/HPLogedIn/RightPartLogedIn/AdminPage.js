import React from "react";
import UsersButton from "./Admin/UsersButton";
import ItemsButton from "./Admin/ItemsButton";
import PostsButton from "./Admin/PostsButton";
import "../RightPartLogedIn/AdminPage.css"
import TransactionsButton from "./Admin/TransactionsButton";
const AdminPage = () => {
  return (
    <div class="Admin ">
      <div class="AdminPage">
        <div class="">
          {" "}

          <UsersButton />
        </div>
        <div class="">

          <ItemsButton />
        </div>
        <div class="">

          <PostsButton />
        </div>
        <div class="">

          <TransactionsButton />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
