var data = d3.csv("unhcr-refugee-data-ken.csv")
    .row(function(d) { return {key: d.key, value: +d.value}; })
    .get(function(error, rows) { console.log(rows); });


//var json = d3.csv.parseRows(data.key);
console.log(data.row);
