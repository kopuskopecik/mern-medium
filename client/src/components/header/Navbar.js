import React, { useState } from "react";
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
  
  const dispatch = useDispatch();

  const toggle = () => setIsOpen(!isOpen);

  const openModalSignIn = () => {
    dispatch({ type: "TOOGLE" });
  };
 
  const openModalSignUp = () => {
    dispatch({ type: "TOOGLE" });
  };
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
              <NavLink href = "#" onClick={openModalSignIn}>Sign In</NavLink>
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
