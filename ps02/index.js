//var svg = d3.select('svg');

var BODY = d3.select('body').append('svg')
    .attr('width',800)
    .attr('height',800);



var circle = BODY.append('circle')
    .attr('cx',600)
    .attr('cy',100)
    .attr('r',60)
    .attr('fill', 'purple')
    .attr('stroke-width', '2%')
    .attr('stroke', '#0f5a80');

var BOX = BODY.append('rectangle')
    .attr('x', 150)
    .attr('y', 0)
    .attr('width',50);