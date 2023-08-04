import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IMAGES_URL } from "../../config";


const Ad = ({ title, location, image, id }) => {

  return (
    <Col className="py-4 col-12 col-sm-6 col-lg-4">
      <Card>
        <Card.Body >
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p><b>Location: </b>{location}</p>
          </Card.Text>
          <Link key={id} to={"/ads/" + id}>
            <Button variant="success">Read more</Button>
          </Link> 
        </Card.Body>
        <Card.Img variant="top" src={IMAGES_URL + image} />
      </Card>
    </Col>
  );
};

export default Ad;