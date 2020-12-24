import React from "react";
import SignInModal from "../components/modals/SignInModal";
import SignUpModal from "../components/modals/SignupModal";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";
// import '../App.css';
const Main = () => {
  const mymodal = useSelector((state) => state.modal);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const toggle = () => dispatch({ type: "TOOGLE-SIGNUP" });

  return (
    <div>
      { !isLogged ?

      <div className="site-layout-content">
        <h1>Where good ideas find you</h1>
        <p>
          Read and share new perspectives on just about any topic. Everyone’s
          welcome. Learn more.
        </p>
        <Button outline color="secondary" onClick={toggle}>
          Get Started
        </Button>
      </div>
      :
      <p>---Profile Page---</p>
      }

      <SignInModal />
      <SignUpModal />
    </div>
  );
};

export default Main;
