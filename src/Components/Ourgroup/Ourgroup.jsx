import React from 'react';
import "./Ourgroup.css";
import kgi from "../../assets/logo2.png";

const Ourgroup = () => {
  return (
    <div className='allgrps' id='team'>
      <h1>Our Institutes</h1>
      <img src={kgi} alt='logo' />
      <div className='groupsname'>
        <a><h6>kalinga nagar polytechnic</h6></a>
        <a><h6>kalinga higher secondary school</h6></a>
        <a><h6>st xavier international school</h6></a>
        <a><h6>kalinga Academy</h6></a>
        <a><h6>kamaldevi institute of medical sciences</h6></a>
      </div>
      <span><i className="bi bi-geo-alt-fill"></i>jajpur, odisha</span>
    </div>
  );
};

export default Ourgroup;
