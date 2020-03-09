//from data.js

const filterButton = d3.select("#filterButton");
const dataTableButton = d3.select("#entireTable");
const inputDate = d3.select("#dateTimeInput");

// MAKE THE PAGE TO HAVE A TABLE
const table = d3
  .select("body")
  .append("table")
  .classed("table-striped", true);

const handler = function() {
  // CLEAR THE PAGE
  table.html("");

  // CREATE THE BODY OF THE TABLE
  const tbody = table.append("tbody");

  // ADD TO THE TABLE ROWS
  const row = tbody.append("tr");

  // ADD THE NAME OF THE COLUMNS IN THE HEADER
  row.append("th").text("Date/Time");
  row.append("th").text("City");
  row.append("th").text("State");
  row.append("th").text("Country");
  row.append("th").text("Shape");
  row.append("th").text("Duration");
  row.append("th").text("Comments");

  // FIND THE INPUT VALUE
  let filterCond = inputDate.property("value");

  // LOOP THROUGH THE ARRAY AND FILTER
  data
    .filter(record => record.datetime === filterCond)
    .forEach(record => {
      let rowData = tbody.append("tr");
      rowData.append("td").text(record.datetime);
      rowData.append("td").text(record.city);
      rowData.append("td").text(record.state);
      rowData.append("td").text(record.country);
      rowData.append("td").text(record.shape);
      rowData.append("td").text(record.durationMinutes);
      rowData.append("td").text(record.comments);
    });
};

// ANOTHER FUNCTION TO BRING THE ENTIRE TABLE
const entireTable = function() {
  // CLEAR THE PAGE
  table.html("");

  // CREATE THE BODY OF THE TABLE
  const tbody = table.append("tbody");

  // ADD TO THE TABLE ROWS
  const row = tbody.append("tr");

  // ADD THE NAME OF THE COLUMNS IN THE HEADER
  row.append("th").text("Date/Time");
  row.append("th").text("City");
  row.append("th").text("State");
  row.append("th").text("Country");
  row.append("th").text("Shape");
  row.append("th").text("Duration");
  row.append("th").text("Comments");

  // FIND THE INPUT VALUE
  let filterCond = inputDate.property("value");

  // LOOP THROUGH THE ARRAY TO BRING THE TABLE
  data.forEach(record => {
    let rowData = tbody.append("tr");
    rowData.append("td").text(record.datetime);
    rowData.append("td").text(record.city);
    rowData.append("td").text(record.state);
    rowData.append("td").text(record.country);
    rowData.append("td").text(record.shape);
    rowData.append("td").text(record.durationMinutes);
    rowData.append("td").text(record.comments);
  });
};

// ENTER OR CLICK THE BUTTON AND RUN THE FUNCTION ABOVE TO SHOW THE DATA
inputDate.on("change", handler);
filterButton.on("click", handler);
dataTableButton.on("click", entireTable);
