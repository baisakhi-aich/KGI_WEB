import React, { useEffect, useState } from "react";
import "./Popup.css";
import poplogo from "../../assets/logo2.png"
const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup when the component is mounted
    setIsVisible(true);

    // Hide popup after 5 seconds (5000ms)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

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
