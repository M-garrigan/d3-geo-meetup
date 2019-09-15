import React, { useEffect } from 'react';

import Prism from 'prismjs';

import '../../../node_modules/prismjs/themes/prism-okaidia.css';


export default props => {
  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);

  return (
    <div className="slide-grid-full">

      <div className="slide-title">Zero Dimension</div>

      <div className="slide-full-sub">
        <p className="geojson-dim-p">1: Point</p>
        <pre className="geojson-dim-code"> 
            <code className="language-js">
{
`{
  "type": "Point",
  "coordinates": [ 61.210817 , 35.650072 ]  // [ longitude, latitude ]
}`.trim()
}
          </code>
        </pre>
        <p className="geojson-dim-p">2: MultiPoint</p>
        <p className="geojson-dim-p">[  [ Point ] , [ Point ] , [ Point ] , ... ]</p>
      </div>
      
    </div>
  );
};