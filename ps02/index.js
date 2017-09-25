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


var center = 1;
rectnumber_center = 11;

for ( i = 0; i < rectnumber_center; i++) {
    var x = 0;
    var y = -50;
    //rectA
    x = x + 50;
    y = y + 50;
    console.log(x);
    console.log(y);
    RECT = BODY.append('rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', 50)
        .attr('height', 50)
        .attr('fill', 'green');
}
          