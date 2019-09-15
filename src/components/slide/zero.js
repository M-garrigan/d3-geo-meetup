import React, { useState, useEffect } from 'react';

import { geoOrthographic, geoPath, geoCircle, geoGraticule, geoAlbers } from 'd3-geo';
import { select }from 'd3-selection';
import { mesh, feature } from 'topojson-client';

import geoData from '../../utils/geoData.js';
import gD from '../../utils/gD.js';
import '../../styles/Slides.css';

let point = {
  "type":"Feature",
  "properties":{
    "name":"Point"
  },
  "geometry":{
    "type":"Point",
    "coordinates":[]
  },
"id":"SKIN"
};



export default props => {
  const [lambda, setLambda] = useState(0);

  const rotate = () => {
    // console.log('called')
    setLambda(lambda - 5);
  };

  // useEffect( () => {
  //   let timeout = setTimeout(rotate, 500);

  //   return () => clearTimeout(timeout);
  // }, [lambda]);

  let gratProj = geoGraticule();
  // console.log('grat: ', gratProj())
  // console.log('grat: ', gratProj.lines())

  let circleProj = geoCircle();
  // console.log('cir: ', circleProj())
  
  const proj = geoOrthographic()
    .rotate([lambda, 0, 0.3])
    .fitExtent([[50,50], [props.width -50, props.height -50]], geoData);

  const p = geoPath().projection(proj);
  const path = geoPath();

  let points = circleProj().coordinates[0].map( p => {
    
    return ({
      "type":"Feature",
      "properties":{
        "name":"Point"
      },
      "geometry":{
        "type":"Point",
        "coordinates": p
      },
    "id":"SKIN"
    });
  })
  // console.log('pts: ', points)


  return (
    <div className="sl0-wrapper">
      <svg
        className="sl0-svg"
        height={props.height}
        width={props.width}
      >
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(75)">
            <stop offset="0%"  stopColor="white" />
            <stop offset="30%" stopColor="skyblue" />
            <stop offset="70%" stopColor="rgb(0, 108, 250)" />
            <stop offset="100%" stopColor="blue" />
          </linearGradient>
        </defs>
    
      <path
        className="sl0-ocean"
        
        ref={
          node => (
            select(node)
              .datum(gratProj)
              .attr('d', p) 
              .attr('fill', "url('#myGradient')")
              // .on('mouseenter', () => select(node).style('fill', 'orange'))
              // .on('mouseleave', () => select(node).style('fill', 'blue'))
          )}
      />

      {
        points.map( (item, idx) => {
          
          return (
            <circle
              className={`circle-${idx}`}
              cx={proj(item.geometry.coordinates)[0]}
              cy={proj(item.geometry.coordinates)[1]}
              r="3"
            />
          )
        })
      }

      {/* {
        feature(gD, gD.objects).features.map( (item, idx) => {
          console.log(item);
          return (
            <path
              key={idx}
              className='lower48-path-states'
              
              ref={ node => select(node).attr('d', () => path(item)) }
            />
          )
        })
      }
      } */}
         
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