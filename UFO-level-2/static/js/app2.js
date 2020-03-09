//from data.js

const filterButton = d3.select("#filterButton");
const dataTableButton = d3.select("#entireTable");
const inputDate = d3.select("#dateTimeInput");
const inputCity = d3.select("#cityInput");
const inputState = d3.select("#select-state");
const inputCountry = d3.select("#countryInput");
const inputShape = d3.select("#select-shape");

// MAKE THE PAGE TO HAVE A TABLE
const table = d3
  .select("table")
  .append("table")
  .classed("table-striped", true);

// FUNCTION TO BRING THE ENTIRE TABLE
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

// FUNCTION WITH THE FILTERS
const handlerFilter = function() {
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
  let filterDate = inputDate.property("value");
  let filterCity = inputCity.property("value");
  let filterState = inputState.property("value").toLowerCase();
  let filterCountry = inputCountry.property("value");
  let filterShape = inputShape.property("value");
  //CREATE AN EMPTY LIST TO STORAGE THE FILTERED DATA
  let filteredData = [];
  // START CHECKING THE INPUT VALUES
  // CHECK IF A DATA WAS ENTERED
  if (filterDate.length > 0) {
    filteredData = data.filter(record => record.datetime === filterDate);
  }
  // CHECK IF A CITY WAS ENTERED
  if (filterCity.length > 0) {
    filteredData = data.filter(record => record.city === filterCity);
  }
  // CHECK IF A STATE WAS ENTERED
  if (filterState.length > 0) {
    filteredData = data.filter(record => record.state === filterState);
  }
  // CHECK IF A COUNTRY WAS ENTERED
  if (filterCountry.length > 0) {
    filteredData = data.filter(record => record.country === filterCountry);
  }
  // CHECK IF A SHAPE WAS ENTERED
  if (filterShape.length > 0) {
    filteredData = data.filter(record => record.shape === filterShape);
  }
  //CREATE A NEW ROW FOR EACH SET O FILTERED DATA
  filteredData.forEach(record => {
    let row = tbody.append("tr");
    row.append("td").text(record.datetime);
    row.append("td").text(record.city);
    row.append("td").text(record.state);
    row.append("td").text(record.country);
    row.append("td").text(record.shape);
    row.append("td").text(record.durationMinutes);
    row.append("td").text(record.comments);
  });
};

// ENTER OR CLICK THE BUTTON AND RUN THE FUNCTION ABOVE TO SHOW THE DATA
inputDate.on("change", handlerFilter);
filterButton.on("click", handlerFilter);
dataTableButton.on("click", entireTable);
