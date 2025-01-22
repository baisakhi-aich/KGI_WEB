import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios'; 
const Contact = () => {
  // const [formData, setFormData] = useState({
  //   fullName: '',
  //   email: '',
  //   phoneNumber: '',
  //   query: '',
  // });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    // console.log(formData);
    e.preventDefault();
    console.log(name, email,number,query);
    const data = {
      Name: name,
      Email: email,
      Number:number,
      Query:query
  }

  console.log(data, '--------------------------------------->');
  

  axios.post('https://api.sheetbest.com/sheets/cfd54ac4-f2f6-484a-b45b-c37c5ab84e7d', data).then((response) => {
      console.log(response);
      setName('')
      setEmail('')
      setNumber('')
    setQuery('')
  })
    // const scriptURL = 'https://docs.google.com/spreadsheets/d/192jkrpLU52FKvjBFcvPukXuq6vmp8_0qGgrX55sVxE8/edit?usp=sharing'; // Replace with your Web App URL

    // try {
    //   const response = await fetch(scriptURL, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });

    //   const result = await response.json();
    //   if (result.status === 'success') {
    //     alert('Message sent successfully!');
    //     setFormData({ fullName: '', email: '', phoneNumber: '', query: '' });
    //   } else {
    //     alert('Failed to send message.');
    //   }
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   alert('An error occurred. Please try again.');
    // }
  };

  return (
    <div className="contact-us" id="contact">
      <div className="contact-details">
        <h2>Get in Touch</h2>
        <p>Have a question or just want to say hi? We'd love to hear from you.</p>
        <div className="details">
          <div>
            <i className="bi bi-house-door-fill"></i>
            <p>Tarapur, Laxminagar, Jajpur Road, Jajpur-755015</p>
          </div>
          <div>
            <a href="tel:+919090969619">
              <i className="bi bi-telephone-fill"></i>
              +919090969619
            </a>
          </div>
          <div>
            <a href="mailto:info@kalingagroup.ac">
              <i className="bi bi-envelope-at"></i>
              info@kalingagroup.ac
            </a>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send Message</h2>
        <form onSubmit={handleSubmit} id='submit'>
          <input
            type="text"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="number"
            name="phoneNumber"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
            required
          />
          <textarea
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Your Query..."
            rows="5"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 