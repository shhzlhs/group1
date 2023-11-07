import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPostAPI, getAllPostAPI } from "../../../API/PostAPI";
import { getAllUsers } from "../../../Redux/Actions/UserActions";
import { closeCreatePostModal } from "../../../Redux/Actions/ModalActions";
import "./MainPageLogedIn.css";
import { createNotificationAPI } from "../../../API/NotificationAPI";
function CreatePostModal(props) {
  let [content, setContent] = useState("");
  let [image, setImage] = useState("");
  let reduxStore = useSelector((state) => state);
  let dispatch = useDispatch();
  let showCreatePost = reduxStore.showCreatePost;
  let userLogedIn = reduxStore.userLogedIn;
  let follows =
    userLogedIn.follows && userLogedIn.follows.length > 0
      ? userLogedIn.follows
      : null;
  let handleCreatePost = () => {
    if (image.trim() !== "" && content.trim() !== "") {
      let newPost = { userId: userLogedIn.id, content: content, image: image };
      createPostAPI(newPost).then(() => {
        getAllPostAPI().then((res) => {
          getAllUsers();
          dispatch(closeCreatePostModal());
          if (follows && follows.length > 0 && res) {
            let post = res.find((pos) => pos.content === content);
            console.log("POS ", post);
            if (post) {
              follows.forEach((element) => {
                createNotificationAPI({
                  userId: element.id,
                  postId: post.id,
                  creatorId: userLogedIn.id,
                  content: `${userLogedIn.fullName} vừa đăng bài viết mới`,
                });
              });
            }
          }
        });
      });
    } else {
      alert("Hãy nhập đủ thông tin nhé!");
    }
  };
  return (
    <Modal isOpen={showCreatePost} fade={false}>
      <ModalHeader id="mid">Tạo bài viết</ModalHeader>
      <ModalBody>
        <Form>
          <Input
            className="TextInput"
            placeholder={`${userLogedIn.fullName} ơi, bạn đang nghĩ gì thế?`}
            id="exampleText"
            name="text"
            type="textarea"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Đính kèm ảnh cho bài viết..."
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          ></Input>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            dispatch(closeCreatePostModal());
          }}
          color="danger"
        >
          Huỷ
        </Button>{" "}
        <Button onClick={handleCreatePost} color="success">
          Đăng
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default CreatePostModal;
