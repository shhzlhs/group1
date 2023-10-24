import React from "react";
import { Button } from "reactstrap";

function LogInButtons(props) {
  let { password, username, login } = props;

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
        <Button>Đăng ký</Button>

        <Button
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
