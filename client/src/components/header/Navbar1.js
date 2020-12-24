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

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);

  const openModalSignIn = () => {
    dispatch({ type: "TOOGLE" });
  };

  const openModalSignUp = () => {
    dispatch({ type: "TOOGLE-SIGNUP" });
  };

  const signOut = () => {
    console.log("Signout");
    localStorage.removeItem("token");
    dispatch({ type: "TOKEN-DOWN" });
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      dispatch({ type: "TOKEN-UP" });
    }
  }, []);
  //https://miro.medium.com/max/770/1*qcAZgT4Sk37MPSTGBH2KUw.png

  return (
    <div>
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="/">
          {/* <MediumIcon /> */}
          <b>Medium</b>
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
              {!isLogged ? (
                <NavLink href="#" onClick={openModalSignIn}>
                  Sign In
                </NavLink>
              ) : (
                <NavLink href="#" onClick={signOut}>
                  Sign Out
                </NavLink>
              )}
            </NavItem>
            {isLogged ? null : (
              <NavItem>
                <Button color="dark" onClick={openModalSignUp}>
                  Get Started
                </Button>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
