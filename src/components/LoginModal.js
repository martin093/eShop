import React, { Component } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import styles from "./LoginModal.module.css";
import { Envelope, Lock } from "react-bootstrap-icons";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
      <Modal show={show === "login"} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.title}>Sign in</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group as={Row} controlId="loginFormEmail">
              <Form.Label column xs={{ span: 1, offset: 1 }}>
                <Envelope className={styles.icon} />
              </Form.Label>
              <Col xs={9}>
                <Form.Control
                  className={styles.input}
                  type="email"
                  name="email"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  placeholder="Enter email"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="loginFormPassword">
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
            <Form.Group controlId="loginFormCheck">
              <Col xs={{ span: 5, offset: 1 }}>
                <Form.Check type="checkbox" label="Remember me" />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className={styles.footer}>
            <div>
              Don't have an account?
              <a
                href="#"
                className={styles.linkSignUp}
                onClick={() => handleShow("register")}
              >
                Sign Up
              </a>
            </div>
            <Button
              className={styles.loginButton}
              variant="primary"
              type="submit"
              onClick={handleClose}
            >
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default LoginModal;
