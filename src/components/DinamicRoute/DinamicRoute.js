import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './dinamicRoute.css'


export const CartContext=createContext()

const DinamicRoute = ({children}) => {
   let {dam}=useParams()
    dam=parseInt(dam)
const [user,setUser]=useState([])
const [count,setCount]=useState(1)


useEffect(()=>{
        fetch(`/data/data1.json`)
        .then(response=>response.json())
        .then(data=>setUser(data))
},[])

const countFunction=()=>{
   setCount(count+1)
}
const minusFunction=()=>{
   setCount(count-1)
}
const lala=user.find((x)=>x.id===dam)
const oprice=lala?.price*count



    return (
        <div className='dinamic-ditails'>
                    <div className='dinamicroutess'>
           <div className='container'>
           <div className='dinamicrout-content-text'>
            <h1>LOOK HOW WE MAKE BEEF MEAT TASTY <br /> WITH THIS TECHNIQUE</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br /> commodo ligula eget dolor. Aenean massa.</p>
            </div>
         </div>
         </div>
            
         <div className="container">
        <div className="row dinamic-all-centent">
       <div className="col-lg-6 col-md-12 col-12 dinamix-text">
       <h1><img alt=''src="https://img.icons8.com/color/50/000000/fat-emoji.png"/> {lala?.name} <img alt=''src="https://img.icons8.com/color/50/000000/fat-emoji.png"/></h1>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero aperiam, ipsa eius at sed reiciendis dolor porro, provident vel possimus cumque repudiandae tempore. Quod numquam consequuntur assumenda voluptatum corrupti nemo ducimus aspernatur porro reiciendis facere. Incidunt quae ad laborum facere aliquid nesciunt voluptatem tenetur atque magnam perspiciatis quia, est dignissimos molestias error, eaque officiis doloremque commodi ullam ut nam sapiente, itaque corrupti inventore aspernatur. Eaque reprehenderit voluptatum reiciendis explicabo sapiente, modi quas aperiam illo est ad, saepe a nemo dolores.</p>
     <div className='fuckl'>
     <h2 className='text-warning'>${oprice}</h2>
   <div className='d-flex fillik'>
   { count>1?<img width='33px'  onClick={minusFunction} src="https://i.ibb.co/Wzp6LYp/download-1-removebg-preview.png" alt="" />
       :
       <img width='33px' src="https://i.ibb.co/Wzp6LYp/download-1-removebg-preview.png" alt="" />
       }
     <h4 className='text-warning'>{count}</h4>
     <img  onClick={countFunction} width='33px' src="https://i.ibb.co/bs6FV4k/images-2-removebg-preview.png" alt="" />
       
   </div>
     </div>
     <Link className='confrim-link' to={`/cart`}>confirm order</Link><br />
 
       </div>
       <div className="col-lg-6 col-md-12 col-12">
       <img width='100%' src={lala?.img} alt="" />
       </div>
        </div>
         </div>
         
         {/* popup strat======================================================================================= */}

        </div>
    );
   

};




export default DinamicRoute;