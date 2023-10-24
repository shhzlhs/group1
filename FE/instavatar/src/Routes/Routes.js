import { Route, Routes } from "react-router-dom";
import MainPage from "../Components/HPNotLogIn/RightPart/MainPage";
import HPNotLogIn from "../Pages/HPNotLogIn";
import LogInPage from "../Pages/LogInPage";
import HPLogedIn from "../Pages/HPLogedIn";
import MainPageLogedIn from "../Components/HPLogedIn/RightPartLogedIn/MainPageLogedIn";
import UserProfile from "../Components/HPLogedIn/RightPartLogedIn/UserProfile";
import PostDetail from "../Components/HPLogedIn/RightPartLogedIn/PostDetail";

export let notLoginRoutes = (
  <Routes>
    <Route path="/instavatar/welcome/main" element={<MainPage />}></Route>
    <Route path="/*" element={<MainPage />}></Route>
  </Routes>
);
export let bigRoutes = (
  <Routes>
    <Route path="/instavatar/welcome" element={<HPNotLogIn />}>
      {" "}
    </Route>
    <Route path="/instavatar/logIn" element={<LogInPage />}>
      {" "}
    </Route>
    <Route path="/instavatar/logedIn/*" element={<HPLogedIn />}></Route>
    <Route path="/*" element={<HPNotLogIn />}>
      {" "}
    </Route>
  </Routes>
);
export let logedInRoutes = (
  <Routes>
    <Route path="/post/:postId" element={<PostDetail />}>
      {" "}
    </Route>
    <Route path="/main" element={<MainPageLogedIn />}></Route>
    <Route path="/user/:username" element={<UserProfile />}></Route>
    {/* <Route path="/instavatar/logedIn/user/items" element={<UserItem />}></Route> */}
    <Route path="/*" element={<MainPageLogedIn />}></Route>
  </Routes>
);
