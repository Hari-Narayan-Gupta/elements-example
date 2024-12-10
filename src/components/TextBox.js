import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/TextBox.css';

const TextBox = () => {
    const { type } = useParams();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendLink = () => {
        if (email) {
            setMessage(`A forget link has been sent to your email: ${email}`);
        } else {
            setMessage('Please enter a valid email address.');
        }
    };

    return (
        <div className="example-page">
            {/* <h1>{type.replace(/-/g, ' ')}</h1> */}
          
                <div className="text-box-example">
                    <h2 className='forgot-heading'>Forgot Password</h2>
                    {/* <p>Enter your email below to receive a password reset link:</p> */}
                    E-mail
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        // placeholder="Enter your email"
                        className="email-input"
                    />
                    <button onClick={handleSendLink} className="send-button" id='form_submit'>Retrieve password</button>
                    {message && <p className="message">{message}</p>}
                </div>
            
        </div>
    );
};

export default TextBox;
