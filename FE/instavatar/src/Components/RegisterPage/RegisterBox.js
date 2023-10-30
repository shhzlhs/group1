import React from "react";
import "./Register.css";
import RegisterForm from "./RegisterForm";
function RegisterBox(props) {
  return (
    <div id="RegisterPage" className="row">
      <div className="RegisterBox">
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterBox;
