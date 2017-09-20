console.log('here');

var indexCard = d3.select('svg');

console.log(indexCard);

indexCard.append('circle')
    .attr('cx',250)
    .attr('cy',200)
    .attr('r',20)
    .attr('fill', 'purple');
