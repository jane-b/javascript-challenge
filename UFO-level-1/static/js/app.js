// from data.js
var tableData = data;

// select table body
var tbody = d3.select("tbody");

// create function to fill in table
function appendTable(data) {

    // first, clears table data (if any)
    tbody.html("")

    // iterates through data
    data.forEach(function(tableData) {
    
    // add table row variable
    var row = tbody.append("tr");

        // iterate through data values
        Object.entries(tableData).forEach(function([key, value]) {

            // add table cell variable
            var cell = tbody.append("td");

            // insert data value into cell
            cell.text(value);
        });
    });
}

// build table with data on initial page load
appendTable(tableData);


// create variable for the filter button
var button = d3.select("#filter-btn");

// set action on click
button.on("click", function() {
    
    // select the form input
    var inputElement = d3.select(".form-control");

    // set the variable for grabbing the value put into the form
    var inputValue = inputElement.property("value");

    // create variable and function for filtering data on date
    var filteredData = data.filter(date => date.datetime === inputValue);
    
    // build table with filtered data only
    appendTable(filteredData);

});
