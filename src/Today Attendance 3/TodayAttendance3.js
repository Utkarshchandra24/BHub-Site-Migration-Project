import React, { useState } from 'react'
import "./TodayAttendance3.css"

const TodayAttendance3 = () => {
    const [currentPage,setCurrentPage] = useState(1);

  return (
    <div className="main-div">
        <div className="sub-div1">
            <h3>Today Attendance</h3>
            <div className="dots-container">
          <div
            className={`dot ${currentPage === 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(1)}
          />
          <div
            className={`dot ${currentPage === 2 ? 'active' : ''}`}
            onClick={() => setCurrentPage(2)}
          />
        </div>
        </div>
        <div className="sub-div2">
            {currentPage === 1 && (
            <div className="sub-div21">
                <h2>IN TIME</h2>
                <h1>09:20</h1>
            </div>
            )}
             {currentPage === 2 && (
            <div className="sub-div22">
                <h2>OUT TIME</h2>
                <h1>20:20</h1>
            </div>
             )}
        </div>
        <div className="sub-div3">
      </div>
        <br />
        <div className="sub-div3">
            <p>Check Attendance</p>
        </div>
        <br />
    </div>
  )
}

export default TodayAttendance3