import React from 'react';
import event1 from "../../assets/1.jpeg.jpg";
import event2 from "../../assets/2.jpeg.jpg";
import event3 from "../../assets/3.jpeg.jpg";
import event4 from "../../assets/4.jpeg.jpg";
import event5 from "../../assets/5.jpeg.jpg";
import event6 from "../../assets/6.jpeg.jpg";
import event7 from "../../assets/7.jpeg.jpg";
import './Video.css';  // Import the CSS file for styling

const Video = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={event1} className="d-block w-100 custom-height" alt="Event 1" />
        </div>
        <div className="carousel-item">
          <img src={event2} className="d-block w-100 custom-height" alt="Event 2" />
        </div>
        <div className="carousel-item">
          <img src={event3} className="d-block w-100 custom-height" alt="Event 3" />
        </div>
        <div className="carousel-item">
          <img src={event4} className="d-block w-100 custom-height" alt="Event 4" />
        </div>
        <div className="carousel-item">
          <img src={event5} className="d-block w-100 custom-height" alt="Event 5" />
        </div>
        <div className="carousel-item">
          <img src={event6} className="d-block w-100 custom-height" alt="Event 6" />
        </div>
        <div className="carousel-item">
          <img src={event7} className="d-block w-100 custom-height" alt="Event 7" />
        </div>
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

