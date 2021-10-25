import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleArticle from '../SingleArticle/SingleArticle';

const Article = () => {

const [user,setUser]=useState([])
useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
    .then(response=>response.json())
    .then(data=>setUser(data.meals))
},[])

    return (
        <div className='container fucks'> 
            <div className="servise-text">
<div className='mb-2 text-center text-white'>
   <h1>OUR NEWS & ARTICLE</h1>
   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean.eget dolor. Aenean.eget dolor. Aenean.</p>
</div>
</div>
     <Row xs={1} md={4} className="mx-auto bambam">
    {
        user.map((x)=><SingleArticle card={x}/>)
    }
    </Row>
        </div>
    );
};

export default Article;