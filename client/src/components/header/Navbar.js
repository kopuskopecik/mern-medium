import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

import LogOut from "./LogOut";
import Logged from "./Logged";
import {fetchData} from "../../helpers/fetchData";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  
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

  const  fetchToken = async () => {
    let token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      dispatch({ type: "TOKEN-UP" });
      const data = await fetchData("api/profile", token)
      setUser(data);
      console.log(user);

    }
  }

  useEffect(() => {
    fetchToken();
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
            {!isLogged ? (
              <LogOut
                openModalSignIn={openModalSignIn}
                openModalSignUp={openModalSignUp}
              />
            ) : (
              <Logged signOut={signOut} user = {user}/>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
