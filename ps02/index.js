//var svg = d3.select('svg');

var BODY = d3.select('body').append('svg')
    .attr('width',800)
    .attr('height',800);



var circleA = BODY.append('circle')
    .attr('cx',600)
    .attr('cy',100)
    .attr('r',60)
    .attr('fill', 'purple')
    .attr('stroke-width', '2%')
    .attr('stroke', '#0f5a80');




var BOX = BODY.append('rect')
    .attr('x', 0)
    .attr('y', 50)
    .attr('width',50)
    .attr('height', 50)
    .attr('fill', 'green');