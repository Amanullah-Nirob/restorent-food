import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceCard1 from '../ServiceCards/ServiceCard1';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Service.css'
const Service = () => {

const [user,setUser]=useState([])
   useEffect(()=>{
       fetch(`data/data1.json`)
       .then(response=>response.json())
       .then(data=>setUser(data))
   },[])

   const [user2,setUser2]=useState([])

   useEffect(()=>{
    fetch(`data/Data2.json`)
    .then(response=>response.json())
    .then(data=>setUser2(data))
},[])
   const [user3,setUser3]=useState([])

   useEffect(()=>{
       fetch(`data/Data3.json`)
       .then(response=>response.json())
       .then(data=>setUser3(data))
   },[])


return (
        <Tabs>
<div style={{backgroundColor:'black'}}>
<div className="container">
<div className="servise-text">
<div className='mb-2 text-center text-white'>
   <h1>OUR BEST MENUES</h1>
   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  Aenean.eget dolor.  Aenean.</p>
</div>

<div className='tabs'>
<TabList>
<Tab>food</Tab>
<Tab>snack</Tab>
<Tab>Beverage</Tab>
</TabList>
</div>


</div>
<TabPanel>
<Row  xs={1} md={4} className="mx-auto g-5" >
{
user.map((x)=><ServiceCard1 key={x.id} card={x} />)
}
</Row>
</TabPanel>

<TabPanel>
<Row  xs={1} md={4} className="mx-auto g-5" >
{
user2.map((x)=><ServiceCard1  key={x.id}  card={x} />)
}
</Row>
</TabPanel>  

<TabPanel>
<Row  xs={1} md={4} className="mx-auto g-5">
{
user3.map((x)=><ServiceCard1  key={x.id}  card={x} />)
}
</Row>
</TabPanel>  



</div>

</div>

</Tabs>


    );
};

export default Service;