import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

import "./date.css";

{
  /* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */
}

const date = () => {
  const [dateType, setdateType] = useState("text");
  const HandelInput = (event) => {
    setdateType("date");
    console.log("Clicked on Date icon");
    <input data-provide={ReactDatePicker} />;
    // event.target.value = <input type='date' />
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <h1>Date icon test</h1>
      <form class="inline">
        <div class="input-icons">
          {/*onClick={faCalendar} */}
          <div className="date_div">
            <input className="date-input" type={dateType} placeholder="From" />
            <i
              className="fa fa-calendar icon"
              type="text"
              onClick={HandelInput}
            />
          </div>{" "}
          <div className="date_div">
            <input className="date-input" type={dateType} placeholder="To" />
            <i
              className="fa fa-calendar icon"
              type="text"
              onClick={HandelInput}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default date;
