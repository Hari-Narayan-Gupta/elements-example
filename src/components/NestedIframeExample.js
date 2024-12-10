import React from 'react';
import '../styles/NestedIframeExample.css';

const NestedIframeExample = () => {
  const leftIframeContent = "<html><body style='display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;'><h4>Left</h4></body></html>";
  const middleIframeContent = `
  <html>
    <head>
      <style>
        #content {
          display: block;
          margin-block-start: 1.33em;
          margin-block-end: 1.33em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          font-weight: bold;
          unicode-bidi: isolate;
        }
      </style>
    </head>
    <body style='display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;'>
      <div id='content'>Middle</div>
    </body>
  </html>`;
  const rightIframeContent = "<html><body style='display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;'><h4>Right</h4></body></html>";
  const bottomIframeContent = "<html><body style='display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;'><h4>Bottom</h4></body></html>";

  return (
    <div className="nested-iframe-example">
      <div className="top-iframes">
        <iframe srcDoc={leftIframeContent} name="frame-left" title="Iframe 1 (Left)" className="iframe left" />
        <iframe srcDoc={middleIframeContent} name="frame-middle" title="Iframe 2 (Middle)" className="iframe middle" />
        <iframe srcDoc={rightIframeContent} name="frame-right" title="Iframe 3 (Right)" className="iframe right" />
      </div>
      <div className="bottom-iframe">
        <iframe srcDoc={bottomIframeContent} name="frame-bottom" title="Iframe 4 (Bottom)" className="iframe full-width" />
      </div>
    </div>
  );
};

export default NestedIframeExample;
