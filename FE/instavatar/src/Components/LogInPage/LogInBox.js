import React, { useState } from "react";
import "./LogInBox.css";
import LogInForm from "./LogInForm";
import LogInButtons from "./LogInButtons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLogedIn } from "../../Redux/Actions/UserActions";
import { getUserByUsernameAPI } from "../../API/UserAPI";
function LogInBox(props) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [showWrong, setShowWrong] = useState(false);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("passworddddddddđ");
  let login = async (username, password) => {
    try {
      let user = await getUserByUsernameAPI(username);
      if (user) {
        if (user.password === password) {
          dispatch(setUserLogedIn(user));
          navigate("/instavatar/logedIn");
        } else {
          setShowWrong(true);
        }
      } else {
        setShowWrong(true);
      }
    } catch (error) {
      console.error("Lỗi đăng nhập", error);
      setShowWrong(true);
    }
  };

  return (
    <div id="fl" className="row">
      <div className="LogInBox">
        <LogInForm
          showWrong={showWrong}
          setShowWrong={setShowWrong}
          setUsername={setUsername}
          username={username}
          password={password}
          setPassword={setPassword}
        />
        <LogInButtons login={login} username={username} password={password} />
      </div>
    </div>
  );
}

export default LogInBox;
