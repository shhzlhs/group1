import React from "react";

import LeftPart from "../Components/HPNotLogIn/LeftPart";
import { notLoginRoutes } from "../Routes/Routes";
function HPNotLogIn(props) {
  return (
    <div>
      {" "}
      <LeftPart />
      {notLoginRoutes}
    </div>
  );
}

export default HPNotLogIn;
