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
        <div className='help-center-box'>
       <div className='form-headings'>
        <h1>HELP CENTER</h1>
        <p>Tel : 1234-567890<span>calyco.co</span></p>
        </div>
        <div className="form-row">
          <div className="form-column">
            <input
              type="text"
              id="firstName"
              className="custom-input"
              placeholder='First Name'
            />
          </div>
          <div className="form-column">
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
            <input
              type="email"
              id="email"
              className="custom-input"
              placeholder='Email'
            />
          </div>
          <div className="form-column">
            <input
              type="tel"
              id="phoneNumber"
              className="custom-input"
              placeholder='Phone Number'
            />
          </div>
        </div>
        <div className="form-row">
          <textarea
            id="message"
            rows="5"
            className="custom-textarea"
            placeholder='Message'
          ></textarea>
        </div>
        <span>hello</span>
        </div>
        <button type="submit" className="custom-button">Submit</button>
      </form>
    </div>
  );
}

export default HelpCenterForm;
