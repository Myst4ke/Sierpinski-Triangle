let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

function drawSierpinskiTriangle(ctx, points, depth) {
    // base case: if the depth is 0, draw the triangle
    if (depth === 0) {
      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);
      ctx.lineTo(points[1][0], points[1][1]);
      ctx.lineTo(points[2][0], points[2][1]);
      ctx.fill();
    } else {
      // recursive case: draw three smaller triangles
      drawSierpinskiTriangle(ctx, [points[0], getMidpoint(points[0], points[1]), getMidpoint(points[0], points[2])], depth - 1);
      drawSierpinskiTriangle(ctx, [points[1], getMidpoint(points[0], points[1]), getMidpoint(points[1], points[2])], depth - 1);
      drawSierpinskiTriangle(ctx, [points[2], getMidpoint(points[2], points[1]), getMidpoint(points[0], points[2])], depth - 1);
    }
  }
  
  function getMidpoint(point1, point2) {
    return [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2];
  }
  
  drawSierpinskiTriangle(ctx, [[100, 100], [300, 100], [200, 300]], 5);