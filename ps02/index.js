var BODY = d3.select('body').append('svg')
    .attr('width',800)
    .attr('height',800);
///////////////////////////////    RECTANGLES   /////////////////////////////////
rectnumber_center = 11;
var x = 0;
var y = -50;
rectnumber_side= 9;
var xr = 100;
var yr = -50;
var xl = 0;
var yl = 50;
var center = 1;

//CENTER RECT DIAGONAL
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


/////////////////////////////////    CIRCLES   /////////////////////////////////



var c1 = BODY.append('circle')
    .attr('cx',600)
    .attr('cy',100)
    .attr('r',60)
    .attr('class', "circleA")
    .attr('id', 'circle1')
    .attr('stroke-fill', '#0f5a80');
var c2 = BODY.append('circle')
    .attr('cx',600)
    .attr('cy',150)
    .attr('r',40)
    .attr('class', "circleB")
    .attr('id', 'circle2');
var c3 = BODY.append('circle')
    .attr('cx',650)
    .attr('cy',100)
    .attr('r',25)
    .attr('class', "circleC")
    .attr('id', 'circle1');
var c4 = BODY.append('circle')
    .attr('cx',450)
    .attr('cy',200)
    .attr('r',60)
    .attr('class', "circleA")
    .attr('id', 'circle1');
var c5 = BODY.append('circle')
    .attr('cx',450)
    .attr('cy',250)
    .attr('r',40)
    .attr('class', "circleB")
    .attr('id', 'circle1');
var c6 = BODY.append('circle')
    .attr('cx',400)
    .attr('cy',200)
    .attr('r',35)
    .attr('class', "circleC")
    .attr('id', 'circle1');
var c7 = BODY.append('circle')
    .attr('cx',300)
    .attr('cy',300)
    .attr('r',80)
    .attr('class', "circleA")
    .attr('id', 'circle1');
var c8 = BODY.append('circle')
    .attr('cx',250)
    .attr('cy',250)
    .attr('r',50)
    .attr('class', "circleB")
    .attr('id', 'circle1');
var c9 = BODY.append('circle')
    .attr('cx',100)
    .attr('cy',450)
    .attr('r',50)
    .attr('class', "circleC")
    .attr('id', 'circle1');
var c10 = BODY.append('circle')
    .attr('cx',150)
    .attr('cy',400)
    .attr('r',50)
    .attr('class', "circleA")
    .attr('id', 'circle1');
var c11 = BODY.append('circle')
    .attr('cx',100)
    .attr('cy',400)
    .attr('r',50)
    .attr('class', "circleB")
    .attr('id', 'circle1');



d3.selectAll('.circleA')
    .attr('fill', 'purple')
    .attr('stroke-width', '2%');

d3.selectAll('.circleB')
    .attr('fill', 'rebeccapurple')
    .attr('stroke-width', '.5%');

d3.selectAll('.circleC')
    .attr('fill', 'mediumpurple')
    .attr('stroke-width', '1%');





