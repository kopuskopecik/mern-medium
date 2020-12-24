import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
} from "reactstrap";

// import MediumIcon from "../icons/MediumIcon";
// const mymodal = useSelector(state => state.modal);
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogged = useSelector((state) => state.isLogged);
  
  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);

  const openModalSignIn = () => {
    dispatch({ type: "TOOGLE" });
  };
 
  const openModalSignUp = () => {
    dispatch({ type: "TOOGLE" });
  };

  const signOut = () => {
    console.log("Signout");
    localStorage.removeItem("token");
    dispatch({type: "TOKEN-DOWN"});

  }

  useEffect(()=>{
    let token = localStorage.getItem("token");
    console.log(token);
    if(token){
      dispatch({type: "TOKEN-UP"});
    }
  },[])
  //https://miro.medium.com/max/770/1*qcAZgT4Sk37MPSTGBH2KUw.png

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          {/* <MediumIcon /> */}
          Medium
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Our Story</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Memberhip
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Write
              </NavLink>
            </NavItem>
            <NavItem>
            {!isLogged ? <NavLink href = "#" onClick={openModalSignIn}>Sign In</NavLink> : <NavLink href = "#" onClick={signOut}>Sign Out</NavLink>}
            </NavItem>

            <NavItem>
              <Button onClick={openModalSignUp}>
                Get Started
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
