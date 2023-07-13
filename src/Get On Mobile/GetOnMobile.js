import React from "react";
import Boy_with_phone from "./images/Boy_with_phone.png";
import apple_logo from "./images/apple_logo.jpg";
import Google_Play_Store from "./images/Google_Play_Store.png";
import "./GetOnMobile.css";

const GetOnMobile = () => {
  return (
    <div className="main-div">
      <div className="sub-div1">
        <img src={Boy_with_phone} className="boypic" alt="Boy_with_phone logo" />
      </div>
      <div className="sub-div2">
        {/* <h1>Get On Mobile</h1> */}
        {/* <span><strong>Get On Mobile</strong></span> <br /> */}
        <p><strong className="title">Get On Mobile</strong></p>
        <img src={apple_logo} className="apple" alt="apple logo" />
        <img src={Google_Play_Store} className="google" alt="Google_Play_Store logo" />
        <p>
          Now get all the details of BHub on Google Play Store and on Apple App
          Store.
        </p>
      </div>
    </div>
  );
};

export default GetOnMobile;
