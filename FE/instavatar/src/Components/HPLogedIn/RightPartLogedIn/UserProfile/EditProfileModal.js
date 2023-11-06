import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { closeEditProfileModal } from "../../../../Redux/Actions/ModalActions";
import "./UserProfile.css";
import { editUserProfileAction } from "../../../../Redux/Actions/UserActions";
function EditProfileModal(props) {
  let dispatch = useDispatch();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let users = useSelector((state) => state.users);
  let [newUsername, setNewUsername] = useState(userLogedIn.username);
  let [newFullName, setNewFullName] = useState(userLogedIn.fullName);
  let [newAvatar, setNewAvatar] = useState(userLogedIn.avatar);
  let [password, setPassword] = useState("");
  let [password1, setPassword1] = useState("");
  let [password2, setPassword2] = useState("");
  useEffect(() => {
    setNewAvatar(userLogedIn.avatar);
    setNewUsername(userLogedIn.username);
    setNewFullName(userLogedIn.fullName);
    setPassword("1111111");
    setPassword1("1111111");
    setPassword2("1111111");
  }, []);
  let [hideChange, setHideChange] = useState(true);
  let show = useSelector((state) => state.showEditProfile);
  let updateProfile = () => {
    if (newUsername.trim() === "" || newFullName.trim() === "") {
      alert("Username và Full Name không được để trống");
    } else {
      if (newUsername !== userLogedIn.username) {
        let userCheck = users.find((us) => us.username === newUsername);
        if (
          userCheck &&
          userCheck.username &&
          userCheck.username.trim() !== ""
        ) {
          alert("Username đã tồn tại");
        } else {
          dispatch(
            editUserProfileAction(userLogedIn.id, {
              username: newUsername,
              fullName: newFullName,
              avatar: newAvatar,
            })
          );
          dispatch(closeEditProfileModal());
          alert("Cập nhật thông tin thành công");
        }
      } else {
        dispatch(
          editUserProfileAction(userLogedIn.id, {
            username: newUsername,
            fullName: newFullName,
            avatar: newAvatar,
          })
        );
        dispatch(closeEditProfileModal());
        alert("Cập nhật thông tin thành công");
      }
    }
  };
  let changePassword = () => {
    if (password !== userLogedIn.password) {
      alert("Mật khẩu cũ không chính xác");
    } else {
      if (password1.trim() === "") {
        alert("Mật khẩu không được để trống");
      } else {
        if (password1 !== password2) {
          alert("Mật khẩu mới không khớp nhau");
        } else {
          dispatch(
            editUserProfileAction(userLogedIn.id, { password: password1 })
          );

          alert("Đổi mật khẩu thành công!");
          setHideChange(true);
        }
      }
    }
  };
  return (
    <Modal id="BigModal" isOpen={show} fade={false}>
      <ModalHeader id="mid">Chỉnh sửa trang cá nhân</ModalHeader>
      <ModalBody>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div id="midRow1" className="row">
              <img
                alt={userLogedIn.username}
                src={`/imgs/avatars/${userLogedIn.avatar}`}
                className="HugeAvatar"
              ></img>
            </div>
            <div id="mid" className="row">
              <b>Chọn ảnh</b>
            </div>

            <div className="row">
              <Input
                type="text"
                value={newAvatar}
                onChange={(event) => {
                  setNewAvatar(event.target.value);
                }}
              ></Input>
            </div>
          </div>

          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <div className="row">
              <Label>Username:</Label>{" "}
              <Input
                type="text"
                value={newUsername}
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              ></Input>
            </div>
            <div className="row">
              <Label>Full Name:</Label>{" "}
              <Input
                type="text"
                value={newFullName}
                onChange={(event) => {
                  setNewFullName(event.target.value);
                }}
              ></Input>
            </div>

            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <br />
                <Button onClick={() => setHideChange(false)} color="primary">
                  Đổi mật khẩu
                </Button>
              </div>

              <div
                id="ChangePass"
                hidden={hideChange}
                className="col-xs-8 col-sm-8 col-md-8 col-lg-8"
              >
                <div className="row">
                  <Label>Mật khẩu cũ:</Label>{" "}
                  <Input
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  ></Input>
                </div>
                <div className="row">
                  <Label>Mật khẩu mới:</Label>{" "}
                  <Input
                    type="password"
                    value={password1}
                    onChange={(event) => {
                      setPassword1(event.target.value);
                    }}
                  ></Input>
                </div>
                <div className="row">
                  <Label>Nhập lại mật khẩu mới:</Label>{" "}
                  <Input
                    type="password"
                    value={password2}
                    onChange={(event) => {
                      setPassword2(event.target.value);
                    }}
                  ></Input>
                </div>

                <div className="row">
                  <Button
                    onClick={() => {
                      setHideChange(true);
                    }}
                    id="right1"
                    color="success"
                  >
                    Huỷ
                  </Button>
                  <Button onClick={changePassword} id="right2" color="danger">
                    Đổi
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="danger"
          onClick={() => {
            dispatch(closeEditProfileModal());
            setHideChange(true);
          }}
        >
          Huỷ
        </Button>
        <Button onClick={updateProfile} color="primary">
          Cập nhật thông tin
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default EditProfileModal;
