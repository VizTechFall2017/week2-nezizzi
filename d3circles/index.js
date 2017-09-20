

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
    })


circle1.attr('stroke',"green");

indexCard.append ('circle')
    .attr('cx',150)
    .attr('cy',100)
    .attr('r',50)
    .attr('fill', 'mediumpurple');
