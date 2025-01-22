import React from 'react';
import './Gallery.css';
import image1 from "../../assets/1img.jpg"
import image2 from "../../assets/2img.jpg"
import image3 from "../../assets/3img.jpg"
import image4 from "../../assets/4img.jpg"
import image5 from "../../assets/5img.jpg"
import image6 from "../../assets/6img.jpg"
import image7 from "../../assets/7img.jpg"
import image8 from "../../assets/8img.jpg"
import image9 from "../../assets/10img.jpg"
import image10 from "../../assets/11img.jpg"
import image11 from "../../assets/14img.jpg"
import image12 from "../../assets/13img.jpg"
import image13 from "../../assets/15img.jpg"
import image14 from "../../assets/16img.jpg"
import image15 from "../../assets/3img.jpg"
import image16 from "../../assets/3img.jpg"
const Gallery = () => {
  const images = [
    // Add your image URLs here
    image1, image2, image3, image4, 
    image5, image6,image7,image8, 
    image9,image10,image11, image12, 
    image13, image14, image15,image16
  ];

  return (
    <div className="gallery-container" id="gallery">
      <h1 className="event-title">Our Events</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery item ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
