import React from 'react';
import "./Ourgroup.css";
import kgi from "../../assets/logo2.png";

const Ourgroup = () => {
  return (
    <div className='allgrps' id='team'>
      <h1>Our Institutions</h1>
      <img src={kgi} alt='logo' className='logo'/>
      <div className='groupsname'>
        <a href='https://knpjajpur.org/'><h6>Kalinga Nagar Polytechnic</h6></a>
        <a href='https://g.co/kgs/5L9dyx2'><h6>Kalinga Higher Secondary School</h6></a>
        <a href='https://sxisjajpur.org/'><h6>St Xavier International School</h6></a>
        <a><h6>Kalinga Academy</h6></a>
        <a><h6>Kamaldevi Institute of Medical Sciences</h6></a>
      </div>
      <span>
        <i className="bi bi-geo-alt-fill"></i> Jajpur, Odisha
      </span>
    </div>
  );
};

export default Ourgroup;
