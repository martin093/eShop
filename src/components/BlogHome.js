import React, { Component } from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import styles from "./BlogHome.module.css";
import blogImage from "../img/blog.jpg";

class BlogHome extends Component {
  render() {
    return (
      <div className={styles.container}>
        <CardDeck className={styles.cardDeck}>
          <Card>
            <Card.Img variant="top" src={blogImage} />
            <Card.Body>
              <Card.Title className={styles.title}>Card title</Card.Title>
              <Card.Text className={styles.text}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className={styles.readMore} variant="primary">
                Read More
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={blogImage} />
            <Card.Body>
              <Card.Title className={styles.title}>Card title</Card.Title>
              <Card.Text className={styles.text}>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className={styles.readMore} variant="primary">
                Read More
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={blogImage} />
            <Card.Body>
              <Card.Title className={styles.title}>Card title</Card.Title>
              <Card.Text className={styles.text}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className={styles.readMore} variant="primary">
                Read More
              </Button>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default BlogHome;
