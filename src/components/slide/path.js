import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div className="slide-title">Paths</div>

    <div className="path-image"></div>

    <div className="path-input-geo">
      <p>geometry</p>
      <p>object</p>
    </div>
    <div className="path-input-feature">
      <p>feature</p>
      <p>object</p>
    </div>
    
    <div className="path-output-svg">
      <p>svg path</p>
      <p>data string</p>
    </div>
    <div className="path-output-canvas">
      <p>renders path</p>
      <p>to canvas</p>
    </div>

  </div>
);