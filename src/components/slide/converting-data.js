import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: props.width * 0.07}}
    >Converting Data</div>

    <ul 
      className="slide-full-bullets"
      style={{fontSize: props.width * 0.03}}
    >
      <li>npm install shapefile</li>
      <li>Shapefile to GeoJSON</li>
      <li>npm install topojson-server</li>
      <li>GeoJSON to TopoJSON</li>
      <li>npm install topojson-client</li>
      <li>TopoJSON to GeoJSON</li>
      <li>Merge TopoJSON</li>
      <li>Quantize TopoJSON Coordinates</li>
  
    </ul>

  </div>
);