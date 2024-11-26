import React from 'react';
import "./Video.css";
import vdo from "../../assets/vdo.mp4";

const Video = () => {
  return (
    <div className='vdopage'>
      <video className="vdo-player" src={vdo} autoPlay loop muted></video>
      <div className='content'> 
        <h6>wellcome..</h6>
        <p>“Try holding yourself accountable to yourself. If you had to give yourself a daily, weekly, 
          or monthly report, would you be proud to talk about what you had done, 
          or would you need to be prettying up things, bullshitting, 
          or lying to keep your job?</p>
      </div>
    </div>
  );
};

export default Video;
