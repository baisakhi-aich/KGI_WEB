import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
  
        <div className="contact-us">
          <div className="contact-details">
            <h2>Get in Touch </h2>
            <p>
            Have a question or just want to say hi? We'd love to hear from you.
            </p>
            <div className="details">
              <div>
              <i class="bi bi-house-door-fill"></i>
                <p>Tarapur,Laxminagar,Jajpur Road,Jajpur-755015</p>
              </div>
              <div>
              <i class="bi bi-telephone-fill"></i>
                <p>+919090969619</p>
              </div>
              <div>
              <i class="bi bi-envelope-at"></i>
                <p>ntamerwael@mfano.ga</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h2>Send Message</h2>
            <form>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type='number' placeholder='phone number'></input>
              <textarea placeholder="Your Query..." rows="5"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      );
    };
    


export default Contact
