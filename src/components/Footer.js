import React, { Component } from "react";
import styles from "./Footer.module.css";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.leftFooter}>
          <img alt="" src={logo} className={styles.logo} />
          <p className={styles.companyNameFooter}>Company Name © 2020</p>
        </div>
        <div className={styles.centerFooter}>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faMapMarkerAlt} />
            <p>
              <span>55 whakarewa St</span>
              "Motueka, New Zealand"
            </p>
          </div>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faPhoneAlt} />
            <p>
              <span>+64 22 0835 882</span>
            </p>
          </div>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>
        <div className={styles.rightFooter}>
          <p className={styles.aboutFooter}>
            <span>About the company</span>Lorem ipsum dolor sit amet,
            consectateur adispicing elit. Fusce euismod convallis velit, eu
            auctor lacus vehicula sit amet.
          </p>
          <div className={styles.iconsFooter}>
            <a href="#">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
