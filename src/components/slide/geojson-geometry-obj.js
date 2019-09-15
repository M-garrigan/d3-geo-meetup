import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div className="slide-title">Geometry Object</div>

    <ul className="slide-full-sub">
      <li className="geojson-geometry-object-li">Must contain a property 'type' with a value that is one of the seven geometry types</li>
      <li className="geojson-geometry-object-li">Types: Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon, GeometryCollection</li>
      <li className="geojson-geometry-object-li">Must contain a property 'coordinates' with a value that is an array</li>
      <li className="geojson-geometry-object-li">Must Not have properties named 'geometry' or 'properties'</li>
      
    </ul>
    
  </div>
);