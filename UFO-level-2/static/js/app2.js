//from data.js
//https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_filter

const filterButton = d3.select("#filterButton")
const dataTableButton = d3.select("#entireTable")
const inputDate = d3.select("#dateTimeInput")
const inputCity = d3.select("#cityInput")
const inputState = d3.select("#select-state")
const inputCountry = d3.select("#countryInput")
const inputShape = d3.select("#select-shape")

// MAKE THE PAGE TO HAVE A TABLE
const table = d3.select("table").append("table").classed("table-striped", true)

const handler = function(){ 
  // CLEAR THE PAGE
  table.html("")
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
  
  // FIND THE INPUT VALUE
  let filterDate = inputDate.property("value")
  let filterCity = inputCity.property("value")
  let filterState = inputState.property("value").toLowerCase()
  let filterCountry = inputCountry.property("value")
  let filterShape = inputShape.property("value")

  // CHECK IF THERE IS INPUT
  if (filterDate !== "" || filterCity !== "" || filterState !== "" ||filterCountry !== "" ||filterShape !== "" ){
    // IF INPUT IS DIFFERENT THEN "", BUILD THE TABLE
    buildTable (filterDate, filterCity, filterState, filterCountry, filterShape)
  }
  else {
    //PRINT A MESSAGE
    console.log("There is no input criteria entered")
  }
}
// FUCTION TO LOOP THROUGH THE ARRAY AND FILTER

const buildTable = function (filterDate, filterCity, filterState, filterCountry, filterShape) {
  // CLEAR THE TABLE IF IT IS PRESENT 
  table.html("")
  // CREATE AN EMPTY LIST TO STORE THE FILTERED DATA
  let filteredData = [] 
  // START FILTERING - CHECK IF A DATA WAS ENTERED
  if (filterDate.length > 0) {
    filteredData = data.filter(record => record.datetime === filterDate)
  }
  // CHECK IF A CITY WAS ENTERED
  if (filterCity.length > 0) {
    filteredData = data.filter(record => record.city === filterCity)
  }
  // CHECK IF A STATE WAS ENTERED
  if (filterState.length > 0) {
    filteredData = data.filter(record => record.state === filterState)
  }
  // CHECK IF A COUNTRY WAS ENTERED
  if (filterCountry.length > 0) {
    filteredData = data.filter(record => record.country === filterCountry)
  }
  // CHECK IF A SHAPE WAS ENTERED
  if (filterShape.length > 0) {
    filteredData = data.filter(record => record.shape === filterShape)
  }

  // SHOW FILTERED DATA TO THE CONSOLE
  console.log(filteredData)

   // NEW ROW FOR EACH FILTERED DATA
   filteredData.forEach(record => {
    let rowData = tbody.append("tr")
    Object.entries(record).forEach(([key, value]) => {
      let data = rowData.append("td")
      data.text(value)
})
})
}

// ACTION WHEN CLICK THE BUTTON OR WHEN TYPE ENTER
inputDate.on("change", handler)
filterButton.on("click", handler)
//   // LOOP THROUGH THE ARRAY TO BRING THE TABLE
//     data.forEach(record => {
//       let rowData = tbody.append("tr")
//       rowData.append("th").text(record.datetime)
//       rowData.append("td").text(record.city)
//       rowData.append("td").text(record.state)
//       rowData.append("td").text(record.country)
//       rowData.append("td").text(record.shape)
//       rowData.append("td").text(record.durationMinutes)
//       rowData.append("td").text(record.comments)
//   })
// }
  
   

  
// ANOTHER FUNCTION TO BRING THE ENTIRE TABLE
const entireTable = function(){ 

  // CLEAR THE PAGE
  table.html("")
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
  
  // LOOP THROUGH THE ARRAY TO BRING THE TABLE
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

//ENTER OR CLICK THE BUTTON AND RUN THE FUNCTION ABOVE TO SHOW THE DATA  
dataTableButton.on("change", handler)
 