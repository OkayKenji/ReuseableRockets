// This is the main file.
//
// Overall the goal of the project is to display in the form of a table, launch statistics. 
// The main focus will be on reuseable or refurbishable launchers. 
// Data is stored in json files, and should be standardized. 
//
// Currently only Falcon 9 Block 5 data is stored.
//
// Possible future rockets to be included:
//  - Blue Origin Rockets
//  - Starship
//  - Electron
//  - Space Shuttles
let jsonData;
let vehicleJSON;

function preload() {
  jsonData = loadJSON("launchfile.json");
}

function setup() {
  vehicleJSON = jsonData.spacex.boosters;

  document.getElementById("vehicle").addEventListener("change", updateVehicle)
  noCanvas();
}

function draw() {
  genTable();
  noLoop();
}

/**
 * Generates the table that displays information on the boosters.
 */
function genTable() {
  background(255);

  let bodyDIV = document.getElementById("table");
  bodyDIV.innerHTML = ""; //reset
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  //for the first row, the headings
  let titleRow = document.createElement("tr");
  let firstRow = ["SN or Name, Status, # of flights", "Flight #", "Mission name", "Mission date", "Mission time", "Launch location", "Recovery type", "Recovery name", "Recovery status", "Mission status", "Notes"];
  for (let i = 0; i < 11; i++) {
    let cell = document.createElement("td");
    let cellInfo = document.createTextNode(firstRow[i]);
    cell.appendChild(cellInfo);
    titleRow.appendChild(cell);
  }
  tblBody.appendChild(titleRow);


  for (let i = 0; i < vehicleJSON.length; i++) {
    let booster = vehicleJSON[i];
    let flightData = vehicleJSON[i].flights;

    //for the row that contains the SN of booster and it's first flight
    let intialRow = document.createElement("tr");
    let boosterSNCell = document.createElement("td");
    let cellInfo = document.createTextNode(booster.name + ", " + booster.status + ", " + booster.flights.length);
    boosterSNCell.appendChild(cellInfo);
    boosterSNCell.setAttribute("rowSpan", flightData.length);
    intialRow.appendChild(boosterSNCell);
    rowGenerator(intialRow, flightData[0], 1);
    tblBody.appendChild(intialRow);

    //for subsequent flights
    if (flightData[1]) {
      for (let j = 1; j < flightData.length; j++) {
        let intermediteRow = document.createElement("tr");
        rowGenerator(intermediteRow, flightData[j], j + 1);
        tblBody.appendChild(intermediteRow);
      }
    }
  }

  tbl.appendChild(tblBody);
  bodyDIV.appendChild(tbl);
}


/**
 * 
 * @param {*} rowToEdit Row element that will be appeneded
 * @param {*} flightDetail Object containing info on flight
 * @param {*} index The flight number
 * @returns 
 */
function rowGenerator(rowToEdit, flightDetail, index) {
  let flightNumData = document.createTextNode(index);
  let flightNumCell = document.createElement("td");
  flightNumCell.appendChild(flightNumData);
  rowToEdit.appendChild(flightNumCell);

  // adds the mission name to the cell, if the link to webcast of mission
  // is available, the name will link to said webcast.
  let missionData;
  if (flightDetail.launchLink) {
    let link = document.createElement("a");
    link.setAttribute("href", flightDetail.launchLink);
    link.innerHTML = flightDetail.missionName;
    missionData = link;
  } else {
    missionData = document.createTextNode(flightDetail.missionName);
  }

  let missionCell = document.createElement("td");
  missionCell.appendChild(missionData);
  rowToEdit.appendChild(missionCell);


  let missionDateData = document.createTextNode(flightDetail.missionDate.date);
  let missionDataCell = document.createElement("td");
  missionDataCell.appendChild(missionDateData);
  rowToEdit.appendChild(missionDataCell);


  let missionTimeData = document.createTextNode(flightDetail.missionDate.time);
  let missionTimeCell = document.createElement("td");
  missionTimeCell.appendChild(missionTimeData);
  rowToEdit.appendChild(missionTimeCell);


  let launchLocData = document.createTextNode(flightDetail.launchLoc);
  let launchLocCell = document.createElement("td");
  launchLocCell.appendChild(launchLocData);
  rowToEdit.appendChild(launchLocCell);


  let recTypeData = document.createTextNode(flightDetail.recovery.type);
  let recTypeCell = document.createElement("td");
  recTypeCell.appendChild(recTypeData);
  rowToEdit.appendChild(recTypeCell);


  let recNameData = document.createTextNode(flightDetail.recovery.name);
  let recNameCell = document.createElement("td");
  recNameCell.appendChild(recNameData);
  rowToEdit.appendChild(recNameCell);

  // changes color per status
  let recStatusData = document.createTextNode(flightDetail.recovery.status);
  let recStatusCell = document.createElement("td");
  recStatusCell.appendChild(recStatusData);
  cellColor(recStatusCell, flightDetail.recovery.status);
  rowToEdit.appendChild(recStatusCell);

  // changes color per status
  let missionStatusData = document.createTextNode(flightDetail.status);
  let missionStatusCell = document.createElement("td");
  missionStatusCell.appendChild(missionStatusData);
  cellColor(missionStatusCell, flightDetail.status);
  rowToEdit.appendChild(missionStatusCell);


  let notesData = document.createTextNode(flightDetail.notes);
  let notesCell = document.createElement("td");
  notesCell.appendChild(notesData);
  rowToEdit.appendChild(notesCell);

  return rowToEdit;
}

/**
 * 
 * @param {*} cell The cell to preform color change to
 * @param {*} status Dictates what color it is changed to.
 */
function cellColor(cell, status) {
  if (status == "Successful" || status == "Success") {
    cell.style.background = "	#74C365";
    cell.style.color = "#FFFFFF";
  }

  if (status == "Failure" || status == "Fail" || status == "Lost") {
    cell.style.background = "#C51E3A";
    cell.style.color = "#FFFFFF";
  }

  if (status == "Partial failure" || status == "Partial success") {
    cell.style.background = "#FFD300";
    cell.style.color = "#000000";
  }

  if (status == "Expended") {
    cell.style.background = "#77B5FE";
    cell.style.color = "#FFFFFF";
  }

  if (status == "TBD") {
    cell.style.background = "#DDEE00";
    cell.style.color = "#FFFFFF";
  }


}


/**
 * Updatse table per request
 */
function updateVehicle() {
  let userSelect = document.getElementById("vehicle").value;
  
  switch (userSelect) {
    case "spxF9FH":
        vehicleJSON = jsonData.spacex.boosters;
        break;
    case "spxDragon2":
        vehicleJSON = jsonData.spacex.dragon2;
        break;
    case "spxStarship":
        vehicleJSON = jsonData.spacex.starship;
        break;
    case "rklbElectron":
        vehicleJSON = jsonData.rklb.electron;
        break;
    case "boNS":
        vehicleJSON = jsonData.bo.newShepard;
        break;
}
  genTable();
}