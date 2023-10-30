import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import RegisterButton from "./RegisterButton";

function RegisterForm(props) {
  let [username, setUsername] = useState("");
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("");
  let [password, setPassword] = useState("1234567891012334444");
  let account = {
    username: username,
    fullName: fullName,
    email: email,
    gender: gender,
    password: password,
    avatar: "user0.jpg",
  };
  return (
    <div className="row">
      <Form>
        <FormGroup>
          <div className="row">
            <div id="LEFT" className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <Label id="Label">Username:</Label>
            </div>
          </div>

          <div className="row">
            <Input
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              id="Input"
              placeholder="Nhập username..."
            ></Input>
          </div>
        </FormGroup>
        <FormGroup>
          <div className="row">
            <div id="LEFT" className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <Label id="Label">Full Name:</Label>
            </div>
          </div>

          <div className="row">
            <Input
              type="text"
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
              }}
              id="Input"
              placeholder="Nhập họ tên..."
            ></Input>
          </div>
        </FormGroup>
        <FormGroup>
          <div className="row">
            <div id="LEFT" className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <Label id="Label">Email:</Label>
            </div>
          </div>

          <div className="row">
            <Input
              id="Input"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="Nhập email..."
            ></Input>
          </div>
        </FormGroup>
        <FormGroup>
          <div className="row">
            <div id="LEFT" className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <Label id="Label">Gender:</Label>
            </div>
          </div>
          <div id="LEFT" className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="gender"
                    value="MALE"
                    checked={gender === "MALE"}
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  />{" "}
                  Nam
                </Label>
              </FormGroup>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="gender"
                    value="FEMALE"
                    checked={gender === "FEMALE"}
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  />{" "}
                  Nữ
                </Label>
              </FormGroup>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="gender"
                    value="OTHER"
                    checked={gender === "OTHER"}
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  />{" "}
                  Khác
                </Label>
              </FormGroup>
            </div>

            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="gender"
                  value="UN_KNOW"
                  checked={gender === "UN_KNOW"}
                  onChange={(event) => {
                    setGender(event.target.value);
                  }}
                />{" "}
                Không tiết lộ
              </Label>
            </FormGroup>
          </div>
        </FormGroup>
        <FormGroup>
          <div className="row">
            <div id="LEFT" className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <Label id="Label">Mật khẩu:</Label>
            </div>
          </div>

          <div className="row">
            <Input
              id="Input"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></Input>
          </div>
        </FormGroup>
      </Form>
      <RegisterButton account={account} />
    </div>
  );
}

export default RegisterForm;
