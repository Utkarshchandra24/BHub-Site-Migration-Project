import React from 'react'
import Slider from 'react-slick';


const sliderdot = {
    dots : true,
    infinite: false,
    speed: 0,
    slidesToShow: 2,
    slidesToScroll: 1
};

const SlickTest = () => {
  return (
    <div>
        <h1>Slick Test</h1>
        <Slider {...sliderdot}>
            <h3>1</h3>
            <h3>2</h3>
            <h3>3</h3>
            <h3>4</h3>
            <h3>5</h3>
            <h3>6</h3>
        </Slider>
    </div>
  )
}

export default SlickTest