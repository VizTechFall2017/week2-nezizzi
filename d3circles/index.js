

//var indexCard = d3.select('svg');


var indexCard = d3.select('body').append('svg')
    .attr('width',600)
    .attr('height',400);

var clicked = false;

var circle1 = indexCard.append('circle')
    .attr('cx',250)
    .attr('cy',200)
    .attr('r',100)
    .attr('fill', 'purple')
    .on('click',function(d){
        if(clicked===false){
            d3.select(this).attr('fill', 'green').attr('r', 200);
            clicked = true;
        }
        else{
            d3.select(this).attr('fill', 'purple').attr('r', 100);
            clicked = false;
        }
        console.log(clicked);
    })

    .on('mouseover',function(d) {
        d3.select(this).attr('fill', 'red');
    })

    .on('mouseout',function(d){
        d3.select(this).attr('fill','purple');
    });


circle1.attr('stroke',"green");

indexCard.append ('rect')
    .attr('x',100)
    .attr('y',150)
    .attr('width',50)
    .attr('height',50);

indexCard.append('line')
    .attr('x1',10)
    .attr('x2',20)
    .attr('y1',150)
    .attr('y2',250)
    .attr('stroke','purple');


var c1 = BODY.append('circle')
    .attr('cx',600)
    .attr('cy',100)
    .attr('r',60)
    .attr('class', "circleA")
    .attr('stroke', '#0f5a80');