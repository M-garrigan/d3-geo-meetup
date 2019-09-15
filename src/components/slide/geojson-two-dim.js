import React, { useEffect } from 'react';

import Prism from 'prismjs';

import '../../../node_modules/prismjs/themes/prism-okaidia.css';


export default props => {
  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);

  return (
    <div className="slide-grid-full">

      <div className="slide-title">Two Dimensions</div>

      <div className="slide-full-sub">
        <p className="geojson-dim-p">5: Polygon</p>
        <pre className="geojson-dim-code"> 
            <code className="language-js">
{
`{
  "type": "Polygon",
  // must contain 4 or more points with the first and last points are equivalent
  "coordinates": [ 
    [ 61.210817 , 35.650072 ], [ 62.230651 , 35.270664 ],
    [ 62.984662 , 35.404041 ], [ 61.210817 , 35.650072 ] 
  ]
}`.trim()
}
          </code>
        </pre>
        <p className="geojson-dim-p">6: MultiPolygon</p>
        <p className="geojson-dim-p">[  [ Polygon ] , [ Polygon ] , [ Polygon ] , ... ]</p>
      </div>
      
    </div>
  );
};