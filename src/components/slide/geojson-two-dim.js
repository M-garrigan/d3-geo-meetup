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
      >Two Dimensions</div>

      <div className="slide-full-sub">
    
        <pre style={{fontSize: props.width * 0.02}}> 
          <code className="language-js">
{
`{ // must contain 4 or more points with the first and last points are equivalent
  "type": "Polygon",
  "coordinates": [ 
    [ 61.210817 , 35.650072 ], [ 62.230651 , 35.270664 ],
    [ 62.984662 , 35.404041 ], [ 61.210817 , 35.650072 ] 
  ]
}`.trim()
}
          </code>
        </pre>

        <pre style={{fontSize: props.width * 0.02}}> 
          <code className="language-js">
{
`{ // [  [ Polygon ] , [ Polygon ] , [ Polygon ] , ... ]
  "type": "MultiPolygon",
  "coordinates": [ 
    [ [ 61.210817 , 35.650072 ], [ 62.230651 , 35.270664 ], [ 62.984662 , 35.404041 ], [ 61.210817 , 35.650072 ] ],
    [ [ 21.210817 , 07.650072 ], [ 22.230651 , 25.270664 ], [ 12.984662 , 25.404041 ], [ 21.210817 , 07.650072 ] ]
  ]
}`.trim()
}
          </code>
        </pre>
        
      </div>
      
    </div>
  );
};