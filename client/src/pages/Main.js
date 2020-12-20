import React from "react";
import SignInModal from "../components/modals/SignInModal";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";
// import '../App.css';
const Main = () => {
  const mymodal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  console.log(mymodal);

  return (
   <div>
          <div  className="site-layout-content">
            <h1>Where good ideas find you</h1>
            <p>
              Read and share new perspectives on just about any topic.
              Everyone’s welcome. Learn more.
            </p>
            <Button outline color="secondary">
              Get Started
            </Button>
          </div>
     

      <SignInModal />

      </div>
      
  
  );
};

export default Main;

