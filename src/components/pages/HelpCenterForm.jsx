import React, { useState } from 'react';
import './Pages.css';
import faq_image from '../images/faq_image.png';
import { VscChromeClose } from 'react-icons/vsc';

function HelpCenterForm(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    // Validate form inputs
    const validationErrors = {};
    let formIsValid = true;
  
    if (!firstName.trim()) {
      validationErrors.firstName = true;
      formIsValid = false;
    }
  
    if (!lastName.trim()) {
      validationErrors.lastName = true;
      formIsValid = false;
    }
  
    if (!email.trim()) {
      validationErrors.email = true;
      formIsValid = false;
    } else if (!validateEmail(email)) {
      validationErrors.email = true;
      validationErrors.invalidEmail = true;
      formIsValid = false;
    }
  
    if (!phoneNumber.trim()) {
      validationErrors.phoneNumber = true;
      formIsValid = false;
    }
  
    if (!message.trim()) {
      validationErrors.message = true;
      formIsValid = false;
    }
  
    if (formIsValid) {
      // Handle successful form submission
      setFormSubmitted(true);
      setErrors({});
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
    } else {
      // Display validation errors
      setErrors(validationErrors);
    }
  };

 

  return (
    <div className="help-center-form-container">
      <div className="close-icon-container">
        <VscChromeClose onClick={props.onClick} />
      </div>
      <div className='image-container'>
        <img src={faq_image} alt="FAQ" />
      </div>
      <form className="help-center-form" onSubmit={handleSubmit}>
        <div className='help-center-box'>
          <div className='form-headings'>
            <h1>HELP CENTER</h1>
            <p>Tel: 1234-567890<span>calyco.co</span></p>
          </div>
          <div className="form-row">
            <div className="form-column">
              <input
                type="text"
                id="firstName"
                className={`custom-input ${errors.firstName ? 'error' : ''}`}
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-column">
              <input
                type="text"
                id="lastName"
                className={`custom-input ${errors.lastName ? 'error' : ''}`}
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
            <input
  id="email"
  className={`custom-input ${errors.email ? 'error' : ''}`}
  placeholder='Email'
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  formNoValidate
/>
            </div>
            <div className="form-column">
              <input
                type="tel"
                id="phoneNumber"
                className={`custom-input ${errors.phoneNumber ? 'error' : ''}`}
                placeholder='Phone Number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <textarea
              id="message"
              rows="5"
              className={`custom-textarea ${errors.message ? 'error' : ''}`}
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <span className='response'>
            {formSubmitted && Object.keys(errors).length === 0 && (
              <span className="success-message">Thank you for submitting!</span>
            )}
            {errors.invalidEmail && (
              <span className="error-message">*Incorrect format</span>
            )}
            {!errors.invalidEmail && Object.keys(errors).length > 0 && (
              <span className="error-message">*Please fill in all fields</span>
            )}
          </span>



        </div>
        <button
  type="submit"
  className="custom-button"
  // onClick={formSubmitted ? props.onClick : null}
>
  Submit
</button>
      </form>
    </div>
  );
}

export default HelpCenterForm;
