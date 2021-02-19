import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Search } from "react-feather";

function Head(): JSX.Element {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="w-100 mr-5 justify-content-between">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-0 rounded-0 border-0 focus-0"
            />
            <Button variant="light" className="rounded-0 border-0 shadow-none">
              <Search />
            </Button>
          </Form>
          <NavDropdown title="About me" id="dropdown_about">
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Head;
