import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div className="slide-title">TopoJSON</div>

    <ul className="slide-full-sub">
      <li className="topojson-li">TopoJSON is an extension of GeoJSON that encodes topology</li>
      <li className="topojson-li">TopoJSON files are stitched together from shared line segments called arcs</li>
      <li className="topojson-li">Can reduce a GeoJSON file by 80% before simplification</li>
      <li className="topojson-li">TopoJSON cannot be used directly, it must be converted to GeoJSON</li>
      <li className="topojson-li">TopoJSON files are stitched together from shared line segments called arcs</li>
      
      <li className="topojson-li">
        <a href="https://github.com/topojson/topojson-specification">TopoJSON Spec</a>
      </li>
    </ul>

  </div>
);