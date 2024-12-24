import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample(props) {
  return (
    <Container style={{display:"flex",justifyContent:"center",alignItems:"center",height:"auto"}}>
      <Row>
      <Col xs={6} md={4}>
          <Image src={props.image} rounded />
        </Col>
       
        {/* <Col xs={6} md={4}>
          <Image src={props.image} thumbnail />
        </Col> */}
        {/* <Col xs={6} md={4}>
          <Image  src={props.image} roundedCircle />
        </Col> */}
      </Row>
    </Container>
  );
}

export default ShapeExample;