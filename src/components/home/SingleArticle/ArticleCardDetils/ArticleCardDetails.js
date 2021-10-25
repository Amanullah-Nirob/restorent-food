import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ArticleCardDetils.css'
const ArticleCardDetails = () => {
    const {kam}=useParams()

const [user,setUser]=useState({})
useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${kam}`)
.then(response=>response.json())
.then(data=>setUser(data.meals[0]))
},[])

const {idMeal,strMealThumb,strMeal,strInstructions}=user


    return (
     
        <div className='articleDitails'>
              <div className='articles'>
           <div className='container'>
           <div className='article-content-text'>
            <h1>LOOK HOW WE MAKE BEEF MEAT TASTY <br /> WITH THIS TECHNIQUE</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br /> commodo ligula eget dolor. Aenean massa.</p>
            </div>
         </div>
         </div>
         
         <div className="container">
             <div className="pt-5 articledetils-all-content">
                 <div className="row">
                     <div className=" col-lg-8 col-12">
                <div className='right-img1'><img src={strMealThumb} alt="" />
                </div>
                <div className='right-textp'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p> 
                </div>
                
                <div className='first1all-content'>
                    <h5>CONTENT WRITER FOR WEBSITE</h5>
                    <div className="row abram">
                     <div className="col-lg-6 col-md-12 col-12">
                         <img src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/08/female-chef-talking-with-waiter-by-colleague-at-kitchen-800x533.jpg" alt="" />
                     </div>
                     <div className="col-lg-6 col-md-12 col-12">
                         <img src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/08/male-friends-drinking-beer-and-eating-burgers-in-sports-bar-800x533.jpg" alt="" />
                     </div>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                
                <div className='row checks-icon'>
  <div className="col-lg-6 col-md-12 col-12">
<h6><i class="fas fa-check text-warning me-1"></i> Quisque aliquet nibh sit amet lectus</h6>
<h6><i class="fas fa-check text-warning me-1"></i> Nulla at metus ultricies, placerat augue</h6>
<h6><i class="fas fa-check text-warning me-1"></i> Curabitur mollis ex vestibulum</h6>
<h6><i class="fas fa-check text-warning me-1"></i> Quisque aliquet nibh sit amet lectus auctor</h6>
  </div>
  <div className="col-lg-6 col-md-12 col-12">
<h6><i class="fas fa-check text-warning me-1"></i> Quisque aliquet nibh sit amet lectus</h6>
<h6><i class="fas fa-check text-warning me-1"></i> Nulla at metus ultricies, placerat augue</h6>
<h6><i class="fas fa-check text-warning me-1"></i> Curabitur mollis ex vestibulum</h6>
<h6><i class="fas fa-check text-warning me-1"></i> Quisque aliquet nibh sit amet lectus auctor</h6>
  </div>
 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</div>

<div>
    <div className="row right-linksArticle">
        <div className="col-lg-6 col-md-6 col-12 ">
           <div className='d-flex fuck1'>
           <h5 className='me-2 text-light'>Tags : </h5>
            <p className=' text-warning'>burger, food</p>
           </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
  <div className='fuck2'>
  <h5 className='text-light'>Share This :</h5>
     <div className="d-flex sochial-icon">
     <p><i class="fab fa-facebook-f"></i></p>
    <p><i class="fab fa-twitter"></i></p>
    <p><i class="fab fa-linkedin-in"></i></p>
  </div>
     </div>
        </div>
    </div>
</div>
</div>

                     <div className="col-lg-4 col-12">
                        <div className="first-lft-stap">
                        <h5 className='left-art-title'>FEATURED NEWS</h5>
                        <div className='futher-txt'>
                            <h5>LOOK HOW WE MAKE BEEF MEAT TASTY WITH THIS TECHNIQUE</h5>
                            <div className='d-flex'>
                           <small> <i class="fas fa-clock"></i></small>
                            <small>August 3, 2021</small>
                            </div>
                        </div>
                        <div className='futher-txt'>
                            <h5>LOOK HOW WE MAKE BEEF MEAT TASTY WITH THIS TECHNIQUE</h5>
                            <div className='d-flex'>
                           <small> <i class="fas fa-clock"></i></small>
                            <small>August 3, 2021</small>
                            </div>
                        </div>
                        <div className='futher-txt'>
                            <h5>LOOK HOW WE MAKE BEEF MEAT TASTY WITH THIS TECHNIQUE</h5>
                            <div className='d-flex'>
                           <small> <i class="fas fa-clock"></i></small>
                            <small>August 3, 2021</small>
                            </div>
                        </div>
                        </div>
                         
                         <div className='catagory'>
                             <h4 className='title2'>CATEGORY</h4>
                             <div className='title3'>
                                 <h5>NEWS</h5>
                                 <h5>Food</h5>
                                 <h5>BEVERAGE</h5>
                             </div>
                         </div>
                         <div className='titlimg'>
                             <div className="titleoverley"></div>
                             <img width='100%' src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/08/woman-making-order-in-cafe.jpg" alt="" />
                         <div className="titlimftext">
                             <h5>GET 20% DISCOUNT FOR ONLINE PAYMENT</h5>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. .</p>
                             <p className='text-warning text-capitalize'>get started</p>
                         </div>
                         
                         </div>
                         
                         
                     </div>
                 </div>
             </div>
             
         </div>
         
         
         
        </div>
     
      
    );
};

export default ArticleCardDetails;