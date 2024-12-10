import React, { useState } from 'react';
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleClear = () => {
        setEmail('');
    };

    const handleSubmit = () => {
        if (!email) {
            alert("Please enter your email address or mobile number.");
        } else {
            alert(`Password reset link has been sent to: ${email}`);
        }
    };

    return (
        <div className="forgot-password-container">
            <h2 className="uiHeaderTitle" aria-hidden="true">Find Your Account</h2>
            <div className="_9nq2 marginBottom16px">
                Please enter your email address or mobile number to search for your account.
            </div>
            <input
                type="text"
                className="inputtext _9o1w"
                id="identify_email"
                name="email"
                placeholder="Email address or mobile number"
                autoFocus
                aria-label="Email address or mobile number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className="button-container">
                <button onClick={handleClear} className="clear-button">Clear</button>
                <button onClick={handleSubmit} className="submit-button">Submit</button>
            </div>
        </div>
    );
};

export default ForgotPassword;
