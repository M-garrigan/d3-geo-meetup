import React, { useState, useEffect } from 'react';

import { geoOrthographic, geoPath } from 'd3-geo';
import { select }from 'd3-selection';

import geoData from '../../utils/geoData.js';
import '../../styles/Slides.css';

let skin = {
  "type":"Feature",
  "properties":{
    "name":"Skin"
  },
  "geometry":{
    "type":"Polygon",
    "coordinates":[
      [
        
        [0,180],[0,-180],[90,-180],[90,180],[0,180]
      ]
    ]
  },
"id":"SKIN"
};



export default props => {
  const [lambda, setLambda] = useState(0);

  const rotate = () => {
    console.log('called')
    setLambda(lambda - 5);
  };

  // useEffect( () => {
  //   let timeout = setTimeout(rotate, 500);

  //   return () => clearTimeout(timeout);
  // }, [lambda]);

  
  const proj = geoOrthographic()
    .rotate([lambda, 0, 0])
    .fitExtent([[50,50], [props.width -50, props.height -50]], geoData);

  const p = geoPath().projection(proj);

  // skin 
  const proj1 = geoOrthographic()
    .rotate([lambda, 0, 0])
    .fitExtent([[50,50], [props.width -50, props.height -50]], geoData);

    const p1 = geoPath().projection(proj1);
console.log('p1: ', p1(skin))
  

  return (
    <div className="sl0-wrapper">
      <svg
        className="sl0-svg"
        height={props.height}
        width={props.width}
      >
    
      <path
        className="sl0-ocean"
        
        ref={
          node => (
            select(node)
              .datum(skin)
              .attr('d', p) 
              .on('mouseenter', () => select(node).style('fill', 'orange'))
              .on('mouseleave', () => select(node).style('fill', 'blue'))
          )}
      />
         
        {
          geoData.features.map( (item, idx) => (
            <path
              className="sl0-country"
              key={idx}
              ref={
                node => (
                  select(node)
                    .datum(item)
                    .attr('d', p) 
                    .on('mouseenter', () => select(node).style('fill', 'orange'))
                    .on('mouseleave', () => select(node).style('fill', 'black'))
                )}
            />
          ))
        }
        
      </svg>

    </div>
  );

};