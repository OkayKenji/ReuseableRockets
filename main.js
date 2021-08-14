/**
 * @param {Object} jsonData Contains all data
 * @param {Object} vehicleJSON Stores data on the selected vehicle (i.e. Dragon, Electron etc.)
 * @param {Object} graphA -> graphB For the graphs
 */
let jsonData;
let vehicleJSON;
let graphA;
let graphB;
let graphC;
let graphD;
let graphE;
let graphF;
let graphG;

aysncStartProgram();

async function aysncStartProgram() {
  const response = await fetch('database.json');
  jsonData = await response.json();

  document.getElementById("vehicle").addEventListener("change", updateVehicle);
  document.getElementById("showAll").addEventListener("click", updateVehicle)

  updateVehicle();

  function updateVehicle() {
    //Selected value at the drop down
    let userSelected = document.getElementById("vehicle").value;
    let paragraphText;

    // Edit this line when adding a new vehicle; Changes vehicleJSON per the drop down
    switch (userSelected) {
      case "spxF9FH":
        vehicleJSON = jsonData.spacex.boosters;
        paragraphText = "All Falcon 9 Block 5 Boosters";
        break;
      case "spxDragon2":
        vehicleJSON = jsonData.spacex.dragon2;
        paragraphText = "All Dragon 2 Capsules that have flown";
        break;
        //case "spxStarship":
        //  vehicleJSON = jsonData.spacex.starship;
        // break;
      case "rklbElectron":
        vehicleJSON = jsonData.rklb.electron;
        paragraphText = "All Electron Boosters"
        break;
      case "boNS":
        vehicleJSON = jsonData.bo.newShepard;
        paragraphText = "All New Shepard Boosters"
        break;
    }
    document.getElementById("graphShow").innerText = "Currently showing..." + paragraphText;
    generateTable();
    generateStatisticsHelper();
  }

  /**
   * Generates the table per the selected vehicle on the drop down
   */
  function generateTable() {
    // Finds div holding table, resets it
    let tableDIV = document.getElementById("table");
    tableDIV.innerHTML = "";

    // Creates table and tbody elements
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    // Row that has horizontal table headings
    let headingRow = document.createElement("tr");
    let firstRow = ["Vehicle S/N or Name, Status, # of flights", "Flight #", "Mission name", "Mission date", "Mission time", "Launch location", "Recovery type",
      "Recovery name", "Recovery status", "Mission status", "Notes"
    ];
    for (let i = 0; i < firstRow.length; ++i) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode(firstRow[i]);
      cell.appendChild(cellText);
      headingRow.appendChild(cell);
    }
    tblBody.appendChild(headingRow);

    // Rest of the rows...
    for (let eachVehicle of vehicleJSON) {
      let flightData = eachVehicle.flights;

      // Row that contains vehicle name/sn etc. as well as the first flight
      let intialRow = document.createElement("tr");
      let boosterNameCell = document.createElement("td");
      let cellText = document.createTextNode(eachVehicle.name + ", " + eachVehicle.status + ", " + flightData.length);
      boosterNameCell.appendChild(cellText);
      boosterNameCell.setAttribute("rowSpan", flightData.length);
      boosterNameCell.addEventListener("click", displayBoosterInfo)
      intialRow.appendChild(boosterNameCell);
      rowGenerator(intialRow, flightData[0], 1);
      tblBody.appendChild(intialRow);

      // For subsequent flights, if there is more then one

      if (flightData[1]) {
        for (let i = 1; i < flightData.length; i++) {
          let intermediateRow = document.createElement("tr");
          rowGenerator(intermediateRow, flightData[i], i + 1);
          tblBody.appendChild(intermediateRow);
        }
      }
    }

    tbl.appendChild(tblBody);
    tableDIV.appendChild(tbl);
  }

  /**
   * 
   * @param {tr Element} rowToEdit Row to add flight data to
   * @param {Object} flightData Flight data
   * @param {Nunber} index Flight number of flight
   */
  function rowGenerator(rowToEdit, flightDetail, index) {
    let flightNumData = document.createTextNode(index);
    let flightNumCell = document.createElement("td");
    flightNumCell.appendChild(flightNumData);
    rowToEdit.appendChild(flightNumCell);

    // Adds the mission name to the cell, if the link to webcast of mission
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

    // Changes color per status
    let recStatusData = document.createTextNode(flightDetail.recovery.status);
    let recStatusCell = document.createElement("td");
    recStatusCell.appendChild(recStatusData);
    cellColor(recStatusCell, flightDetail.recovery.status);
    rowToEdit.appendChild(recStatusCell);

    // Changes color per status
    let missionStatusData = document.createTextNode(flightDetail.status);
    let missionStatusCell = document.createElement("td");
    missionStatusCell.appendChild(missionStatusData);
    cellColor(missionStatusCell, flightDetail.status);
    rowToEdit.appendChild(missionStatusCell);


    let notesData = document.createTextNode(flightDetail.notes);
    let notesCell = document.createElement("td");
    notesCell.appendChild(notesData);
    rowToEdit.appendChild(notesCell);
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
   * Helper to generate other stats
   */
  function generateStatisticsHelper() {
    // Success/Failure/PF & TBD ratio chart
    let overallSuccesObj = {
      labelList: [],
      dataList: []
    }

    let recoveryFail = 0;
    // Recovery stats, failures maybe
    let typeCountObj = {
      labelList: [],
      dataList: []
    }

    // Launch location
    let launchLocObj = {
      labelList: [],
      dataList: []
    }

    // # Flights per booster ratio
    let flightLogObj = {
      labelList: [],
      dataList: []
    }

    // Active vs. inactive
    let activeInactiveObj = {
      labelList: [],
      dataList: []
    }

    // Stuff to calculate date
    let turnAroundArr = [];
    let respectiveArr = [];
    let totalFlights = 0;

    for (let eachVehicle of vehicleJSON) {
      // Counts # of active and inactive boosters
      countObjFiller(activeInactiveObj, eachVehicle.status);

      // Stores the name of the vehicle and the corresponding number of 
      // flights it flew 
      flightLogObj.labelList.push(eachVehicle.name);
      flightLogObj.dataList.push(eachVehicle.flights.length);

      //Counts total number the family has flew
      totalFlights += eachVehicle.flights.length;

      // For overall successes, launch stats, recovery stats 
      recoveryFail += generateStatistics(eachVehicle.flights, overallSuccesObj, launchLocObj, typeCountObj)

      // For date related stats
      dateStatistics(eachVehicle.flights, respectiveArr, turnAroundArr);
    }

    // For graphs 1-5
    typeCountObj.labelList.splice(0, 0, "Recovery failure");
    typeCountObj.dataList.splice(0, 0, recoveryFail);

    chartGenerator(overallSuccesObj, "Success Ratio");
    chartGenerator(typeCountObj, "Recovery stats");
    chartGenerator(flightLogObj, "Flight logged");
    chartGenerator(activeInactiveObj, "Active Ratio");
    chartGenerator(launchLocObj, "Launch locations");

    // For time related stats and graphs 6,7
    selectionSort(turnAroundArr, respectiveArr);

    let newFlightVReused = {
      labelList: ["New booster missions", "Re-used booster missions"],
      dataList: [totalFlights - turnAroundArr.length, turnAroundArr.length]
    }
    chartGenerator(newFlightVReused, "Reused v. New");

    barChartDemo(turnAroundArr);

    let sum = 0;
    for (let ele of overallSuccesObj.dataList) {
      sum += ele;
    }
    textStats(turnAroundArr, respectiveArr, sum, totalFlights);
  }
  /**
   * 
   * @param {*} flights Obj contating all of the vehicle's flight
   * @param {*} overallSuccesObj For overall mission success
   * @param {*} launchLocObj For launch location
   * @param {*} typeCountObj For recovery
   * @returns Number of  recovery fails
   */
  function generateStatistics(flights, overallSuccesObj, launchLocObj, typeCountObj) {
    let recoveryFail = 0;
    for (let eachFlight of flights) {
      if (eachFlight.typeVehicle != "Falcon Heavy Side Core") { // Avoid mis-counting mission success and launch locations 
        countObjFiller(overallSuccesObj, eachFlight.status); // for Falcon Heavy missions
        countObjFiller(launchLocObj, eachFlight.launchLoc);
      }

      if (eachFlight.recovery.status == "Failure") {
        recoveryFail++;
      } else {
        countObjFiller(typeCountObj, eachFlight.recovery.type);
      }
    }
    return recoveryFail;
  }

  /**
   * 
   * @param {*} flights Obj contating all of the vehicle's flight
   * @param {*} respectiveArr Holds which flights corinside with turnAroundArr
   * @param {*} turnAroundArr Holds times between flights
   */
  function dateStatistics(flights, respectiveArr, turnAroundArr) {
    for (let i = 1; i < flights.length; i++) {
      let currDateObj = flights[i].missionDate;
      let prevDateObj = flights[i - 1].missionDate;

      let currDate = new Date(currDateObj.date + " " + currDateObj.time);
      let prevDate = new Date(prevDateObj.date + " " + prevDateObj.time);
      let milisecDiff = currDate - prevDate;

      turnAroundArr.push(milisecDiff);
      respectiveArr.push("Between " + flights[i - 1].missionName + " and " + flights[i].missionName);
    }
  }

  /**
   * Edits object storing data for the graphs
   * @param {Object} obj  
   * @param {*} searchTerm 
   */
  function countObjFiller(obj, searchTerm) {
    let index = obj.labelList.findIndex(element => element == searchTerm);
    if (index < 0) { // If not already in labelList; i.e. the searchTerm is new
      obj.labelList.push(searchTerm);
      obj.dataList.push(1);
    } else { // Already in labelList
      obj.dataList[index]++;
    }
  }


  /**
   * Makes the pie charts
   * @param {*} obj Object contating data for graphs
   * @param {*} title Title of graph
   */
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
        data: obj.dataList
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
        document.getElementById("graphCP").innerText = "";
        document.getElementById("graphC").style = "background-color: rgb(255,255,255);"
        graphC = new Chart(
          document.getElementById('flightRatios'),
          config
        );
        break;
      case "Active Ratio":
        if (graphD) {
          graphD.destroy();
        }
        document.getElementById("graphDP").innerText = "";
        document.getElementById("graphD").style = "background-color: rgb(255,255,255);"
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
      case "Reused v. New":
        if (graphF) {
          graphF.destroy();
        }
        document.getElementById("graphFP").innerText = "";
        document.getElementById("graphF").style = "background-color: rgb(255,255,255);"
        graphF = new Chart(
          document.getElementById('reusedMissions'),
          config
        );
        break;
    }
  }


  /**
   * Creates line to show the "density" of turn around times
   * @param {*} arr Array that has data for graphs 
   */
  function barChartDemo(arr) {
    let newArr = [];
    let labels = [];

    for (let day = 0; day < Math.trunc(arr[arr.length - 1] / 86400000) + 1; day++) {
      let numFlightThatDay = 0;
      labels.push(day);
      for (let j = 0; j < arr.length; j++) {
        if (day == Math.trunc(arr[j] / 86400000)) {
          numFlightThatDay++;
        }
      }
      newArr.push(numFlightThatDay);
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
      document.getElementById('turnAround'),
      config
    );
  }

  /**
   * Text stats to show median, average, fastest, and slowest turn around
   * @param {*} respectiveArr Holds which flights corinside with turnAroundArr
   * @param {*} turnAroundArr Holds times between flights
   * @param {*} totalMissions Total missions
   * @param {*} totalFlights Total number of flights
   */
  function textStats(turnAroundArr, respectiveArr, totalMissions, totalFlights) {
    let textStats = document.getElementsByClassName("otherStats")[0];
    textStats.innerHTML = "";
    let text = "<b>Turn around stats.:</b><br>";
    if (turnAroundArr.length > 0) {
      text += "Median (\"typical\"): " + Math.trunc(turnAroundArr[Math.trunc(turnAroundArr.length / 2)] / 86400000);
      text += "<br>Average: " + Math.trunc(returnAvg(turnAroundArr) / 86400000);
      text += "<br>Fastest turn around of " + Math.trunc(turnAroundArr[0] / 86400000) + " days between launches of " + respectiveArr[0]; //fast 
      text += "<br>Slowest turn around of " + Math.trunc(turnAroundArr[turnAroundArr.length - 1] / 86400000) + " days between launches of " + respectiveArr[respectiveArr.length - 1]; //slowest
    } else {
      text += "Median (\"typical\"): N/A";
      text += "<br>Average: N/A";
      text += "<br>Fastest turn around of...N/A";
      text += "<br>Slowest turn around of...N/A";
    }
    text += "<br>Total missions to date: " + totalMissions;
    text += "<br>Total flights to date: " + totalFlights;
    let para = document.createElement("p");
    para.innerHTML = text;
    textStats.appendChild(para);
  }

  /**
   * 
   * @param {*} arr Sorts arr
   * @param {*} arr1 
   */
  function selectionSort(arr, arr1) {
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

  /**
   * 
   * @param {*} arr Arr of numbers
   * @returns The average of all the values in arr
   */
  function returnAvg(arr) {
    let total = 0;
    for (let curr of arr) {
      total += curr;
    }
    return total / arr.length;
  }

  /**
   * 
   */
  function displayBoosterInfo() {
    window.scrollTo({
      top: 0,
      bottom: 0,
      behavior: 'smooth'
    });
    let clickedCell = this.innerHTML;
    let requestedVehicele = vehicleJSON.find(element => element.name == clickedCell.substring(0, clickedCell.indexOf(',')));
    document.getElementById("graphShow").innerHTML = "Currently showing..." + clickedCell.substring(0, clickedCell.indexOf(','));

    let overallSuccesObj = {
      labelList: [],
      dataList: []
    }

    let recoveryFail = 0;
    // Recovery stats, failures maybe
    let typeCountObj = {
      labelList: [],
      dataList: []
    }

    // Launch location
    let launchLocObj = {
      labelList: [],
      dataList: []
    }

    // Stuff to calculate date
    let turnAroundArr = [];
    let respectiveArr = [];

    recoveryFail += generateStatistics(requestedVehicele.flights, overallSuccesObj, launchLocObj, typeCountObj)
    // For date related stats
    dateStatistics(requestedVehicele.flights, respectiveArr, turnAroundArr);

    // For graphs 1,2,5,7,8
    typeCountObj.labelList.splice(0, 0, "Recovery failure");
    typeCountObj.dataList.splice(0, 0, recoveryFail);

    chartGenerator(overallSuccesObj, "Success Ratio");
    chartGenerator(typeCountObj, "Recovery stats");
    chartGenerator(launchLocObj, "Launch locations");

    // For time related stats and graphs 6,7
    selectionSort(turnAroundArr, respectiveArr);

    barChartDemo(turnAroundArr);

    textStats(turnAroundArr, respectiveArr, requestedVehicele.flights.length, requestedVehicele.flights.length);

    let notAvailable = document.createElement("p");
    notAvailable.innerText = "Graph unavailable for specific vehicles, only the whole family."
    if (graphC) {
      graphC.destroy();
      document.getElementById("graphCP").innerText = "Graph unavailable for specific vehicles, only the whole family.";
      document.getElementById("graphC").style = "background-color: rgba(0,0,0,0.05);"
    }
    if (graphD) {
      graphD.destroy();
      document.getElementById("graphDP").innerText = "Graph unavailable for specific vehicles, only the whole family.";
      document.getElementById("graphD").style = "background-color: rgba(0,0,0,0.05);"
    }
    if (graphF) {
      graphF.destroy();
      document.getElementById("graphFP").innerText = "Graph unavailable for specific vehicles, only the whole family.";
      document.getElementById("graphF").style = "background-color: rgba(0,0,0,0.05);"
    }

  }
}