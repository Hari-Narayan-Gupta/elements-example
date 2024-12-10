import React from 'react';
import '../styles/IframeExample.css'

const IframeExample = () => {
  return (
    <div className="iframe-example">
      <h1>Embedding an Iframe in React</h1>
      <p>Below is an embedded iframe example showing an external webpage:</p>

      {/* Iframe displaying an external website */}
      <iframe
        className="demo-frame"
        src="https://jqueryui.com/resources/demos/dialog/default.html"
        title="Example Website"
        width="100%"
        height="500px"
        style={{ border: '2px solid #ccc', borderRadius: '8px' }}
      >
        Your browser does not support iframes.
      </iframe>
    </div>
  );
};

export default IframeExample;
