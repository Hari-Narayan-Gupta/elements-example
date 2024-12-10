import React from 'react';
import '../styles/Home.css';  

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to React Web Examples</h1>
      <p>
        This application provides interactive examples of various web elements and functionalities.
        Explore the left sidebar to navigate through different examples such as:
      </p>
      <ul>
        <li><strong>Drag and Drop:</strong> Learn how to implement drag-and-drop features using HTML5.</li>
        <li><strong>Dropdown:</strong> Create dynamic and user-friendly dropdown menus.</li>
        <li><strong>Dynamic Content:</strong> Generate content dynamically with JavaScript.</li>
        <li><strong>Forms:</strong> Learn about form elements like text areas, inputs, and select options.</li>
        <li><strong>File Upload:</strong> Understand how to handle file uploads in a web application.</li>
        <li><strong>Geolocation:</strong> Access user location using the browser's geolocation API.</li>
      </ul>
      <p>
        Each example demonstrates how to implement these features with practical code snippets. Feel free to click on any example in the sidebar to see a detailed implementation.
      </p>
      <p><em>Happy Learning!</em></p>
    </div>
  );
};

export default Home;
