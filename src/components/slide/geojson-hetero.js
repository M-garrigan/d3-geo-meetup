import React, { useEffect } from 'react';

import Prism from 'prismjs';

import '../../../node_modules/prismjs/themes/prism-okaidia.css';


export default props => {
  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);

  return (
    <div className="slide-grid-full">

      <div className="slide-title">7: GeometryCollection</div>

      <div className="slide-full-sub">
        <p className="geojson-dim-p">Must have a property named 'geometries' with a value that is an array</p>
        <p className="geojson-dim-p">Each value in the array must be a geometry type and can be mixed</p>
        
        <pre className="geojson-dim-code"> 
            <code className="language-js">
{
`{
  "type": "GeometryCollection",
  "geometries": [
      { "type": "Point",
        "coordinates": [100.0, 0.0]
      },
      { "type": "LineString",
        "coordinates": [ [101.0, 0.0], [102.0, 1.0] ]
      }
  ]}`.trim()
}
          </code>
        </pre>
      </div>
    </div>
  );
};