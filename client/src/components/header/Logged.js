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
  const { signOut, user } = props;
  console.log(user);
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
          {user?.email}
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
