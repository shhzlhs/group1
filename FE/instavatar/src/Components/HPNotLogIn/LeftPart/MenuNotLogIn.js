import React from "react";
import "./MenuNotLogIn.css";

import HomeButton from "./HomeButton";
import SettingButton from "./SettingButton";
function MenuNotLogIn(props) {
  return (
    <>
      {" "}
      <HomeButton />
      <SettingButton />
    </>
  );
}

export default MenuNotLogIn;
