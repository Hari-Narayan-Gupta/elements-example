import React, { useState } from 'react';
import '../styles/DoubleClickExample.css';

const DoubleClickExample = () => {
  // State to hold the message
  const [message, setMessage] = useState('');

  // Function to handle double-click
  const myFunction = () => {
    setMessage('You double-clicked the button!');
  };

  return (
    <div className="double-click-example">
      <h1>Double Click Example</h1>
      <button onDoubleClick={myFunction} className="double-click-button">
        Double Click Me!
      </button>
      {message && <p className="message" id="demo">{message}</p>}
    </div>
  );
};

export default DoubleClickExample;
