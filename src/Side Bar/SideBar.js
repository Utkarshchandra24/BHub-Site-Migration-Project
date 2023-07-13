import React from 'react'

import "./SideBar.css"

import logo from "./BHub Logo.PNG"
import user from "./user1.png"
import piggybank from "./piggybank.png"
import mebbes from "./meBBES.png"
import myhr from "./myhr.png"
import communication from "./communication.png"

const SideBar = () => {


    return (
        <div className='main-div'>
            <img src={logo} />
            <br />
            <br />
            <div className='sub-div1'>
                <img src={user} className='user-logo'/>
                <p><strong>MY ACCOUNT</strong></p>
            </div>
            <div className='sub-div2'>
                <img src={piggybank} className='user-piggybank' />
                <p><strong>MY FINANCE</strong></p>
            </div>
            <div className='sub-div3'>
                <img src={mebbes} className='user-mebbes' />
                <p><strong>ME @ BBES</strong></p>
            </div>
            <div className='sub-div4'>
                <img src={myhr} className='user-hr' />
                <p><strong>MY HR</strong></p>
            </div>
            <div className='sub-div5'>
                <img src={communication} className='user-communication' />
                <p><strong>COMMUNICATIONS</strong></p>
            </div>
        </div>
    )
}

export default SideBar