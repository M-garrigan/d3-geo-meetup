import React, { useEffect } from 'react';

import Prism from 'prismjs';

import '../../../node_modules/prismjs/themes/prism-okaidia.css';


export default props => {
  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);

  return (
    <div className="slide-grid-full">

      <div className="slide-title">One Dimension</div>

      <div className="slide-full-sub">
        <p className="geojson-dim-p">3: LineString</p>
        <pre className="geojson-dim-code"> 
            <code className="language-js">
{
`{
  "type": "LineString",
  // must contain 2 or more points 
  "coordinates": [ 
    [ 61.210817 , 35.650072 ], [ 62.230651 , 35.270664 ] 
  ]
}`.trim()
}
          </code>
        </pre>
        <p className="geojson-dim-p">4: MultiLineString</p>
        <p className="geojson-dim-p">[  [ LineString ] , [ LineString ] , ... ]</p>
      </div>
      
    </div>
  );
};