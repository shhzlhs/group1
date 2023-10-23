import LeftPartLogedIn from "../Components/HPLogedIn/LeftPart/LeftPartLogedIn";
import { logedInRoutes } from "../Routes/Routes";

function HPLogedIn(props) {
  return (
    <div>
      <LeftPartLogedIn />
      {logedInRoutes}
    </div>
  );
}

export default HPLogedIn;
