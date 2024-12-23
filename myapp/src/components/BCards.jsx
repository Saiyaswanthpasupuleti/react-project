import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem', height: '350px' }}> {/* Set a fixed height for the card */}
      <Card.Img variant="top" src={props.src} style={{ height: '50%', objectFit: 'contain' }} />
      <Card.Body style={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>

        <Button variant="success">
          <Link to={props.link} className="nav-link text-light" >
            {props.text}
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
