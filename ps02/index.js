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



rectnumber_center = 11;
var x = 0;
var y = -50;
rectnumber_side= 9;
var xr = 100;
var yr = -50;
var xl = 0;
var yl = 50;
var center = 1;

for ( i = 0; i < rectnumber_center; i++) {
       if (center === 1){
            //rectA
           x = x + 50;
           y = y + 50;
           RECT = BODY.append('rect')
               .attr('x', x)
               .attr('y', y)
               .attr('width', 50)
               .attr('height', 50)
            .attr('fill', 'green');
            center = center +1;
       }
       else if (center === 2){
       //rectB
           x = x + 50;
           y = y + 50;
           RECT = BODY.append('rect')
               .attr('x', x)
               .attr('y', y)
               .attr('width', 50)
              .attr('height', 50)
           .attr('fill', '#53800c');
           center = center +1;
       }
       else{
           //rectC
           x = x + 50;
           y = y + 50;
           RECT = BODY.append('rect')
               .attr('x', x)
               .attr('y', y)
               .attr('width', 50)
               .attr('height', 50)
           .attr('fill', '#178067');
           center =1;
       }


}

//RIGHT RECT DIAGONAL
for ( i = 0; i < rectnumber_side; i++) {
    if (center === 1){
        //rectA
        xr = xr + 50;
        yr = yr + 50;
        RECT = BODY.append('rect')
            .attr('x', xr)
            .attr('y', yr)
            .attr('width', 50)
            .attr('height', 50)
            .attr('fill', 'green');
        center = center +1;
    }
    else if (center === 2){
        //rectB
        xr = xr + 50;
        yr = yr + 50;
        RECT = BODY.append('rect')
            .attr('x', xr)
            .attr('y', yr)
            .attr('width', 50)
            .attr('height', 50)
            .attr('fill', '#53800c');
        center = center +1;
    }
    else{
        //rectC
        xr = xr + 50;
        yr = yr + 50;
        RECT = BODY.append('rect')
            .attr('x', xr)
            .attr('y', yr)
            .attr('width', 50)
            .attr('height', 50)
            .attr('fill', '#178067');
        center =1;
    }
}

//LEFT RECT DIAGONAL
for ( i = 0; i < rectnumber_side+4; i++) {
    if (center === 1){
        //rectA
        console.log(center);
        xl = xl + 50;
        yl = yl + 50;
        RECT = BODY.append('rect')
            .attr('x', xl)
            .attr('y', yl)
            .attr('width', 50)
            .attr('height', 50)
            .attr('fill', 'green');
        center = center +1;
    }
    else if (center === 2){
        //rectB
        console.log(center);
        x = xl + 50;
        y = yl + 50;
        RECT = BODY.append('rect')
            .attr('x', xl)
            .attr('y', yl)
            .attr('width', 50)
            .attr('height', 50)
            .attr('fill', '#53800c');
        center = center +1;
    }
    else{
        //rectC
        console.log(center);
        xl = xl + 50;
        yl = yl + 50;
        RECT = BODY.append('rect')
            .attr('x', xl)
            .attr('y', yl)
            .attr('width', 50)
            .attr('height', 50)
            .attr('fill', '#178067');
        center =1;
    }
}
