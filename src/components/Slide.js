import React, { useEffect } from 'react';

import Zero from './slide/zero.js';
import Basics from './slide/basics.js';
import BasicFlow from './slide/basic-flow';
import BasicCode from './slide/basic-code';
import GeojsonOverview from './slide/geojson-overview.js';
import GeojsonGeometryObject from './slide/geojson-geometry-obj.js';
import GeojsonZeroDim from './slide/geojson-zero-dim.js';
import GeojsonOneDim from './slide/geojson-one-dim.js';
import GeojsonTwoDim from './slide/geojson-two-dim.js';
import GeojsonHetero from './slide/geojson-hetero.js';

export default props => {
  const slideArray = [
    {comp: <Zero height={props.height} width={props.width}/>},
    {comp: <Basics />},
    {comp: <BasicFlow />},
    {comp: <BasicCode />},
    {comp: <GeojsonOverview />},
    {comp: <GeojsonGeometryObject />},
    {comp: <GeojsonZeroDim />},
    {comp: <GeojsonOneDim />},
    {comp: <GeojsonTwoDim />},
    {comp: <GeojsonHetero />}
  ];

  useEffect( () => props.setSlideDeckLength(slideArray.length -1), []);
  

  return (
    <div className="slide-wrapper">
      {slideArray[props.currentSlide].comp}
    </div>
  );
};