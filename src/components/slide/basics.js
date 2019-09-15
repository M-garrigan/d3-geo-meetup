import React, { useEffect } from 'react';
import Prism from 'prismjs';

import '../../../node_modules/prismjs/themes/prism-okaidia.css';


export default props => {
  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);
  return (
    <div className="slide-grid-full">
      <div className="slide-title">Basics</div>
      <div className="basics-geoJSON basics-group">
        <div className="basics-group-title">geoJSON</div>
        <pre className="basics-code"> 
          <code className="language-js">
{
`{
  "type":"FeatureCollection",
  "features":[ 
    {
    "type":"Feature",
    "properties":{
      "name":"Afghanistan"
    },
    "geometry":{
      "type":"Polygon",
      "coordinates":[
        [
          [61.210817,35.650072],
          [62.230651,35.270664],
          [62.984662,35.404041],
          [63.193538,35.857166]
        ]
        ]
      },
    "id":"AFG"
    }`.trim()
}
          </code>
        </pre>
      </div>
      <div className="basics-projections basics-group">
        <div className="basics-group-title">Projection</div>
        <div className="basics-projection-card"></div>
      </div>
      <div className="basics-geoPath basics-group">
        <div className="basics-group-title">geoPath</div>
        <div className="basics-geopath-card"></div>
      </div>
      
    </div>
  );
};