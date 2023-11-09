import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { addUserAPI } from "../../API/UserAPI";
function NoModal(props) {
  let navigate = useNavigate();
  let { no, showNo, setShowNo, account } = props;
  const close = () => {
    if (no === "Đăng ký thành công, đăng nhập thôi!") {
      console.log("new", account);
      addUserAPI(account).then(() => {
        setShowNo(false);
        navigate("/instavatar/logIn");
      });
    } else {
      setShowNo(false);
    }
  };
  return (
    <Modal isOpen={showNo} fade={false}>
      <ModalBody id="mid">{no}</ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={close}>
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default NoModal;
