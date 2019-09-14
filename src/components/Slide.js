import React from 'react';

import SL99 from './slide/sl99.js';
import S_basics from './slide/s-basics.js';
import S_basic_flow from './slide/s-basic-flow';
import S_basic_code from './slide/s-basic-code';


export default props => {
  const slideArray = [
    {comp: <SL99 height={props.height} width={props.width}/>},
    {comp: <S_basics />},
    {comp: <S_basic_flow />},
    {comp: <S_basic_code />}
  ];
  

  return (
    <div className="slide-wrapper">
      {slideArray[props.currentSlide].comp}
    </div>
  );
};