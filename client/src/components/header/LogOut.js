import React from "react";
import { NavItem, NavLink, Button } from "reactstrap";

const LogOut = (props) => {
  const { openModalSignIn, signOut, openModalSignUp } = props;
  return (
    <>
      <NavItem>
        <NavLink href="/components/">Our Story</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/reactstrap/reactstrap">
          Memberhip
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/reactstrap/reactstrap">Write</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" onClick={openModalSignIn}>
          Sign In
        </NavLink>
      </NavItem>

      <NavItem>
        <Button color="dark" onClick={openModalSignUp}>
          Get Started
        </Button>
      </NavItem>
    </>
  );
};

export default LogOut;
