import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './singleArticle.css'
const SingleArticle = (props) => {
const {idMeal,strMealThumb,strMeal,strInstructions}=props.card

    return (
        <div className='article-single-card'>
                <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb}/>
        <Card.Body>
          <Card.Title><h5>{strMeal}</h5></Card.Title>
          <Card.Text>
          <p> {strInstructions.slice(0,100)}</p>
          </Card.Text>
          <Link className='second-link' to={`/singleArticle/${idMeal}`}>Read More</Link>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default SingleArticle;