import React, { Component } from "react";
import "./style.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class TaskMenu extends Component {
  render() {
    return (
      <div className="task-menu">
        <div className="header">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Library</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Books</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Users</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Transactions</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Cart</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default TaskMenu;
