/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

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
        <ModalHeader toggle={toggle} cssModule={{'modal-title': 'w-100 text-center'}}> Welcome back.</ModalHeader>
        <br />
        <ModalBody>
          
          
         
          <Button outline color="primary"  onClick={toggle}>
            Sign In Google
          </Button>
         <br />
          <Button outline color="primary"  onClick={toggle}>
            Sign In Faceebook
          </Button>
          <br />
          <Button outline color="primary"   onClick={toggle}>
            Sign In Twitter
          </Button>
          <br />
          <Button outline color="primary" onClick={toggle}>
            Sign In with Apple
          </Button>
          <br />
          <Button outline color="primary"  onClick={toggleNested}>
            Sign In with Email
          </Button>
         
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Sign In with Email</ModalHeader>
            <ModalBody>
              Enter the email address associated with your account, and we’ll
              send a magic link to your inbox.
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
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Continue
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
