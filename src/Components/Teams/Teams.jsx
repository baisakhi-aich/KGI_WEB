import React from "react";
import "./Teams.css";
import demoman1 from "../../assets/alexsir.jpg";
import demoman2 from "../../assets/ranjansir.jpg";

const Teams = () => {
  return (
    <div className="quote-container" id="groups">
      <h2>Our Team</h2>
      
      {/* Chairman Section */}
      <div className="container">
        <div className="quote-image-wrapper">
          <img
            src={demoman1}
            alt="Chairman Alexzandar Das"
            className="quote-image"
          />
        </div>
        <div className="quote-text">
          <blockquote>
        Chairman’s Message Er. Alexzandar Das, Chairman, KGI What began as a humble initiative—a small computer institute—has grown into a vibrant conglomerate of institutions renowned for excellence in education. 
        The journey of Kalinga Group of Institutions (KGI) stands as a testament to the power of vision,
         dedication, and an unwavering commitment to transforming lives through education. 
         At the heart of this growth is a mission: to uplift rural communities by providing accessible,
          high-quality technical education. With decades of relentless effort, 
          KGI has empowered countless young minds from underprivileged backgrounds, 
          equipping them with the skills and confidence needed to thrive in a competitive world.
           My inspiration stems from a deep-rooted belief that education is the most powerful tool for change.
            By establishing institutions that bridge the gap between rural talent and industrial demand, 
            we aim to create opportunities where none existed before. KGI is not just about academics; 
            it is about nurturing innovators, leaders, and change-makers who contribute meaningfully to society. 
            As we continue our journey, I invite you to be a part of this mission. 
            Together,we can make a lasting impact, fostering a brighter and more equitable future. 
            Warm regards, Chairman, Kalinga Group of Institutions
            </blockquote>
          <p>— Er. Alexzandar Das, Director (KGI)</p>
        </div>
      </div>

      {/* Chief Advisor Section */}
      <div className="container">
        <div className="quote-image-wrapper">
          <img
            src={demoman2}
            alt="Chief Advisor Ranjan Kumar Das"
            className="quote-image"
          />
        </div>
        <div className="quote-text">
       <blockquote>
       Message from the Chief Advisor, KGI Shri Ranjan Kumar Das, IAS (Retd) It is an immense privilege to be associated with Kalinga Group of Insitution (KGI), 
       a distinguished conglomerate of educational institutions that has been tirelessly striving for the upliftment of rural communities through valued education and innovative initiatives. 
       KGI’s commitment to excellence is reflected in its diverse range of programs, which extend beyond education to encompass impactful social service endeavours. 
       The institute’s holistic approach to nurturing talent and empowering underprivileged sections of society has been truly commendable. 
       I am proud to be a part of this transformative journey and confident that KGI will continue to set new benchmarks in education and societal development, contributing significantly to a brighter future for all. 
       Chief Advisor, KGI
       </blockquote>
          <p>— Shri Ranjan Kumar Das, Chief Advisor (KGI)</p>
        </div>
      </div>
    </div>
  );
};

export default Teams;

