import React from 'react'
import "./Demo.css"
import demoimg from "../../assets/demo.jpeg"
const Demo = () => {
  return (
    
        <div className="onpage">
      <img src={demoimg} alt="under work" />
      <p>
        Contact us:{" "}
        <a href="tel:+919090969619" className="phone-number">
          +919090969619
        </a>
      </p>
      <h2>
        Address: Tarapur, Laxminagar, Jajpur Road, Jajpur-755015
      </h2>
    </div>
   
  )
}

export default Demo
