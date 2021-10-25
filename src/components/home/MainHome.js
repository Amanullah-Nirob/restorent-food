import React from 'react';
import { Col,Row,Button} from 'react-bootstrap';

const MainHome = () => {
    return (
        <div className='home'>
        <div className="container">
        <Row className='d-flex align-items-center'>
            {/* left image */}
        <Col lg={6} xs={12} md={12}data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
        <div className='home-img'> <img  src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/N2HMMGN-2.png" alt="" /></div>
        </Col>
        {/* right content */}
        <Col lg={6} xs={12} md={12} className='text-white' id='home-right'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="100">
        <div className="text">
            <h1>ENJOY BURGRY MAKE YOUR TUMMY HAPPY</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
        </div>
  <div className='home-icons'>
      <div>
      <i class="fas fa-utensils ms-2"></i>
      <h5>Delicious</h5>
      </div>
      <div className='text-center'>
      <i class="fas fa-tint"></i>
      <h5>Fresh</h5>
      </div>
      <div className=''>
      <i class="fas fa-leaf"></i>
      <h5>Organic</h5>
      </div>
  </div>
  <div className='btn-area'>
  <Button id='btn'  variant="warning mt-5 mb-1">Learn More</Button>
      
  </div>
        </Col>
    </Row>
   
   
    </div>
</div>
    );
};

export default MainHome;