import React, { Component } from "react";
import { CardGroup, Card } from "react-bootstrap";
import styles from "./Features.module.css";
import { ArrowRepeat, CreditCard, Truck } from "react-bootstrap-icons";

class Features extends Component {
  render() {
    return (
      <div className={styles.flexFeatures}>
        <CardGroup className={styles.cardGroup}>
          <Card>
            <Truck className={styles.icon} />
            <Card.Body className={styles.cardBody}>
              <Card.Title>Delivery</Card.Title>
              <Card.Text>Delivery available</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <ArrowRepeat className={styles.icon} />
            <Card.Body className={styles.cardBody}>
              <Card.Title>Policy Return</Card.Title>
              <Card.Text>Free shipping</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <CreditCard className={styles.icon} />
            <Card.Body className={styles.cardBody}>
              <Card.Title>Secure Payment</Card.Title>
              <Card.Text>Webpay available</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default Features;
