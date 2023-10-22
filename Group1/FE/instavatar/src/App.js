import { useEffect } from "react";
import "./App.css";
import { bigRoutes } from "./Routes/Routes";

import { useDispatch } from "react-redux";
import { getAllUsers } from "./Redux/Actions/UserActions";
function App() {
  let dispatchRedux = useDispatch();
  useEffect(() => {
    dispatchRedux(getAllUsers());
  }, []);
  return <div className="App">{bigRoutes}</div>;
}

export default App;
