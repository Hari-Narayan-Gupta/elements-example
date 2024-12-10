import React from 'react';
import '../styles/NewWindowExample.css';

const NewWindowExample = () => {
  // Function to open a new tab and show message
  const openNewTab = () => {
    // Open a new tab with blank content
    const newTab = window.open('', '_blank'); // Opens in a new tab

    // Check if new tab was opened successfully
    if (newTab) {
      // HTML content for the new tab
      newTab.document.write(`
        <html>
          <head>
            <title>New Tab</title>
            <style>
              body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                font-family: Arial, sans-serif;
              }
              h1 {
                font-size: 24px;
                color: #333;
              }
              .close-button {
                padding: 8px 17px;
                font-size: 18px;
                cursor: pointer;
                background-color: #ff6347;
                color: white;
                border: none;
                border-radius: 8px;
                transition: background-color 0.3s ease, transform 0.2s ease;
              }
              .close-button:hover {
                background-color: #e55347;
                transform: scale(1.1);
              }
              .close-button:active {
                background-color: #e03232;
                transform: scale(1);
              }
            </style>
          </head>
          <body>
            <h1>Hello, Welcome on this new tab</h1>
            <br />
            <button class="close-button" onclick="window.close()">Close this Tab</button>
          </body>
        </html>
      `);

      // Close the document stream after writing
      newTab.document.close();
    }
  };

  return (
    <div className="new-window-example" id="content">
      <h1>Opening a new window</h1>
      <a href="/windows/new" target='_blank' onClick={openNewTab} className="open-window-button">Click Here</a>
    </div>
  );
};

export default NewWindowExample;
