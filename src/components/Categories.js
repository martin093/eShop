import React, { Component } from "react";
import { Image } from "react-bootstrap";
import styles from "./Categories.module.css";
import image1 from "../img/categories1.jpg";
import image2 from "../img/categories2.jpg";
import image3 from "../img/categories3.jpg";

class Categories extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.containerImg}>
            <Image className={styles.image} src={image1} />
            <div className={styles.middle}>
              <div className={styles.text}>Category</div>
            </div>
          </div>
          <div className={styles.containerImg}>
            <Image className={styles.image} src={image2} />
            <div className={styles.middle}>
              <div className={styles.text}>Category</div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.containerImg}>
            <Image className={styles.image} src={image2} />
            <div className={styles.middle}>
              <div className={styles.text}>Category</div>
            </div>
          </div>
          <div className={styles.containerImg}>
            <Image className={styles.image} src={image1} />
            <div className={styles.middle}>
              <div className={styles.text}>Category</div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.containerImg}>
            <Image className={styles.image} src={image3} />
            <div className={styles.middle}>
              <div className={styles.text}>Category</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
