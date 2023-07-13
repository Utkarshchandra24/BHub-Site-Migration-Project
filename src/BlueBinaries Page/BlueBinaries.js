import React, { useState } from 'react'

import "./BlueBinaries.css"

const BlueBinaries = () => {
  const [currentPage,setCurrentPage] = useState(1);

  return (
    <div className="main-div">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='mid-div'>
        <span className='heading'><strong>BlueBinaries</strong></span><br />
        <div className='mid-div1'>
          {currentPage == 1 && (
            <div className='mid-div11'>
              <span><strong>Joins SOAFEE</strong></span><br />
              <span><strong>to accelerate the</strong></span><br />
              <span><strong>evolution of</strong></span><br />
              <span><strong>Software-Defined</strong></span><br />
              <span><strong>Vehicles</strong></span>
            </div>
          )}
          {currentPage == 2 && (
            <div className='mid-div12'>
              <span><strong>You are the</strong></span><br />
              <span><strong>focus of the </strong></span><br />
              <span><strong>Next Gen</strong></span><br />
              <span><strong>Technology</strong></span><br />

            </div>
          )}
          {currentPage == 3 && (
            <div className='mid-div13'>
              <span><strong>Inovation and Agility</strong></span><br />
              <span><strong>is the gist</strong></span><br />
              <span><strong>of our</strong></span><br />
              <span><strong>Business Model</strong></span><br />

            </div>
          )}
          {currentPage == 4 && (
            <div className='mid-div14'>
              <span><strong>Our Journey</strong></span><br />
              <span><strong>is about</strong></span><br />
              <span><strong>celeberating passioneering,</strong></span><br />
              <span><strong>EVERYDAY.</strong></span><br />

            </div>
          )}
        </div>
      </div>
      <div className='bottom-div'>
         <div className='dots-container'>
            <div className={`dot ${currentPage === 1 ? `active` : ''}`} onClick={()=> setCurrentPage(1)} />
            <div className={`dot ${currentPage === 2 ? `active` : ''}`} onClick={()=> setCurrentPage(2)} />
            <div className={`dot ${currentPage === 3 ? `active` : ''}`} onClick={()=> setCurrentPage(3)} />
            <div className={`dot ${currentPage === 4 ? `active` : ''}`} onClick={()=> setCurrentPage(4)} />
         </div>
      </div>
    </div>
  )
}

export default BlueBinaries