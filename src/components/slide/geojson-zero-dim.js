import React, { useEffect } from 'react';

import Prism from 'prismjs';

import '../../../node_modules/prismjs/themes/prism-okaidia.css';


export default props => {
  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);

  return (
    <div className="slide-grid-full">

      <div 
        className="slide-title"
        style={{fontSize: props.width * 0.07}}
      >Zero Dimension</div>

      <div className="slide-full-bullets">
        <pre 
          className="geojson-dim-code"
          style={{fontSize: props.width * 0.02}}
        > 
          <code className="language-js">
{
`// - Point -
{
  "type": "Point",
  "coordinates": [ 61.210817 , 35.650072 ]  // [ longitude, latitude ]
}`.trim()
}
          </code>
        </pre>

        <pre 
          className="geojson-dim-code"
          style={{fontSize: props.width * 0.02}}
        > 
          <code className="language-js">
{
`// - MultiPoint -
{
  "type": "MultiPoint",
  // [  [ Point ] , [ Point ] , [ Point ] , ... ]
  "coordinates": [
    [ 61.210817 , 35.650072 ], [ 31.240837 , 31.404072 ] 
  ]
}`.trim()
}
          </code>
        </pre>
       
      </div>
      
    </div>
  );
};