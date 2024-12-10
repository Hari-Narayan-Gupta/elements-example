import React, { useState } from 'react';
import '../styles/AlertExample.css';

const AlertExample = () => {
  // State to hold the result message
  const [resultMessage, setResultMessage] = useState('');

  // Function to show an alert
  const showAlert = () => {
    alert("I am a JS Alert!");
    setResultMessage("You successfully clicked an alert");
  };

  // Function to show a confirm dialog
  const showConfirm = () => {
    const result = window.confirm("I am a JS Confirm!");
    if (result) {
      setResultMessage("You clicked OK!");
    } else {
      setResultMessage("You clicked Cancel!");
    }
  };

  // Function to show a prompt dialog
  const showPrompt = () => {
    const name = window.prompt("I am a JS prompt:", "Guest");
    if (name !== null) {
      setResultMessage("You entered: " + name + "!");
    } else {
      setResultMessage("You didn't enter anything.");
    }
  };

  return (
    <div className="alert-example">
      <h1>JavaScript Alerts</h1>
      <p>Here are some examples of different JavaScript alerts which can be troublesome for automation</p>
      
      {/* Buttons rendered within ul-li format */}
      <ul style={{ listStyleType: 'none', padding: 0 }} id="elements" className='alert-btn'>
        <li>
          <button onClick={showAlert} id="jsAlert" className='btn'>Click for JS Alert</button>
        </li>
        <li>
          <button onClick={showConfirm} id="jsConfirm" className='btn'>Click for JS Confirm</button>
        </li>
        <li>
          <button onClick={showPrompt} id="jsPrompt" className='btn'>Click for JS Prompt</button>
        </li>
      </ul>

      {/* Display result message below buttons */}
      <h2>Result:</h2>
      {resultMessage && <p className="result-message">{resultMessage}</p>}
    </div>
  );
};

export default AlertExample;
