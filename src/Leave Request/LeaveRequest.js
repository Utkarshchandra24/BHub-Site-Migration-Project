//using boatstrap in index.js
/*  (using this in index.js)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
*/



import React, { useState } from 'react'
import "./LeaveRequest.css"


const LeaveRequest = () => {
    
    const handelInput=(event)=>{
      console.log(event.target.value);
      <input type='date' /> 
    }

    return (
      <div className='main-div'>
          <h5>Leave request</h5>
          <br />
          <div className="sub-div1">
            <div className="sub-div11">
              <select className="Leave-type">
                  <option value=' '>Leave Type</option>
                  <option value='Cold'>Restricted Holiday</option>
                  <option value='Fever'>Earned Leave</option>
                  <option value='Maternity Leave'>Maternity Leave</option>
              </select>
            </div>
            <div className='sub-div12'>
              <br />
              <textarea placeholder='Reason' rows="3" cols="56" />
              {/* <input type='text' placeholder='Reason' className="input-text"/> */}
              <br />
              <span className='span-text'>30 Characters remaining (30 maximum)</span>
            </div>
            <br />
            <div className="sub-div13">
              <input type='text' value="" placeholder='From' onClick={handelInput} />
              <input className="date-input1" type="date"  />
              {/* <input type='date' /> */}
              {" "}
              <input type='text' value="" placeholder='To' />
              <input className="date-input2" type="date"  />
              {/* <input type='date' /> */}
            </div>
            <br />
            <div className="sub-div14">
            <select className="Leave-for">
                  <option value=' '>Leave For</option>
                  <option value='Genral Manager'>General Manager</option>
                  <option value='Manager'>Manger</option>
                  <option value='HR'>HR</option>
                  <option value='Employee'>Employee</option>
                  <option value='Intern'>Intern</option>
              </select>
            </div>
            <br />
          <div className="sub-div2">
              <p><strong>Available Leaves : 10 </strong></p>
              <p><strong>Requested Leave Days : 2 </strong></p>
              <p><strong>Reporting Manager : Kishore LM </strong></p>
          </div>
          <br />
          <div className="sub-div3">
              <button className="btn1">Submit</button>
              {" "}
              <button className="btn2">Cancel</button>
          </div>
        </div>
      </div>
    )
}

export default LeaveRequest