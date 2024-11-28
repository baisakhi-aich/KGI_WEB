import React from 'react'
import "./Teams.css"
import demoman1 from "../../assets/man1.jpg"
import demoman2 from "../../assets/man2.jpeg"
const Teams = () => {
  return (
    
        <div className="quote-container">
              <h2 >Our Teams</h2>
          <div className='cantainer1'>
          <div className="quote-image-wrapper">
            <img
              src={demoman1} // Replace this with your image URL
              alt="Person holding books"
              className="quote-image"
            />
          </div>
          <div className="quote-text">
            <blockquote>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </blockquote>
            <p>— Author's Name</p>
          </div>
          </div>
          {/*  */}
          <div className='container2'>
          <div className="quote-text">
            <blockquote>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </blockquote>
            <p>— Author's Name</p>
          </div>
          <div className="quote-image-wrapper">
            <img
              src={demoman2} // Replace this with your image URL
              alt="Person holding books"
              className="quote-image"
            />
          </div>
          </div>
        
        </div>
      );
    };


export default Teams
