import React from 'react'
import pic1 from "./Google.png"
import pic2 from "./react1.png"
import pic3 from "./html5.png"

import "./Carousolpf2.css"

const Carousolpf2 = () => {
  return (
    <div>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic1} className="pic1" alt="pic1"/>
    </div>
    <div className="carousel-item">
      <img src={pic2} className="pic2" alt="pic2"/>
    </div>
    <div className="carousel-item">
      <img src={pic3} className="pic3" alt="pic3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousolpf2