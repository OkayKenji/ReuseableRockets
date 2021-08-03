// This is the main file.
//
// Overall the goal of the project is to display in the form of a table, launch statistics. 
// The main focus will be on reuseable or refurbishable launchers. 
// Data is stored in json files, and should be standardized. 
//
let jsonData;
let vehicleJSON;

function preload() {
  jsonData = loadJSON("launchfile.json");
}

function setup() {
  vehicleJSON = jsonData.spacex.boosters;

  document.getElementById("vehicle").addEventListener("change", updateVehicle);
  noCanvas();
}

function draw() {
  genTable();
  generateStatistics();
  dateStatistics();
  //statGen();
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
  generateStatistics();
  dateStatistics();
}

function generateStatistics() {
  // Success/Failure/PF & TBD ratio chart
  let successCount = 0;
  let failureCount = 0;
  let tbdPfaiCount = 0; //TBD or partial failure

  // Succesful recovery type ratio + failures
  let recoveryFail = 0;
  let typeCountObj = {
    labelList: [],
    dataList: []
  };

  // Launch location ratio chart
  let launchLocObj = {
    labelList: [],
    dataList: []
  };

  // # Flight oer booster ratio
  let flightLogObj = {
    labelList: [],
    dataList: []
  };

  // Active booster vs inactive ratio
  let activeVehCou = 0;
  let inactiveVehC = 0;

  for (let eachVehicle of vehicleJSON) {
    if (eachVehicle.status == "Active") {
      activeVehCou++;
    } else if (eachVehicle.status == "Inactive") {
      inactiveVehC++;
    }

    flightLogObj.labelList.push(eachVehicle.name);
    flightLogObj.dataList.push(eachVehicle.flights.length);

    for (let eachFlight of eachVehicle.flights) {
      if (eachFlight.typeVehicle != "Falcon Heavy Side Core") { //when counting successful flights, ignore side booster to not triple count
        // Success/Failure/PFTBD ratio chart
        if (eachFlight.status == "Successful")
          successCount++;
        else if (eachFlight.status == "Failure")
          failureCount++;
        else if (eachFlight.status == "TBD" || eachFlight.status == "Partial Failure")
          tbdPfaiCount++;

        countObjFiller(launchLocObj, eachFlight.launchLoc);
      }

      // Recovery
      if (eachFlight.recovery.status == "Failure") {
        recoveryFail++;
      } else {
        countObjFiller(typeCountObj, eachFlight.recovery.type);
      }

    }
  }

  let succFailCountObj = {
    labelList: ["Successful", "Failure", "Partial failure or TBD"],
    dataList: [successCount, failureCount, tbdPfaiCount],
    customColors: ["#74C365", "#C51E3A", "#FFD300"]
  }

  let activeVInactiObj = {
    labelList: ["Active", "Inactive"],
    dataList: [activeVehCou, inactiveVehC]
  }

  typeCountObj.labelList.splice(0, 0, "Recovery failure");
  typeCountObj.dataList.splice(0, 0, recoveryFail);

  chartGenerator(succFailCountObj, "Success Ratio");
  chartGenerator(typeCountObj, "Recovery stats");
  chartGenerator(flightLogObj, "Flight logged");
  chartGenerator(activeVInactiObj, "Active Ratio");
  chartGenerator(launchLocObj, "Launch locations");
}

function countObjFiller(obj, seachTerm) {
  let index = obj.labelList.findIndex(element => element == seachTerm);
  if (index < 0) { // Not already in labelList
    obj.labelList.push(seachTerm);
    obj.dataList.push(1);
  } else { //already in list
    obj.dataList[index]++;
  }
}

let graphA;
let graphB;
let graphC;
let graphD;
let graphE;
let graphF;
let graphG;
function chartGenerator(obj, title) {
  let backgroundColor = [];
  if (obj.customColors) {
    backgroundColor = obj.customColors;
  } else {
    backgroundColor = ['rgb(255, 64, 64)', 'rgb(255, 145, 35)', 'rgb(255, 205, 20)', 'rgb(155, 230, 0)', 'rgb(100, 177, 255)', 'rgb(0, 101, 202)', 'rgb(255, 140, 198)', 'rgb(190, 109, 190)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'];
  }
  const data = {
    labels: obj.labelList,
    datasets: [{
      label: 'datas1',
      backgroundColor: backgroundColor,
      data: obj.dataList,
    }]
  };
  const config = {
    type: 'pie',
    data,
    options: {
      plugins: {
        title: {
          display: true,
          text: title
        }
      }
    }
  };

  switch (title) {
    case "Success Ratio":
      if (graphA) {
        graphA.destroy();
      }
      graphA = new Chart(
        document.getElementById('missionSucc'),
        config
      );
      break;
    case "Recovery stats":
      if (graphB) {
        graphB.destroy();
      }
      graphB = new Chart(
        document.getElementById('recName'),
        config
      );
      break;
    case "Flight logged":
      if (graphC) {
        graphC.destroy();
      }
      graphC = new Chart(
        document.getElementById('flightRatios'),
        config
      );
      break;
    case "Active Ratio":
      if (graphD) {
        graphD.destroy();
      }
      graphD = new Chart(
        document.getElementById('activeInactive'),
        config
      );
      break;
    case "Launch locations":
      if (graphE) {
        graphE.destroy();
      }
      graphE = new Chart(
        document.getElementById('launchLoc'),
        config
      );
      break;
  }

}

function dateStatistics() {
  let tunAroundArr = [];
  let respectiveArr = [];
  let totalFlights = 0;

  for (let eachVehicle of vehicleJSON) {
    for (let i = 1; i < eachVehicle.flights.length; i++) {
      let currDateObj = eachVehicle.flights[i].missionDate;
      let prevDateObj = eachVehicle.flights[i - 1].missionDate;

      let currDate = new Date(currDateObj.date + " " + currDateObj.time);
      let prevDate = new Date(prevDateObj.date + " " + prevDateObj.time);
      let milisecDiff = currDate - prevDate;


      respectiveArr.push("Between "+eachVehicle.flights[i - 1].missionName+" and "+eachVehicle.flights[i].missionName)
      tunAroundArr.push((milisecDiff));
    }
    totalFlights+=eachVehicle.flights.length;
  }
  //assuming 24 hour days, 60 min hours, 60 sec mins
  
  selectionSort(tunAroundArr,respectiveArr);

  //charts
  reusedVNew(totalFlights,tunAroundArr.length)
  barChartDemo(tunAroundArr);

  let otherStas = document.getElementsByClassName("otherStats")[0];
  otherStas.innerText = "";
  let a = "Median: "+Math.trunc(tunAroundArr[Math.trunc(tunAroundArr.length / 2)]/86400000); //Median
  a += ("<br>Average: "+Math.trunc(returnAvg(tunAroundArr)/86400000));
  a +=("<br>Fastest turn around of " + Math.trunc(tunAroundArr[0]/ 86400000) + " days between launches of " + respectiveArr[0]); //fast 
  a += ("<br>Slowest turn around of " + Math.trunc(tunAroundArr[tunAroundArr.length-1]/ 86400000) + " days between launches of " + respectiveArr[respectiveArr.length-1]); //fast 
  let b = document.createElement("p");
  b.innerHTML = a;
  otherStas.appendChild(b);
}

function returnAvg(arr) {
  let total = 0;
  for (let curr of arr) {
    total+=curr;
  }
  return total/arr.length;
}

function reusedVNew(totalFlights,reusedFligts) {
  const data = {
    labels: ["New booster missions","Re-used booster missions"],
    datasets: [{
      label: "Number flights",
      backgroundColor: ["rgba(255,0,0)","rgba(0,255,0)"],
      data: [totalFlights-reusedFligts,reusedFligts],
    }]
  };
  const config = {
    type: 'pie',
    data,
    options: {
      plugins: {
        title: {
          display: true,
          text: "Reused v. New"
        }
      }
    }
  };


  if (graphF) {
    graphF.destroy();
  }
  graphF = new Chart(
    document.getElementById('reusedMissions'),
    config
  );


}

function barChartDemo(arr) {
  let newArr = [];
  let labels = [];

  for (let i = 0; i < Math.trunc(arr[arr.length - 1]/ 86400000 ) + 1; i++) {
    let numOfIs = 0;
    labels.push(i);
    for (let j = 0; j < arr.length; j++) {
      if (i == Math.trunc(arr[j] / 86400000))
        numOfIs++;
    }
    newArr.push(numOfIs);
  }

  const data = {
    labels: labels,
    datasets: [{
      label: "Number flights",
      backgroundColor: "rgba(255,0,0)",
      data: newArr,
    }]
  };
  const config = {
    type: 'bar',
    data,
    options: {
      plugins: {
        title: {
          display: true,
          text: "Turn around times"
        }
      }
    }
  };


  if (graphG) {
    graphG.destroy();
  }
  graphG = new Chart(
    document.getElementById('turnAroundScew'),
    config
  );


  return newArr;
}

function selectionSort(arr,arr1) {
  for (let i = 0; i < arr.length; i++) {
    let lowestIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[lowestIndex] > arr[j]) {
        lowestIndex = j;
      }
    }
    let rem = arr[i];
    arr[i] = arr[lowestIndex];
    arr[lowestIndex] = rem;
    let remText = arr1[i];
    arr1[i] = arr1[lowestIndex];
    arr1[lowestIndex] = remText;
  }
}