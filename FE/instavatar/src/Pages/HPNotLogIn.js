import React from "react";

import LeftPart from "../Components/HPNotLogIn/LeftPart";
import { notLoginRoutes } from "../Routes/Routes";
import { Container } from "reactstrap";
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
