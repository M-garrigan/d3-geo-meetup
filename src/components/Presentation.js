import React, { useState, useLayoutEffect } from 'react';

import TopControl from './TopControl.js';
import Slide from './Slide.js';
import BottomControl from './BottomControl.js';

import '../styles/Presentation.css';

export default props => {
  const {height, width} = props.dimensions;
  let slideW = width;
  let slideH = Math.round(slideW / 1.333);
    

  while (slideW > width || slideH > height) {
    slideW -= 50;
    slideH = Math.round(slideW / 1.333);
  }


  return (
    <div className="presentation-backdrop">
      <div 
        className="presentation-wrapper"
        style={{height: slideH, width: slideW}}
      >
        <TopControl />
        <Slide />
        <BottomControl />
      </div>
    </div>
  );
};