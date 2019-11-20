
// import React, { useState, useRef, useCallback, useLayoutEffect } from 'react';

// import { sum } from 'd3-array';
// import { polygonLength } from 'd3-polygon';
// import { select } from 'd3-selection';
// import { transition } from 'd3-transition';
// import { feature } from 'topojson-client';

// import geoData from '../../utils/us-10m.js';

// const states = feature(
//   geoData, 
//   geoData.objects.states
// ).features.map( d => d.geometry.coordinates[0]);


// export default ({height, width}) => {

//   const [svg, setSvg] = useState(null);

//   const svgRef = useCallback(node => {
//       setSvg(node);
//   }, []);

//   useLayoutEffect(() => {
//     if (svg) {
//       const svgElem = select(svg);
//       const path = svgElem.append("path");
//       const circles = svgElem.append("g");

//       console.log('states: ', states);

//       const draw = () => {
//         let a = states[0].slice(0);
//         let b = states[1].slice(0);

//         // Same number of points on each ring
//         if (a.length < b.length) {
//           addPoints(a, b.length - a.length);
//         } else if (b.length < a.length) {
//           addPoints(b, a.length - b.length);
//         }

//         // Pick optimal winding
//         a = wind(a, b);

//         path.attr("d", join(a));

//         // Redraw points
//         circles.datum(a).call(updateCircles);

//         // Morph
//         var t = transition().duration(1000);
//         console.log('err: ', path)
//         // .transition(t)
//         path
//           .on("end", function(){
//             states.push(states.shift());
//             setTimeout(draw, 100);
//           })
//           .attr("d", join(b));

//         circles.selectAll("circle").data(b)
//           .transition(t)
//           .attr("cx",function(d){
//             return d[0];
//           })
//           .attr("cy",function(d){
//             return d[1];
//           });
//       };

//       const updateCircles = sel => {

//         var circles = sel.selectAll("circle")
//           .data(function(d){ return d; });

//         var merged = circles.enter()
//           .append("circle")
//           .attr("r", 2)
//           .merge(circles);

//         merged.classed("added", function(d){
//             return d.added;
//           })
//           .attr("cx",function(d){
//             return d[0];
//           })
//           .attr("cy",function(d){
//             return d[1];
//           });

//         circles.exit().remove();
//       };

//       const addPoints = (ring, numPoints) => {

//         var desiredLength = ring.length + numPoints,
//             step = polygonLength(ring) / numPoints;

//         var i = 0,
//             cursor = 0,
//             insertAt = step / 2;

//         do {

//           var a = ring[i],
//               b = ring[(i + 1) % ring.length];

//           var segment = distanceBetween(a, b);

//           if (insertAt <= cursor + segment) {
//             ring.splice(i + 1, 0, pointBetween(a, b, (insertAt - cursor) / segment));
//             insertAt += step;
//             continue;
//           }

//           cursor += segment;
//           i++;

//         } while (ring.length < desiredLength);
//       };

//       function pointBetween(a, b, pct) {

//         var point = [
//           a[0] + (b[0] - a[0]) * pct,
//           a[1] + (b[1] - a[1]) * pct
//         ];

//         point.added = true;
//         return point;
//       };

//       function distanceBetween(a, b) {
//         return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
//       };

//       function join(d) {
//         return "M" + d.join("L") + "Z";
//       };

//       function wind(ring, vs) {
//         console.log('ring: ', ring);
//         console.log('vs: ', vs);
//         var len = ring.length,
//             min = Infinity,
//             bestOffset;
//             // sum;

//         for (var offset = 0, len = ring.length; offset < len; offset++) {

//           var sumTotal = sum(vs.map(function(p, i){
//             var distance = distanceBetween(ring[(offset + i) % len], p);
//             return distance * distance;
//           }));

//           if (sumTotal < min) {
//             min = sumTotal;
//             bestOffset = offset;
//           }
//         }

//         return ring.slice(bestOffset).concat(ring.slice(0, bestOffset));
//       }

//         draw();
//     }

//   }, [svg, height, width]);

  
//   return (
//     <svg
//       className="morph-svg"
//       height={height}
//       width={width}
//       ref={svgRef}
//     />
//   )
// };