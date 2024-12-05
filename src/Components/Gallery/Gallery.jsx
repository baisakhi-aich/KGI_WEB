import React from 'react'
import demogallery from "../../assets/demogallery2.jpeg"
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className='main-gallery' id='gallery'>
      <h1>Gallery</h1>
      <div className='gallery-div'>
        <img src={demogallery}></img>
      </div>
    </div>
  )
}

export default Gallery




