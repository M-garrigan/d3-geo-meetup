import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div className="slide-title">Canvas vs SVG</div>

    <div className="canvasSVG-canvas-group canvasSVG-group">
      <h3 className="canvasSVG-canvas-title">&#60;canvas&gt;</h3>
      <p>Raster</p>
      <p>Collection of Pixels</p>
      <p>Stateless</p>
      <p>More Performant</p>
    </div>

    <div className="canvasSVG-svg-group canvasSVG-group">
      <h3 className="canvasSVG-svg-title">&#60;svg&gt;</h3>
      <p>Vector</p>
      <p>Collection of Elements</p>
      <p>Statefull</p>
      <p>Less Performant</p>
    </div>
    
  </div>
);