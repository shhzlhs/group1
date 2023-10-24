import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
} from "reactstrap";
function LogInForm(props) {
  let {
    showWrong,
    setShowWrong,
    username,
    setUsername,
    password,
    setPassword,
  } = props;
  return (
    <div className="row">
      <Form>
        <FormGroup className="fg">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Label>Username:</Label>
          </div>

          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <Input
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              type="text"
              placeholder="Nhập username..."
            ></Input>
          </div>
        </FormGroup>
        <FormGroup className="fg">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Label>Password:</Label>
          </div>

          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <Input
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
            ></Input>
          </div>
        </FormGroup>
      </Form>
      <Modal isOpen={showWrong} fade={false}>
        <ModalHeader>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
          Đăng nhập không thành công
        </ModalHeader>
        <ModalHeader>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5"></div>

          <Button
            onClick={() => {
              setShowWrong(false);
            }}
          >
            Đăng nhập lại
          </Button>
        </ModalHeader>
      </Modal>
    </div>
  );
}

export default LogInForm;
