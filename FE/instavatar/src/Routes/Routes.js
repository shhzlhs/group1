import { Route, Routes } from "react-router-dom";
import MainPage from "../Components/HPNotLogIn/RightPart/MainPage";

export const notLoginRoutes = (
  <Routes>
    <Route path="/main" element={<MainPage />}></Route>
  </Routes>
);
