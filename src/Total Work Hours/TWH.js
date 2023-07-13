import React from 'react'
import "./TWH.css"
import man from "./Man Working.jpg"

const TWH = () => {
  return (
    <div className="main-div">
        <div className='sub-div1'>
            <div className='sub-div1-left'>
                <span><strong>Total Work Hours</strong></span>
            </div>
            <div className='sub-div1-mid'>
                <span><strong>Avg Timing-Week</strong></span>
            </div>    
            <div className='sub-div1-right'>
                <span><strong>Attendance Status</strong></span>
            </div>
        </div>
        <hr className='hr-line' />
        <div className='sub-div2'>
            <div className='sub-div2-left'>
                <p><strong className='hrs2'>32 Hrs</strong></p>
                <p className='p-text'>AMS-This Week</p>
                <p><strong className="hrs2">54 Hrs</strong></p>
                <p className='p-text'>AMS-Last Week</p>
                <p><strong className='hrs2'>220 Hrs</strong></p>
                <p className='p-text'>AMS-Month</p>
            </div>

            <div className='sub-div2-right'>
                <img src={man} />
            </div>
        </div>
    </div>
  )
}

export default TWH