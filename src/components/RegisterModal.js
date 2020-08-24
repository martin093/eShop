import React, { Component } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import styles from "./RegisterModal.module.css";
import { Person, Envelope, Lock, House, Phone } from "react-bootstrap-icons";

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      address: "",
      email: "",
      password: "",
      rePassword: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { show, handleClose, handleShow } = this.props;
    return (
      <Modal show={show === "register"} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.title}>Sign up</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group as={Row} controlId="registerFormName">
              <Form.Label column xs={{ span: 1, offset: 1 }}>
                <Person className={styles.icon} />
              </Form.Label>
              <Col xs={9}>
                <Form.Control
                  className={styles.input}
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  placeholder="Enter First Name"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="registerFormLastName">
              <Form.Label column xs={{ span: 1, offset: 1 }}>
                <Person className={styles.icon} />
              </Form.Label>
              <Col xs={9}>
                <Form.Control
                  className={styles.input}
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  placeholder="Enter Last Name"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="registerFormAddress">
              <Form.Label column xs={{ span: 1, offset: 1 }}>
                <House className={styles.icon} />
              </Form.Label>
              <Col xs={9}>
                <Form.Control
                  className={styles.input}
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                  placeholder="Enter Address"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="registerFormPhone">
              <Form.Label column xs={{ span: 1, offset: 1 }}>
                <Phone className={styles.icon} />
              </Form.Label>
              <Col xs={2}>
                <Form.Control type="text" placeholder="+56" readOnly />
              </Col>
              <Col xs={7}>
                <Form.Control
                  className={styles.input}
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                  placeholder="959005463"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="registerFormEmail">
              <Form.Label column xs={{ span: 1, offset: 1 }}>
                <Envelope className={styles.icon} />
              </Form.Label>
              <Col xs={9}>
                <Form.Control
                  className={styles.input}
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  placeholder="Enter Email"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="registerFormPassword">
              <Form.Label column xs={{ span: 1, offset: 1 }}>
                <Lock className={styles.icon} />
              </Form.Label>
              <Col xs={9}>
                <Form.Control
                  className={styles.input}
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  placeholder="Password"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="registerFormPassword">
              <Form.Label column xs={{ span: 1, offset: 1 }}>
                <Lock className={styles.icon} />
              </Form.Label>
              <Col xs={9}>
                <Form.Control
                  className={styles.input}
                  type="rePassword"
                  name="rePassword"
                  value={this.state.rePassword}
                  onChange={this.handleInputChange}
                  placeholder="Retype Password"
                />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className={styles.footer}>
            <div>
              Are you registered?
              <a
                href="#"
                className={styles.linkSignIp}
                onClick={() => handleShow("login")}
              >
                Sign In
              </a>
            </div>
            <Button
              className={styles.registerButton}
              variant="primary"
              type="submit"
              onClick={handleClose}
            >
              Register
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default RegisterModal;
