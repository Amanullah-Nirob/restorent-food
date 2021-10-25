import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';




const Header = () => {
  const {user,logoutfunction}=UseAuth()
    return (
       <div className='header'>
            <div className='container'>
 <Navbar id='nab' className='navbar-dark' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">
    <img className='navbar-logo' src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/logo-300x75.png" alt="" />
    </Navbar.Brand>
    
    <Navbar.Toggle id='nabvar' aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      
      <Nav id='nav'className="ms-2 ms-auto my-lg-0"navbarScroll>

      <NavLink to="/home"activeStyle={{color: "orange"}}>Home</NavLink>
      <NavLink to="/about"activeStyle={{color: "orange"}}>about Us</NavLink>
      <NavLink to="/service"activeStyle={{color: "orange"}}>services</NavLink>
      <NavLink to="/Blog"activeStyle={{color: "orange"}}>blog</NavLink>
      <NavLink to="/contact"activeStyle={{color: "orange"}}>contact us</NavLink>
</Nav> 
{user?.email?
 
<div id="hamburger">

<nav className="main-nav" id="main-nav">
<div className='menu-content'>
<div className='meno-imgandemail'>
{user?.photoURL?<div><img id='meno-img' src={user?.photoURL} alt="" /></div>:<div><img alt=''src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/000000/external-user-management-kiranshastry-lineal-color-kiranshastry-10.png"/></div>}
{!user.displayName?<div><h5>no name</h5></div>:<div><h5 className='mt-3'>{user?.displayName}</h5> </div>}
<h5>{user?.email}</h5>
</div>

 
 <div className='oothers'>
 <div className='others'><img alt='' className='animated2' src="https://img.icons8.com/color-glass/32/000000/service-bell.png"/><h5>more services</h5></div>
 <img className='me-3' src="https://img.icons8.com/external-prettycons-flat-prettycons/17/000000/external-right-arrow-orientation-prettycons-flat-prettycons.png" alt=''/>
 </div>
 <div className='oothers'>
 <div className='others'><img alt=''src="https://img.icons8.com/nolan/32/offer-hot-price.png"/><h5>offer hot price</h5></div>
 <img className='me-3' src="https://img.icons8.com/external-prettycons-flat-prettycons/17/000000/external-right-arrow-orientation-prettycons-flat-prettycons.png" alt=''/>
 </div>
 <div className='oothers'>
 <div className='others'><img alt=''src="https://img.icons8.com/external-sbts2018-flat-sbts2018/32/000000/external-gift-card-cyber-monday-sbts2018-flat-sbts2018.png"/><h5>get gif card</h5></div>
 <img className='me-3' src="https://img.icons8.com/external-prettycons-flat-prettycons/17/000000/external-right-arrow-orientation-prettycons-flat-prettycons.png" alt=''/>
 </div>
 <div className='oothers'>
 <div className='others'><img alt=''src="https://img.icons8.com/external-wanicon-flat-wanicon/32/000000/external-banner-cyber-monday-wanicon-flat-wanicon.png"/><h5>coupon</h5></div>
 <img className='me-3' src="https://img.icons8.com/external-prettycons-flat-prettycons/17/000000/external-right-arrow-orientation-prettycons-flat-prettycons.png" alt=''/>
 </div>
 <div className='oothers'>
 <div className='others'><img src="https://img.icons8.com/dusk/32/000000/technical-support.png" alt=''/><h5>Technical Support</h5></div>
 <img className='me-3' src="https://img.icons8.com/external-prettycons-flat-prettycons/17/000000/external-right-arrow-orientation-prettycons-flat-prettycons.png" alt=''/>
 </div>
 <div className='oothers'>
 <div className='others'><img src="https://img.icons8.com/external-justicon-flat-gradient-justicon/32/000000/external-report-telemedicine-justicon-flat-gradient-justicon.png" alt=''/><h5>Report food</h5></div>
 <img className='me-3' src="https://img.icons8.com/external-prettycons-flat-prettycons/17/000000/external-right-arrow-orientation-prettycons-flat-prettycons.png" alt=''/>
 </div>
 <div onClick={logoutfunction} className='oothers'>
 <div className='others'><img alt='' className='animated' src="https://img.icons8.com/nolan/32/logout-rounded.png"/><h5>log out</h5></div>
 <img className='me-3' src="https://img.icons8.com/external-prettycons-flat-prettycons/17/000000/external-right-arrow-orientation-prettycons-flat-prettycons.png" alt=''/>
 </div>
 <div className='oothers'>
 <div className='others'><img src="https://img.icons8.com/external-bearicons-flat-bearicons/32/000000/external-faq-frequently-asked-questions-faq-bearicons-flat-bearicons.png" alt=''/><h5>f and q</h5></div>
 <img className='me-3' src="https://img.icons8.com/external-prettycons-flat-prettycons/17/000000/external-right-arrow-orientation-prettycons-flat-prettycons.png" alt=''/>
 </div>
 <div className='border-0 oothers'>
 <div className='others'><img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/32/000000/external-partnership-company-itim2101-lineal-color-itim2101.png" alt=''/><h5>partnership</h5></div>
 <img className='me-3' src="https://img.icons8.com/external-prettycons-flat-prettycons/17/000000/external-right-arrow-orientation-prettycons-flat-prettycons.png" alt=''/>
 </div>


  
  </div>

</nav>

<div className="page-wrap">

  <header className="main-header">
    <a href="#main-nav" className="open-menu text-decoration-none">
 { user.photoURL?<div><img className='userphoto' src={user.photoURL} alt="" /> </div>:
   !user?.displayName?<div><img alt=''src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/000000/external-user-management-kiranshastry-lineal-color-kiranshastry-10.png"/></div>:<div className='display'><p>user</p></div>
 }
    </a>
    <a href="#" className="close-menu text-decoration-none">
    { user.photoURL?<div><img className='userphoto' src={user.photoURL} alt="" /> </div>:
 !user?.displayName?<div><img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/000000/external-user-management-kiranshastry-lineal-color-kiranshastry-10.png"alt=''/></div>:<div className='display'><p>user</p></div>}
    </a>
    
  
</header>
</div>
</div>
:
<Link to='/login'>
     <Button id='btn' variant="warning">Login/register</Button>
     </Link>}
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
       </div>
    );
};

export default Header;