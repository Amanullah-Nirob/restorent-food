import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard1.css'
const ServiceCard1 = (props) => {
  const {img,dis,price,name,id}=props.card

    return (
<div className="single-card"data-aos="fade-up" data-aos-duration="1000" >

<Col>
        <Card >

<div className='enter-card'>
<div className='card-img-area'>
          <Card.Img id='card-img' variant="top" src={img} />
          </div>
</div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            <p>{dis}</p>
        <div className="d-flex justify-content-between">
        <h5>${price}</h5>
        <Link  className='first-link' to={`/ServiceCard1/${id}`}>add to cart</Link>
        </div>
</Card.Text>

          </Card.Body>
          

        </Card>

      </Col>

</div>
    );
};

export default ServiceCard1;