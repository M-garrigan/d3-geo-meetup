import React, { useEffect } from 'react';

import Zero from './slide/zero.js';
import Basics from './slide/basics.js';
import BasicFlow from './slide/basic-flow';
import BasicCode from './slide/basic-code';
import GeojsonOverview from './slide/geojson-overview.js';
import Antimeridian from './slide/antimeridian.js';
import GeojsonGeometryObject from './slide/geojson-geometry-obj.js';
import GeojsonZeroDim from './slide/geojson-zero-dim.js';
import GeojsonOneDim from './slide/geojson-one-dim.js';
import GeojsonTwoDim from './slide/geojson-two-dim.js';
import GeojsonHetero from './slide/geojson-hetero.js';
import TopoJSON from './slide/topojson.js';
import ShapeFiles from './slide/shapefiles.js';
import ConvertingData from './slide/converting-data.js';
import Projection from './slide/projection.js';
import ProjectionMeth from './slide/projection-meth.js';
import ProjectionRotate from './slide/projection-rotate.js';
import CanvasSVG from './slide/canvas-svg.js';
import Path from './slide/path.js';
import PathMeth from './slide/path-meth';

export default props => {
  const { setSlideDeckLength } = props;

  const slideArray = [
    
  
    <Zero height={props.height} width={props.width}/>,
    <Basics />,
    <BasicFlow />,
    <BasicCode />,
    <GeojsonOverview />,
    <Antimeridian height={props.height} width={props.width}/>,
    <GeojsonGeometryObject />,
    <GeojsonZeroDim />,
    <GeojsonOneDim />,
    <GeojsonTwoDim />,
    <GeojsonHetero />,
    <TopoJSON />,
    <ShapeFiles />,
    <ConvertingData />,
    <Projection />,
    <ProjectionMeth />,
    <ProjectionRotate height={props.height} width={props.width} />,
    <CanvasSVG />,
    <Path />,
    <PathMeth />,
  ];

  useEffect( 
    () => setSlideDeckLength(slideArray.length -1), 
    [ setSlideDeckLength, slideArray.length ]
  );
  

  return (
    <div className="slide-wrapper">
      {slideArray[props.currentSlide]}
    </div>
  );
};