import React from 'react';
import './Pages.css';
import faq_image from '../images/faq_image.png'

function HelpCenterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="help-center-form-container">
      {/* <h2>Help Center</h2> */}
      <div className='image-container'>
        <img src={faq_image}/>
      </div>
      <form className="help-center-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="firstName" className="custom-label"></label>
            <input
              type="text"
              id="firstName"
              className="custom-input"
              placeholder='First Name'
            />
          </div>
          <div className="form-column">
            <label htmlFor="lastName" className="custom-label"></label>
            <input
              type="text"
              id="lastName"
              className="custom-input"
              placeholder='Last Name'
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="email" className="custom-label"></label>
            <input
              type="email"
              id="email"
              className="custom-input"
              placeholder='Email'
            />
          </div>
          <div className="form-column">
            <label htmlFor="phoneNumber" className="custom-label"></label>
            <input
              type="tel"
              id="phoneNumber"
              className="custom-input"
              placeholder='Phone Number'
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="message" className="custom-label"></label>
          <textarea
            id="message"
            rows="5"
            className="custom-textarea"
            placeholder='Message'
          ></textarea>
        </div>
        <button type="submit" className="custom-button">Submit</button>
      </form>
    </div>
  );
}

export default HelpCenterForm;
