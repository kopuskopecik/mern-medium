/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useSelector, useDispatch,  } from "react-redux";
import Signup from "./Signup";
import ButtonSocial from "./ButtonSocial";

const SignUpModal = (props) => {
  const { buttonLabel, className } = props;

  const modal = useSelector((state) => state.modalSignup);
  const nestedModal = useSelector((state) => state.signupModal.nestedModal);
  const closeAll = useSelector((state) => state.signupModal.closeAll);

  const dispatch = useDispatch();
  //const [modal, setModal] = useState({mymodal});
  //const [nestedModal, setNestedModal] = useState(false);
  //const [closeAll, setCloseAll] = useState(false);

  const toggle = () => dispatch({ type: "TOOGLE-SIGNUP" });
  const toggleNested = () => {
    dispatch({ type: "NESTED-S" });
    //closeAll(false);
    //setNestedModal(!nestedModal);
    //setCloseAll(false);
  };
  const toggleAll = () => {
    dispatch({ type: "ALL-S"});
    //setNestedModal(!nestedModal);
    //closeAll(true);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader
          toggle={toggle}
          cssModule={{ "modal-title": "w-100 text-center" }}
        >
          {" "}
          SignUp
        </ModalHeader>
        <br />
        <ModalBody>
          <ButtonSocial
            color = "danger"
            onClick={toggleNested}
            text="Sign Up with email"
          ></ButtonSocial>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Sign Up with Email</ModalHeader>
            <ModalBody>
              Enter the email address associated with your account, and we’ll
              send a magic link to your inbox.
              <hr />
              <Signup />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>
                Back
              </Button>{" "}
              <Button color="secondary" onClick={toggleAll}>
                OK
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default SignUpModal;
