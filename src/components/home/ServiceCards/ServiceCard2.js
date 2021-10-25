import React from 'react';
import { Card, Col } from 'react-bootstrap';



const ServiceCard2 = (props) => {
    const {img,name,dis,price}=props.card
    return (
<div className="single-card">

<Col >
        <Card>

<div className='enter-card'>
<div className='card-img-area' >
          <Card.Img id='card-img' variant="top" src={img}/>
          </div>
</div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            <p>{dis}</p>
            <h5>${price}</h5>
            </Card.Text>

          </Card.Body>
          

        </Card>

      </Col>

</div>
    );
};

export default ServiceCard2;