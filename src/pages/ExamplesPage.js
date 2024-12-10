// src/components/ExamplesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ExamplesPage.css';

const examples = [
  "A/B Testing", "Add/Remove Elements", "Basic Auth (user and pass: admin)", "Broken Images",
  "Challenging DOM", "Checkboxes", "Context Menu", "Digest Authentication (user and pass: admin)",
  "Disappearing Elements", "Drag and Drop", "Dropdown", "Dynamic Content", "Dynamic Controls",
  "Dynamic Loading", "Entry Ad", "Exit Intent", "File Download", "File Upload", "Floating Menu",
  "Forgot Password", "Form Authentication", "Frames", "Geolocation", "Horizontal Slider", "Hovers",
  "Infinite Scroll", "Inputs", "JQuery UI Menus", "JavaScript Alerts", "JavaScript onload event error",
  "Key Presses", "Large & Deep DOM", "Multiple Windows", "Nested Frames", "Notification Messages",
  "Redirect Link", "Secure File Download", "Shadow DOM", "Shifting Content", "Slow Resources",
  "Sortable Data Tables", "Status Codes", "Typos", "WYSIWYG Editor"
];

const ExamplesPage = () => {
  return (
    <div className="examples-container">
      <h1>Welcome to the Internet</h1>
      <h2>Available Examples</h2>
      <ul className="examples-list">
        {examples.map((example, index) => (
          <li key={index}>
            <Link to={`/${example.toLowerCase().replace(/ /g, '-')}`}>
              {example}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamplesPage;
