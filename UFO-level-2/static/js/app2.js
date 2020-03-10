//Use the array key names for the html input fields

const filterButton = d3.select("#filterButton");
const dataTableButton = d3.select("#entireTable");

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

  // LOOP THROUGH THE ARRAY TO BRING THE TABLE
  data.forEach(record => {
    var rowData = tbody.append("tr");
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
  var filteredData = data;
  // CREATE AN ARRAY WITH ALL INPUT FIELDS
  var inputId = document.getElementsByClassName("form-control");

  // ITERATE THROUGH ALL INPUT FIELDS FROM ZERO
  // TO THE LENGTH OF THE ARRAY
  for (var i = 0; i < inputId.length; i++) {
    var idName = inputId[i].id;
    var field = d3.select("#" + idName).property("value");
    // alert("Index: " + i);
    // alert("HTML Input Field Name: " + idName);
    // alert("HTML Input Field Value: " + field);

    // TREAT EMPTY OR SPACE-ONLY FIELDS AS A SEARCH FOR ALL FOR THAT FIRLD (trim to remove empty space)
    if (field.trim() !== "") {

      // COMPARING THE VALUES IN THE JSON TO THE VALUES IN THE HTML INPUT FIELD
      // TO FITER THE DATA IN THE TABLE
      var filteredData = filteredData.filter(
        record =>
          // USINGM TOUPPERCASE() TO MATCH CASE-INSENSITIVE 
          record[idName].toUpperCase().trim() === field.toUpperCase().trim()
      );
      //alert("Lenght of filtered data:" + filteredData.length)
    }
  }

  if (filteredData.length > 0) {
    // CLEAR THE PAGE
    table.html("");

    // CREATE THE BODY OF THE TABLE
    var tbody = table.append("tbody");
    // ADD TO THE TABLE ROWS
    var row = tbody.append("tr");
    // ADD THE NAME OF THE COLUMNS IN THE HEADER
    row.append("th").text("Date/Time");
    row.append("th").text("City");
    row.append("th").text("State");
    row.append("th").text("Country");
    row.append("th").text("Shape");
    row.append("th").text("Duration");
    row.append("th").text("Comments");

    // Iterate through the filtered jSON data
    filteredData.forEach(record => {
      var rowData = tbody.append("tr");
      rowData.append("td").text(record.datetime);
      rowData.append("td").text(record.city);
      rowData.append("td").text(record.state);
      rowData.append("td").text(record.country);
      rowData.append("td").text(record.shape);
      rowData.append("td").text(record.durationMinutes);
      rowData.append("td").text(record.comments);
    });
  } else {
    // CLEAR THE PAGE
    table.html("");
    // CREATE THE BODY OF THE TABLE
    var tbody = table.append("tbody");
    var rowData = tbody.append("tr");
    rowData.append("td").text("No data found");
  }
};

// ENTER OR CLICK THE BUTTON AND RUN THE FUNCTION ABOVE TO SHOW THE DATA
filterButton.on("click", handlerFilter);
dataTableButton.on("click", entireTable);
