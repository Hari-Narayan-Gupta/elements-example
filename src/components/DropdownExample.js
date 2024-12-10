import React, { useState } from 'react';
import '../styles/DropdownExample.css';

const DropdownExample = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    phoneNumber: '',
    JobTitle: '',
    password: '',
    companySize: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation logic
    let error = '';
    if (name === 'firstName' || name === 'lastName') {
      if (!/^[a-zA-Z]*$/.test(value)) {
        error = 'Only alphabets are allowed.';
      }
    }
    if (name === 'phoneNumber') {
      if (!/^\d*$/.test(value)) {
        error = 'Only numbers are allowed.';
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    if (!error) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are any validation errors
    if (
      errors.firstName ||
      errors.lastName ||
      errors.phoneNumber ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber
    ) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    console.log('Form Data:', formData);
    setSubmitted(true); // Mark form as submitted
    setFormData({
      firstName: '',
      lastName: '',
      businessEmail: '',
      phoneNumber: '',
      JobTitle: '',
      password: '',
      companySize: '',
    }); // Reset form fields
    setErrors({}); // Clear errors
  };

  return (
    <>
      <div className="dropdown-example">
        <h3 className="form-heading">Get Your Free 14-Day Trial</h3>
        <p className="form-subhead">No Credit Cards, No Commitments.</p>

        {submitted && <p className="success-message">Sign up form has been successfully submitted!</p>}

        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="inputField__wrapper">
            <input
              type="text"
              id="firstName"
              className='signup-input'
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="inputField__wrapper">
            <input
              type="text"
              id="lastName"
              className='signup-input'
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>

          <div className="inputField__wrapper">
            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              value={formData.businessEmail}
              onChange={handleChange}
              placeholder="Enter your business email"
            />
          </div>

          <div className="inputField__wrapper">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </div>

          <div className="inputField__wrapper">
            <select
              id="JobTitle"
              className="select__select"
              name="JobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            >
              <option value="" disabled>
                job title (optional)
              </option>
              <option value="Consulting">Consulting</option>
              <option value="Customer Service">Customer Service</option>
              <option value="Engineering">Engineering</option>
              <option value="Executive Management">Executive Management</option>
              <option value="Finance/Legal/Administration">Finance/Legal/Administration</option>
              <option value="Help Desk">Help Desk</option>
              <option value="Human Resources">Human Resources</option>
              <option value="IT">IT</option>
              <option value="Marketing/PR">Marketing/PR</option>
              <option value="Operations">Operations</option>
              <option value="Professional Services">Professional Services</option>
              <option value="Sales/Business Development">Sales/Business Development</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Training">Training</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="inputField__wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <div className="inputField__wrapper">
            <label>Company Size</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="companySize"
                  value="1-9"
                  checked={formData.companySize === '1-9'}
                  onChange={handleChange}
                />
                1-9
              </label>
              <label>
                <input
                  type="radio"
                  name="companySize"
                  value="10-99"
                  checked={formData.companySize === '10-99'}
                  onChange={handleChange}
                />
                10-99
              </label>
              <label>
                <input
                  type="radio"
                  name="companySize"
                  value="100-499"
                  checked={formData.companySize === '100-499'}
                  onChange={handleChange}
                />
                100-499
              </label>
              <label>
                <input
                  type="radio"
                  name="companySize"
                  value="500-999"
                  checked={formData.companySize === '500-999'}
                  onChange={handleChange}
                />
                500-999
              </label>
            </div>
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default DropdownExample;
