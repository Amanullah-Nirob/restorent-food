import React from 'react';
import UseAuth from '../../hooks/UseAuth';
import './Login.css'

const Login = () => {
    const {logInFunction,emailFunction,passwordFunction,onsubmitFunction,checkboxFunction,nameupdatefunction,isloged,error}=UseAuth()

    
    return (
        <div className='login'>
           <div className='loginOrRegister'>
           <div className='container'>
           <div className='login-content-text'>
            <h1>Login/Register</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br /> commodo ligula eget dolor. Aenean massa.</p>
            </div>
         </div>
         </div>
                   
<section className="Appointment-section">
<div className="Appointment-section-container">
    <h1 className="Appointment-title">
        <span>a</span>
        <span>p</span>
        <span>p</span>
        <span>o</span>
        <span>i</span>
        <span>n</span>
        <span>t</span>
        <span>m</span>
        <span>e</span>
        <span>n</span>
        <span>t</span>
      <br/>
      <span>n</span>
      <span>o</span>
      <span>w</span>


      </h1>
    
<div className="Appointment-section-all-content">
<div className="wow slideInLeft left-content-img" >
<div className='left-all-content'>
  <div className='left-text'>
    <h1>GET CLOSER</h1>
    <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</small></p>
  </div>

<div className="left-content-box">
<div className='left-context-single-box'>
  <div className='icon'><i class="fas fa-map"></i></div>
  <div className='single-box'>
  <h5>LOCATION</h5>
  <p>Jl. Pantai Kuta No.34,<br /> Badung, Bali</p>
  </div>
</div>
<div className='left-context-single-box'>
  <div className='icon'><i class="fas fa-location-arrow"></i></div>
  <div className='single-box'>
  <h5>email address</h5>
  <p>khannirub55@gmail.com</p>
  </div>
</div>
</div> 

<div className="left-content-box">
<div className='left-context-single-box'>
  <div className='icon'><i class="fas fa-phone-volume"></i></div>
  <div className='single-box'>
  <h5>phone</h5>
  <p>+8801725502623</p>
  </div>
</div>
<div className='left-context-single-box'>
  <div className='icon'><i class="fas fa-door-open"></i></div>
  <div className='single-box'>
  <h5>OPEN HOUR</h5>
  <p>10.00 am - 09.00 pm</p>
  </div>
</div>
</div>
<div className='bottom-owner'>
<div className='left-img'><img src="https://i.ibb.co/6mL0CLd/farhan.jpg" alt="" /></div>
  <div className='left-bottom-text'>
    <h2>our owner</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, perferendis ab quibusdam tempore accusamus numquam. Perferendis, repudiandae ullam. Consectetur rem delectus et debitis facilis quibusdam quisquam soluta aliquid totam odit.</p>
  </div>
</div>
</div>
</div>

<div  className="right-content-form">
    <form onSubmit={(event)=>onsubmitFunction(event)}>
    
      <div className="all-baje-icon">
        <img className="iconbaje" src="https://i.ibb.co/F03gTb0/icon3.jpg" alt=""/>
        <img className="iconbaje add" src="https://i.ibb.co/F03gTb0/icon3.jpg" alt=""/>
      </div>

{
isloged?
    <div className="form-title">          
<span>l</span>
<span>o</span>
<span>g</span>
<span>i</span>
<span>n</span>
<span style={{visibility:'hidden'}}></span>
<span>f</span>
<span>o</span>
<span>r</span>
<span>m</span>
<br/>
<div className='mt-1'>
<span>d</span>
<span>e</span>
<span>t</span>
<span>a</span>
<span>i</span>
<span>l</span>
<span>s</span>
</div>

<hr/>
</div>:
    <div className="form-title">          
    <span>r</span>
    <span>e</span>
    <span>g</span>
    <span>i</span>
    <span>s</span>
    <span>t</span>
    <span>e</span>
    <span>t</span>
    <span>i</span>
    <span>o</span>
    <span>n</span>
  <br />
    <div className='mt-1'>
    <span>d</span>
    <span>e</span>
    <span>t</span>
    <span>a</span>
    <span>i</span>
    <span>l</span>
    <span>s</span>
    </div>
    <hr />

    </div> 
} 

{!isloged?<div>
<p>full name</p>
<input onBlur={(e)=>nameupdatefunction(e)} type="name" placeholder='enter your full name' />
</div>:<div className='invisible'>
<p>full name</p>
<input onBlur={(e)=>nameupdatefunction(e)} type="name" placeholder='enter your full name' />
</div>
}
<p>email</p>
 <input onBlur={(event)=>emailFunction(event)} type="email" name="email" placeholder="enter your email"/> 

<p>password</p>
<input onBlur={(event)=>passwordFunction(event)} type="password" name="password" placeholder="enter your password"/>

<input  onClick={(event)=>checkboxFunction(event)}  type="checkbox" />
<label  htmlFor="checkbox" className='mt-3 text-warning ms-2'>allready register?</label>
{/* <p className='text-danger'>{error}</p> */}
 <button type='submit'id='btn'  className='btn-warning loginbtn'>{isloged?`login now`:`registation now`}</button> 

<div className='text-center'><p className='text-warning text-capitalize'>-------------- log in with -------------</p></div>
 <div className='mt-4 text-center'>
<button onClick={logInFunction} className='btn'><img alt='' src="https://img.icons8.com/fluency/48/000000/google-logo.png"/></button>
<button className="btn"><img alt='' src="https://img.icons8.com/fluency/48/000000/facebook-new.png"/></button>
<button className="btn"><img alt='' src="https://img.icons8.com/nolan/48/github.png"/></button>
<button className="btn"><img alt='' src="https://img.icons8.com/fluency/48/000000/twitter.png"/></button>
</div> 

 <div className="all-baje-icon nambar2">
    <img className="iconbaje" src="https://i.ibb.co/9NCSch8/icon2.jpg" alt=""/>
    <img className="iconbaje add" src="https://i.ibb.co/9NCSch8/icon2.jpg" alt=""/>
  </div> 
  
</form>


</div>
</div>
</div>
</section>

  

       
               
               
               
          
          

          


          


          
               
               
        </div>
    );
};

export default Login;