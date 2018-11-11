import React, { Component } from "react";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { Field, reduxForm } from "redux-form";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div style={{ border: "1px solid green" }}>
        <Navbar color="light">
          <NavbarBrand href="/">lookalike</NavbarBrand>
          <Nav>
            <NavItem className="mr-3">
              <input type="text" id="searchdb" name="searchdb" />

              <Button className="ml-2">
                <span>Search</span>
              </Button>
            </NavItem>
            <NavItem>
              <Button color="success" onClick={this.toggle}>
                Log-in
              </Button>
            </NavItem>
          </Nav>
        </Navbar>

        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              <div >
                <div className="mb-2">
                  <span>Username :</span>
                  <input type="text" />
                </div>

                <div>
                  <span>Password :</span>
                  {' '}
                  <input type="password" />
                </div>
            
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                LogIn
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Header;
