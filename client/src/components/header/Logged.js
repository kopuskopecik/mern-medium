import React from "react";
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Logged = (props) => {
  const { signOut, user } = props;
  console.log(user);
  return (
    <>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <FontAwesomeIcon icon={faUser} />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem> {user?.email}</DropdownItem>
          <DropdownItem divider />          
          <DropdownItem>Write a story</DropdownItem>
          <DropdownItem>Stories</DropdownItem>
          <DropdownItem>Stats</DropdownItem>
          <DropdownItem>Design your profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reading list</DropdownItem>
          <DropdownItem>Publicatioons</DropdownItem>
          <DropdownItem>Control your recommandations</DropdownItem>
          <DropdownItem>Medium partner program</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Become a member</DropdownItem>
          <DropdownItem>Help</DropdownItem>
          <DropdownItem onClick={signOut}>Sign Out</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default Logged;
