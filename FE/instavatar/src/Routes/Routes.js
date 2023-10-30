import { Route, Routes } from "react-router-dom";
import MainPage from "../Components/HPNotLogIn/RightPart/MainPage";
import HPNotLogIn from "../Pages/HPNotLogIn";
import LogInPage from "../Pages/LogInPage";
import HPLogedIn from "../Pages/HPLogedIn";
import MainPageLogedIn from "../Components/HPLogedIn/RightPartLogedIn/MainPageLogedIn";
import UserProfile from "../Components/HPLogedIn/RightPartLogedIn/UserProfile";
import PostDetail from "../Components/HPLogedIn/RightPartLogedIn/PostDetail";
// import MessagePage from "../Components/HPLogedIn/RightPartLogedIn/MessagePage";
import AdminPage from "../Components/HPLogedIn/RightPartLogedIn/AdminPage";
import UsersPage from "../Components/HPLogedIn/RightPartLogedIn/Admin/UsersPage";
import ItemsPage from "../Components/HPLogedIn/RightPartLogedIn/Admin/ItemsPage";
import PostsPage from "../Components/HPLogedIn/RightPartLogedIn/Admin/PostsPage";
import TransactionsPage from "../Components/HPLogedIn/RightPartLogedIn/Admin/TransactionsPage";



export let notLoginRoutes = (
  <Routes>
    <Route path="/instavatar/welcome/main" element={<MainPage />}></Route>
    <Route path="/*" element={<MainPage />}></Route>
  </Routes>
);
export let bigRoutes = (
  <Routes>
    <Route path="/instavatar/welcome" element={<HPNotLogIn />}></Route>
    <Route path="/instavatar/logIn" element={<LogInPage />}></Route>
    <Route path="/instavatar/logedIn/*" element={<HPLogedIn />}></Route>
    <Route path="/*" element={<HPNotLogIn />}></Route>
  </Routes>
);
export let logedInRoutes = (
  <Routes>
    <Route path="/post/:postId" element={<PostDetail />}></Route>
    <Route path="/main" element={<MainPageLogedIn />}></Route>
    <Route path="/user/:username" element={<UserProfile />}></Route>
    {/* <Route path="/message" element={<MessagePage />}></Route> */}
    <Route path="/*" element={<MainPageLogedIn />}></Route>
    <Route path="/admin" element={<AdminPage />}></Route>
    <Route path="/admin/users" element={<UsersPage />}></Route>
    <Route path="/admin/items" element={<ItemsPage />}></Route>
    <Route path="/admin/posts" element={<PostsPage />}></Route>
    <Route path="/admin/transactions" element={<TransactionsPage />}></Route>
  </Routes>
);
