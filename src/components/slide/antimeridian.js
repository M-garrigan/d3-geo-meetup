import React, { useCallback, useLayoutEffect, useState } from 'react';

import { geoPath, geoEquirectangular } from 'd3-geo';
import { feature } from 'topojson-client';
import world from '../../../node_modules/world-atlas/land-50m.json';

import '../../styles/Slides.css';

export default ({ width, height }) => {
  const fontSize = Math.round(width * 0.05);
  const width90 = Math.round(width * 0.9);
  const height80 = Math.round(height * 0.8);

  const [canvas, setCanvas] = useState(null);
  const [meridian, setMeridian] =useState('anti')

  const canvasRef = useCallback(node => {
      setCanvas(node);
  }, []);

  useLayoutEffect(() => {
    if (canvas) {
      let ctx = canvas.getContext('2d');
      
      // background
      ctx.beginPath();
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, width90, height80);
      ctx.stroke();
      ctx.fill();
        
      const proj = geoEquirectangular()
        .fitExtent([[0,0], [width90, height80]], feature(world, world.objects.land));

      if (meridian === "anti") {
        proj.rotate([-180,0,0]);
      } else proj.rotate([0,0,0]);
        

      let path = geoPath(proj, ctx);
        
      // countries
      ctx.beginPath();
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      path(feature(world, world.objects.land));
      
      ctx.lineWidth = 0.7;
      // ctx.stroke();
      ctx.fill();

      // 180 meridian line
      ctx.beginPath();
      path({
          "type": "LineString",
          "coordinates": [ [180, 90], [180, -90] ]
        }
      )
      ctx.lineWidth = 4;
      ctx.strokeStyle = "red";
      ctx.stroke();

      // Prime meridian line
      ctx.beginPath();
      path({
          "type": "LineString",
          "coordinates": [ [0, 90], [0, -90] ]
        }
      )
      ctx.lineWidth = 4;
      ctx.strokeStyle = "blue";
      ctx.stroke();

      ctx.closePath();
      }
  }, [canvas, meridian, height80, width90]);

  
  return (
    <div className="slide-grid-full">

      <div className="am-button-wrapper">
        <button 
          style={{fontSize: fontSize}}
          className={`am-button ${meridian === "anti" ? "am-button-anti-active" : "am-button-anti"}`}
          onClick={ () => setMeridian("anti")}
        >Anti Meriadian</button>
        <button 
          style={{fontSize: fontSize}}
          className={`am-button ${meridian === "prime" ? "am-button-prime-active" : "am-button-prime"}`}
          onClick={ () => setMeridian("prime")}
        >Prime Meriadian</button>
      </div>

      <div className="am-canvas-wrapper">
        <canvas
          width={width90}
          height={height80}
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  );
};