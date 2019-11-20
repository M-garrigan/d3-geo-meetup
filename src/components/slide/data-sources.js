import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: props.width * 0.07}}
    >Data Sources</div>

    <ul 
      className="slide-full-bullets"
      style={{fontSize: props.width * 0.03}}
    >
      <a 
        href="https://www.census.gov/programs-surveys/geography.html"
        className="link-pink"
      >
        <li >US Census Bureau</li>
      </a>
      <a 
        href="https://www.naturalearthdata.com"
        className="link-pink"
      >
        <li >Natural Earth</li>
      </a>
      <a 
        href="https://github.com/topojson/world-atlas"
        className="link-pink"
      >
        <li >World Atlas</li>
      </a>
      <a 
        href="https://github.com/topojson/us-atlas"
        className="link-pink"
      >
        <li >US Atlas</li>
      </a>
    </ul>
    
  </div>
);