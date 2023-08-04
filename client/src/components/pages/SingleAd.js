import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleAd = ({ title, price, published, id, user }) => {

  return (
    <Col className="py-4 col-12 col-sm-6 col-lg-4">
      <Card>
        <Card.Body >
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p><b>Author: </b>{user}
            <br/><b>Published: </b>{published}
            <br/><b>Price: </b>{price}</p>
          </Card.Text>
          <Link to={"/ads/" + id}>
            <Button variant="success">Read more</Button>
          </Link> 
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleAd;