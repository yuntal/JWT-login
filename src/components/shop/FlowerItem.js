import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {Card, Container, Row, Col} from 'react-bootstrap';  


function FlowerItem({ id, name, prices, images }) {
 return (

  <Container>
  <Row>
  <Col>  
  <Card>    
     <Link to={`detail/${id}`}>
    <Card.Img  variant="top" src={images[0].src} className="card-top" />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Title>${prices}</Card.Title>
          </Card.Body>
        </Link>
     </Card></Col>
      </Row>
    </Container>
 );
}

FlowerItem.propTypes = {
 id: PropTypes.number.isRequired,
 name: PropTypes.string.isRequired,
 prices: PropTypes.string.isRequired,
};

export default FlowerItem;