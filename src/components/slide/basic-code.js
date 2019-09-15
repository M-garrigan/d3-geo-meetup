import React, { useEffect } from 'react';
import Prism from 'prismjs';

import '../../../node_modules/prismjs/themes/prism-okaidia.css';


export default props => {
  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);

  return (
    <div className="slide-grid-full">
      <div className="slide-title">Basic Code</div>
        
        <pre className="basiccode-code"> 
          <code className="language-js">
{
`import { geoOrthographic, geoPath } from 'd3-geo';
import { select } from 'd3-selection';
import geoData from '../../utils/geoData.js';
const proj = geoOrthographic()
  .rotate([lambda, 0, 0.3])
  .fitExtent([[50,50], [props.width -50, props.height -50]], geoData);
const path = geoPath().projection(proj);
geoData.features.map( (item, idx) => (
  <path
    key={idx}
    ref={
      node => select(node).datum(item).attr('d', path) 
    }
  />
))`.trim()
}
          </code>
        </pre>
      
    </div>
  );
};