import React from 'react'
import "./Resources.css"

import color from "./BB Color Code.PNG"
import fact from "./facto font.PNG"
import ppt from "./PPT Templates.PNG"
import logo from "./BB Logo.PNG"


const Resources = () => {
  return (
    <div className="main-div">
        <div className="sub-div1">
          <h3>Resources</h3>
        </div>
        <div className="sub-div2">
          <div className="sub-div21">
            <img src={fact} />
          </div>
          <div className="sub-div22">
            <span><strong>Facto Font</strong></span><br />
            <button><span>Download Now</span></button>
          </div>
          <div className="sub-div21-2">
            <img src={logo} />
          </div>
          <div className="sub-div22-2">
            <span><strong>BB Logo</strong></span><br />
            <button><span>View All</span></button>
          </div>
        </div>
        <br />
        <br />
        <div className="sub-div3">
          <div className="sub-div31">
              <img src={ppt} />
            </div>
            <div className="sub-div32">
              <span><strong>PPT Templates</strong></span><br />
              <button><span>Download Now</span></button>
            </div>
            <div className="sub-div31-2">
              <img src={color} />
            </div>
            <div className="sub-div32-2">
              <span><strong>BB Color Code</strong></span><br />
              <button><span>Download Now</span></button>
            </div>
        </div>
    </div>
  )
}

export default Resources