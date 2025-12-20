import React from 'react'

const CarouselTwo = () => {
  return (
    <div className='carousel'>
      <div className="box fourth">
        <div className="about-btn">Services</div>
        <h4>Explore our full range of coaching, training, and tennis experiences. From the first serve to match point -- we've got the right program for you.</h4>
        <button className="book">Explore more <i className="ri-arrow-right-up-line"></i></button>
      </div>
      <div className="box fifth">
        <div className="people">Training Programs</div>
        <div className="bar">
            <p>Programs designed for <br />all ages and abilities.</p>
            <div className="book"><i className="ri-arrow-right-up-line"></i></div>
        </div>
      </div>
      <div className="box sixth">
        <div className="box-1">
            <div className="people">Court Access</div>
            <h3>Hourly Court Rental</h3>
        </div>
        <div className="box-2">
            <p>Step into a space built for <br /> players -- to grow, compete, <br /> and thrive.</p>
            <div className="arrows">
                <i className="ri-arrow-left-long-line about-btn"></i>
                <i className="ri-arrow-right-long-line about-btn"></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselTwo
