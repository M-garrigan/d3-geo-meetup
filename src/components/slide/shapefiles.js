import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div className="slide-title">Shapefiles</div>

    <ul className="slide-full-sub">
      <li className="shapefiles-li">The shapefile format is a digital vector storage format for storing geometric location</li>
      <li className="shapefiles-li">Does not store topological information</li>
      <li className="shapefiles-li">three mandatory files have filename extensions .shp, .shx, and .dbf</li>
      <li className="shapefiles-li">.shp — shape format; the feature geometry itself

</li>
      <li className="shapefiles-li">.shx — shape index format; a positional index of the feature geometry to allow seeking forwards and backwards quickly</li>
      <li className="shapefiles-li">.dbf — attribute format; columnar attributes for each shape, in dBase IV format</li>
      
      <li className="shapefiles-li">
        <a href="www.esri.com/library/whitepapers/pdfs/shapefile.pdf">Shapefile Whitepaper</a>
      </li>
      <li className="shapefiles-li">
        <a href="www.esri.com/news/arcuser/0401/topo.html">Shapefile Overview</a>
      </li>
    </ul>

  </div>
);