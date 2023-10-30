import React, { useState } from "react";
import { Button } from "reactstrap";
import "./Register.css";
import NoModal from "./NoModal";
import { useSelector } from "react-redux";
function RegisterButton(props) {
  let { account } = props;
  let [no, setNo] = useState("");
  let [showNo, setShowNo] = useState(false);
  let users = useSelector((state) => state.users);
  let user1 = users
    ? users.find((user) => user.username === account.username)
    : "";
  let user2 = users ? users.find((user) => user.email === account.email) : "";
  let onClickRegister = () => {
    if (
      account.username.trim() !== "" &&
      account.email.trim() !== "" &&
      account.gender.trim() !== "" &&
      account.fullName.trim() !== "" &&
      account.password.trim() !== ""
    ) {
      if (user1 && user1.username && user1.username.trim() !== "") {
        setNo("username đã tồn tại!");
      } else {
        if (user2 && user2.email && user2.email.trim() !== "") {
          setNo("Email đã tồn tại");
        } else {
          setNo("Đăng ký thành công, đăng nhập thôi!");
        }
      }

      setShowNo(true);
    }
  };
  return (
    <div id="RegisterButton" className="row">
      <Button onClick={onClickRegister} color="success">
        Đăng ký
      </Button>
      <NoModal
        no={no}
        showNo={showNo}
        setShowNo={setShowNo}
        account={account}
      />
    </div>
  );
}

export default RegisterButton;
