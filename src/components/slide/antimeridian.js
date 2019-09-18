import React, { useCallback, useLayoutEffect, useState } from 'react';

import { geoPath, geoEquirectangular } from 'd3-geo';
import { feature, mesh } from 'topojson-client';
import world from '../../../node_modules/world-atlas/land-50m.json';

import '../../styles/Slides.css';

export default props => {
  const { width, height } = props;
  const width90 = Math.round(width * 0.9);
  const height90 = Math.round(height * 0.9);

  const [canvas, setCanvas] = useState(null);

  const canvasRef = useCallback(node => {
      setCanvas(node);
  }, []);

  useLayoutEffect(() => {
    if (canvas) {
      let ctx = canvas.getContext('2d');
      
      // background
      ctx.beginPath();
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, width90, height90);
      ctx.stroke();
      ctx.fill();
        
      const proj = geoEquirectangular()
        .fitExtent([[0,0], [width90, height90]], feature(world, world.objects.land))
        .rotate([-180,0,0])

      let path = geoPath(proj, ctx);
        
      // countries
      ctx.beginPath();
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      path(feature(world, world.objects.land));
      
      ctx.lineWidth = 0.7;
      ctx.stroke();
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

      ctx.closePath();
      }
  }, [canvas, height, width]);

  
  return (
    <div className="antimeridian-wrapper">
      <p className="antimeridian-title">Anti Meridian / 180 Meridian</p>
      <canvas
        width={width90}
        height={height90}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};