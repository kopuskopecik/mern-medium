import React from "react";
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Logged = (props) => {
  const { signOut } = props;
  return (
    <>
      <NavItem>
        <NavLink href="#" onClick={signOut}>
          {" "}
          Sign out{" "}
        </NavLink>
      </NavItem>

      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Options
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default Logged;
