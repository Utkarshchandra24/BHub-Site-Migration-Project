import React from 'react'
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const Slick = () => {
        
    return (
        <div>
            <h1>Trying React Slick</h1>
            <Slider {...settings}>
          <div>            <h3>1</h3>          </div>
          <div>            <h3>2</h3>          </div>
          <div>            <h3>3</h3>          </div>
          <div>            <h3>4</h3>          </div>
          <div>            <h3>5</h3>          </div>
          <div>            <h3>6</h3>          </div>
        </Slider>
        </div>
    )
}

export default Slick