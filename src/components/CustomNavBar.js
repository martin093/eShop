import React, { Component } from "react";
import styles from "./CustomNavBar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Person, Cart4 } from "react-bootstrap-icons";
import logo from "../img/logo.png";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

class CustomNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      isSticky: false,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    const scrollCheck = window.scrollY;
    if (scrollCheck > 32 && window.innerWidth > 768) {
      this.setState({ isSticky: true });
    } else {
      this.setState({ isSticky: false });
    }
  }

  handleShow(id) {
    this.setState({ show: id });
  }

  handleClose() {
    this.setState({ show: null });
  }

  render() {
    return (
      <div className={styles.navbarFlex}>
        <Navbar
          className={this.state.isSticky ? styles.stickyNavbar : styles.navbar}
          bg="dark"
          variant="dark"
          expand="lg"
        >
          <Navbar.Brand href="#home">
            <img alt="" src={logo} className={styles.logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="custom-navbar-nav" />
          <Navbar.Collapse id="custom-navbar-nav">
            <Nav className={styles.navCenter}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav className={styles.navRight}>
              <NavDropdown
                alignRight
                title={<Person />}
                id="custom-nav-dropdown"
              >
                <NavDropdown.Item
                  name="loginShow"
                  onClick={() => this.handleShow("login")}
                >
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item
                  name="registerShow"
                  onClick={() => this.handleShow("register")}
                >
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#cart">
                <Cart4 />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <RegisterModal
          show={this.state.show}
          handleClose={this.handleClose}
          handleShow={this.handleShow}
        />
        <LoginModal
          show={this.state.show}
          handleClose={this.handleClose}
          handleShow={this.handleShow}
        />
      </div>
    );
  }
}

export default CustomNavBar;
