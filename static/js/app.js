//from data.js

const button = d3.select("#filterButton");
const input = d3.select("#dateTimeInput")



const handler = function(){ 

// MAKE THE PAGE TO HAVE A TABLE
  const table = d3.select("body").append("table").classed("table-striped", true)

  // CREATE THE BODY OF THE TABLE
  const tbody = table.append("tbody")

// ADD TO THE TABLE ROWS
  const row = tbody.append("tr")

// ADD THE NAME OF THE COLUMNS IN THE HEADER
    row.append("th").text("Date/Time")
    row.append("th").text("City")
    row.append("th").text("State")
    row.append("th").text("Country")
    row.append("th").text("Shape")
    row.append("th").text("Duration")
    row.append("th").text("Comments")

// LOOP THROUGH THE ARRAY
    data.forEach(record => {
      let rowData = tbody.append("tr")
      rowData.append("th").text(record.datetime)
      rowData.append("td").text(record.city)
      rowData.append("td").text(record.state)
      rowData.append("td").text(record.country)
      rowData.append("td").text(record.shape)
      rowData.append("td").text(record.durationMinutes)
      rowData.append("td").text(record.comments)
    })
  }

// ENTER OR CLICK THE BUTTON AND EXCUTE THE FUNCTION ABOVE TO SHOW THE DATA  
input.on("change", handler)
button.on("click", handler)