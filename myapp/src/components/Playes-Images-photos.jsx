import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function ShapeExample(props) {
  return (
    <Container className="image-container">
      <Row>
        <Col>
          <Image src={props.image} rounded className="team-image" />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;
