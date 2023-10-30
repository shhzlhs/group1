import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
function LogInButtons(props) {
  let { password, username, login } = props;
  let navigate = useNavigate();
  return (
    <div>
      <div className="row">
        <div className="checkbox">
          <label>
            <input type="checkbox" />
            Rememberme
          </label>
        </div>
      </div>

      <div className="row">
        <Button
          onClick={() => {
            navigate("/instavatar/register");
          }}
          color="success"
        >
          Đăng ký
        </Button>

        <Button
          className="LogInButton"
          color="primary"
          onClick={() => {
            login(username, password);
          }}
        >
          Đăng nhập
        </Button>
      </div>
    </div>
  );
}

export default LogInButtons;
