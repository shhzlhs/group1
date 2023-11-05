import { Route, Routes } from "react-router-dom";
import MainPage from "../Components/HPNotLogIn/RightPart/MainPage";
import HPNotLogIn from "../Pages/HPNotLogIn";
import LogInPage from "../Pages/LogInPage";
import HPLogedIn from "../Pages/HPLogedIn";
import MainPageLogedIn from "../Components/HPLogedIn/RightPartLogedIn/MainPageLogedIn";
import UserProfile from "../Components/HPLogedIn/RightPartLogedIn/UserProfile";
import PostDetail from "../Components/HPLogedIn/RightPartLogedIn/PostDetail";
import MessagePage from "../Components/HPLogedIn/RightPartLogedIn/MessagePage";
import RegisterPage from "../Pages/RegisterPage";
import AdminPage from "../Components/HPLogedIn/RightPartLogedIn/AdminPage";
import UsersAdmin from "../Components/HPLogedIn/RightPartLogedIn/AdminPage/UsersAdmin";
import UserItems from "../Components/HPLogedIn/RightPartLogedIn/UserItems";
import SearchUserPage from "../Components/HPLogedIn/RightPartLogedIn/SearchUserPage";
import GamePage from "../Components/HPLogedIn/RightPartLogedIn/GamePage";
import AddMoney from "../Components/HPLogedIn/RightPartLogedIn/AddMoney";
import AddCoinPage from "../Components/HPLogedIn/RightPartLogedIn/AddMoney/AddCoinPage";
import AddGoldPage from "../Components/HPLogedIn/RightPartLogedIn/AddMoney/AddGoldPage";
import MoneyPage from "../Components/HPLogedIn/RightPartLogedIn/MoneyPage";
import TransactionHistory from "../Components/HPLogedIn/RightPartLogedIn/TransactionHistory";
import StorePage from "../Components/HPLogedIn/RightPartLogedIn/StorePage";

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
    <Route path="/instavatar/register" element={<RegisterPage />}></Route>
    <Route path="/instavatar/logedIn/*" element={<HPLogedIn />}></Route>
    <Route path="/*" element={<HPNotLogIn />}></Route>
  </Routes>
);
export let logedInRoutes = (
  <Routes>
    <Route path="/post/:postId" element={<PostDetail />}></Route>
    <Route path="/main" element={<MainPageLogedIn />}></Route>
    <Route path="/user/:username" element={<UserProfile />}></Route>
    <Route path="/message" element={<MessagePage />}></Route>
    <Route path="/admin" element={<AdminPage />}></Route>
    <Route path="/usersAdmin" element={<UsersAdmin />}></Route>
    <Route path="/userItems/:username" element={<UserItems />}></Route>
    <Route path="/store" element={<StorePage />}></Route>
    <Route path="/search" element={<SearchUserPage />}></Route>
    <Route path="/game" element={<GamePage />}></Route>
    <Route path="/addCash" element={<AddMoney />}></Route>
    <Route path="/addCoin" element={<AddCoinPage />}></Route>
    <Route path="/addGold" element={<AddGoldPage />}></Route>
    <Route path="/money" element={<MoneyPage />}></Route>
    <Route path="/transactionHistory" element={<TransactionHistory />}></Route>
    <Route path="/*" element={<MainPageLogedIn />}></Route>
  </Routes>
);
