import React from 'react'

import "./BHubHeader.css"

import bhub from "./BHub Logo.PNG"
import user from "./user 1.jpg"

const BHubHeader = () => {
  return (
    <div className='main-div'>
        <div className='left-div'>
            <img src={bhub} />
        </div>
        <div className='mid-div'>
            <div className='mid-div1'>
                <span><strong>LMS</strong></span>
            </div>
            <div className='mid-div2'>
                <span><strong>AMS</strong></span>    
            </div>
            <div className='mid-div3'>
                <span><strong>PMS</strong></span>    
            </div>
            <div className='mid-div4'>
                <span><strong>BluGo</strong></span>    
            </div>
            <div className='mid-div5'>
                <span><strong>BluClaim</strong></span>    
            </div>
        </div>
        <div className='right-div'>
            <img src={user} className='user-img' />
        </div>
    </div>
  )
}

export default BHubHeader