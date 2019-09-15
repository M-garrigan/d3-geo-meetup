import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div className="slide-title">GeoJSON Overview</div>

    <ul className="slide-full-sub">
      <li className="geojson-overview-li">A data structure to encode geography</li>
      <li className="geojson-overview-li">Must be valid JSON and contain a single object</li>
      <li className="geojson-overview-li">Can accept any number of foreign members</li>
      <li className="geojson-overview-li">A coordinate with 6 decimal places has accuracy of 10 centimeters</li>
      <li className="geojson-overview-li">Geography that crosses the antimeridian line should be split into two geometry types</li>
      
      <li className="geojson-overview-li">
        <a href="https://geojson.org/">geojson.org</a>
        -or-
        <a href="https://tools.ietf.org/html/rfc7946#section-6.1">RFC 7946</a>
      </li>
    </ul>

  </div>
);