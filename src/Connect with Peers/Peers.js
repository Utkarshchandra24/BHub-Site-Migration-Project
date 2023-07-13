import React from 'react'
import "./Peers.css"
import peers from "./Connect with Peers.png"
import user1 from "./user 1.jpg"
import user2 from "./user 2.jpg"
import user3 from "./user 3.png"
import user4 from "./user 4.png"

const Peers = () => {
  return (
    <div className="main-div">
        <div className="left-div">
            <div className="left-top">
                <h1>Connect with Peers</h1>
                <button className="btn">View All</button>
            </div>
            <div className="left-bottom">
               <img src={user1} className="user" alt="user1" />
               <img src={user2} className="user" alt="user2" />
               <img src={user3} className="user" alt="user3" />
               <img src={user4} className="user" alt="user4" />
            </div>
        </div>
        <div className="right-div">
            <img src={peers} alt="peers" className="peers-pic" />
        </div>

    </div>
  )
}

export default Peers