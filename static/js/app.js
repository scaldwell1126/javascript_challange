// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");

// YOUR CODE HERE!
console.log(data);

data.forEach(function(sightings) {
    console.log(sightings);
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
    
});

var submit = d3.select("#submit");

//function ot take input and recreate table 
submit.on("click", function() {
    // stop page refresh
    d3.event.preventDefault();
    d3.event("summary").html("");

    // user input as variable 
    var inputElement = d3.select();
    var inputValue = inputElement.property("value");

    //Filter data
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    // loop 
    filteredData.forEach((dateData) => {
        var row = tbody.append("tr");
        Object.entries(dateData).forEach(([key, value])=> {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});
