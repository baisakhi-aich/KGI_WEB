import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "./Video.css";

import event0 from "../../assets/new10.jpg";
import event1 from "../../assets/new1.jpg";
import event2 from "../../assets/new2.jpg";
import event3 from "../../assets/new3.jpg";
import event4 from "../../assets/new4.jpg";
import event5 from "../../assets/new5.jpg";
import event6 from "../../assets/new9.jpg";
import event7 from "../../assets/7.jpeg.jpg";
import event8 from "../../assets/new5.jpg";

const Video = () => {
  const images = [event1, event0, event2, event3, event4, event5, event6, event7, event8];

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={img} className="d-block w-100 custom-height" alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Video;


