import React, { useEffect, useState } from "react";
import "./Popup.css";
import poplogo from "../../assets/logo2.png"; // Replace with the correct path to your logo

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup as soon as the component mounts
    setIsVisible(true);

    // Hide popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    // 
    // Clean up the timer when the component unmounts or updates
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures it runs only once when the component mounts..
    return (
    <>
      {isVisible && (
        <div className="popup-overlay">
          <div className="popup-box">
            <img
              src={poplogo} // Replace with your logo path
              alt="Popup Logo"
              className="popup-logo"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Popup;
