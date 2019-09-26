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
      >One Dimension</div>

      <div className="slide-full-sub">
      
        <pre style={{fontSize: props.width * 0.02}}> 
            <code className="language-js">
{
`{ // must contain 2 or more points 
  "type": "LineString",
  "coordinates": [ 
    [ 61.210817 , 35.650072 ], [ 62.230651 , 35.270664 ] 
  ]
}`.trim()
}
          </code>
        </pre>

        <pre style={{fontSize: props.width * 0.02}}> 
          <code className="language-js">
{
`{ // [  [ LineString ] , [ LineString ] , ... ]
  "type": "MultiLineString",
  "coordinates": [ 
    [ [ 61.210817 , 35.650072 ], [ 62.230651 , 35.270664 ] ],
    [ [ 21.493937 , 32.009322 ], [ 82.454651 , 15.432264 ] ]
  ]
}`.trim()
}
          </code>
        </pre>
        
      </div>
      
    </div>
  );
};