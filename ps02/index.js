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



rectnumber = 11;
for ( i = 0; i < rectnumber; i++){
    console.log(clicked);
    var x = 0;
    var y = -50;
    var center = 1;
        if (center = 1){
            var BOX= BODY.append('rect')
            //rectA
            .attr('x', 'x+50')
            .attr('y', 'y+50')
            .attr('fill', 'green');
            center = center +1;}
        else if (center = 2){
            //rectB
            var BOX= BODY.append('rect')
            .attr('x', 'x+50')
            .attr('y', 'y+50')
            .attr('fill', '#53800c')
            .attr('stroke-width', '1%');
                center= center+1;}
        else {
        //rectC
        var BOX = BODY.append('rect')
            .attr('x', 'x+50')
            .attr('y', 'y+50')
            .attr('fill', '#178067;')
            .attr('stroke-width', '1%');
        center = 1;}
}
