/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import ButtonSocial from "./ButtonSocial";

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  //const [modal, setModal] = useState({mymodal});
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => dispatch({ type: "TOOGLE" });
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader
          toggle={toggle}
          cssModule={{ "modal-title": "w-100 text-center" }}
        >
          {" "}
          Welcome back.
        </ModalHeader>
        <br />
        <ModalBody>
          <ButtonSocial
            color = "danger"
            onClick={toggleNested}
            text="Sign in with email"
          ></ButtonSocial>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Sign In with Email</ModalHeader>
            <ModalBody>
              Enter the email address associated with your account, and we’ll
              send a magic link to your inbox.
              <hr />
              <Login />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>
                Done
              </Button>{" "}
              <Button color="secondary" onClick={toggleAll}>
                All Done
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalExample;
