import { Route, Routes } from "react-router-dom";
import MainPage from "../Components/HPNotLogIn/RightPart/MainPage";
import HPNotLogIn from "../Pages/HPNotLogIn";
import LogInPage from "../Pages/LogInPage";
import HPLogedIn from "../Pages/HPLogedIn";
import MainPageLogedIn from "../Components/HPLogedIn/RightPartLogedIn/MainPageLogedIn";
import UserDetail from "../Components/HPLogedIn/RightPartLogedIn/MainPageLogedIn/UserDetail";

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
    <Route path="/instavatar/login" element={<LogInPage />}>
      {" "}
    </Route>
    <Route path="/instavatar/logedIn/*" element={<HPLogedIn />}>
      {" "}
    </Route>
    <Route path="/*" element={<HPNotLogIn />}>
      {" "}
    </Route>
  </Routes>
);
export let logedInRoutes = (
  <Routes>
    <Route
      path="/instavatar/logedIn/main"
      element={<MainPageLogedIn />}
    ></Route>
    <Route
      path="/instavatar/logedIn/user/:username"
      element={UserDetail}
    ></Route>
    <Route path="/*" element={<MainPageLogedIn />}></Route>
  </Routes>
);
