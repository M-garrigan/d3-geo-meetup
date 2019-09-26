import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div className="slide-title">Data Sources</div>

    <ul className="slide-full-sub">
      <a 
        href="https://www.census.gov/programs-surveys/geography.html"
        className="data-src-a"
      >
        <li >US Census Bureau</li>
      </a>
      <a 
        href="https://www.naturalearthdata.com"
        className="data-src-a"
      >
        <li >Natural Earth</li>
      </a>
      <a 
        href="https://github.com/topojson/world-atlas"
        className="data-src-a"
      >
        <li >World Atlas</li>
      </a>
      <a 
        href="https://github.com/topojson/us-atlas"
        className="data-src-a"
      >
        <li >US Atlas</li>
      </a>
    </ul>
    
  </div>
);