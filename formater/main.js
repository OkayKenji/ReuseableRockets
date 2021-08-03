let list = [];
let list1 = [];
let jsonData;
let univObj;

function preload() {
    jsonData = loadJSON("../launchfile.json");
}

function setup() {
    noCanvas();
    document.getElementById("ld").addEventListener("click", onLoadData);
    document.getElementById("oanb").addEventListener("click", onOverrideOrNew);
    document.getElementById("addFlight").addEventListener("click", onAddFlight);
    document.getElementById("numFlights").addEventListener("change", onChangeOFFlights);
    genFlightInputs();
}

function draw() {
    noLoop();
}

function returnCurrJSON() {
    let lookUpType = document.getElementById("vehicle").value;

    let vehicleJSON;

    switch (lookUpType) {
        case "spxF9FH":
            vehicleJSON = jsonData.spacex.boosters;
            break;
        case "spxDragon2":
            vehicleJSON = jsonData.spacex.dragon2;
            break;
        // case "spxStarship":
        //     vehicleJSON = jsonData.spacex.starship;
        //     break;
        case "rklbElectron":
            vehicleJSON = jsonData.rklb.electron;
            break;
        case "boNS":
            vehicleJSON = jsonData.bo.newShepard;
            break;
    }
    return vehicleJSON;
}

// helper to get data from json to page
function onLoadData() {
    let requestedSN = document.getElementById("boosterSN").value;
    
    let vehicleJSON = returnCurrJSON();
    let i = vehicleJSON.findIndex(element => element.name == requestedSN);

    if (i <= -1) {
        alert("Error! Booster or capsule not found!");
        return;
    }

    let currVehicl = vehicleJSON[i];

    document.getElementById("boosterStatus").value = currVehicl.status;
    document.getElementById("numFlights").value = currVehicl.flights.length;
    genFlightInputs();
    fillOtherInputs(currVehicl.flights);
}

/**
 * Extracts data from page.
 */
function onOverrideOrNew() {
    let newObj = {};
    // name, stautus of booster
    newObj.name = document.getElementById("boosterSN").value;
    newObj.status = document.getElementById("boosterStatus").value;
    newObj.flights = [];

    for (let i = 0; i < Number.parseInt(document.getElementById("numFlights").value); i++) {
        let newFlightObj = {};

        for (let j = 0; j < 12; j++) {
            let assigned = document.getElementById((i + 1) + "," + j).value;
            switch (j) {
                case 0:
                    // do nothing
                    break;
                case 1:
                    newFlightObj.missionName = assigned;
                    break;
                case 2:
                    newFlightObj.typeVehicle = assigned;
                    newFlightObj.missionDate = {};
                    break;
                case 3:
                    if (assigned.length != 10)
                        alert("Invalid date! " + newFlightObj.missionName);
                        newFlightObj.missionDate.date = assigned;
                    break;
                case 4:
                    if (assigned.length != 5)
                        alert("Invalid time! " + newFlightObj.missionName);
                        newFlightObj.missionDate.time = assigned;
                    break;
                case 5:
                    newFlightObj.launchLoc = assigned;
                    newFlightObj.recovery = {};
                    break;
                case 6:
                    newFlightObj.recovery.type = assigned;
                    break;
                case 7:
                    newFlightObj.recovery.name = assigned;
                    break;
                case 8:
                    newFlightObj.recovery.status = assigned;
                    break;
                case 9:
                    newFlightObj.status = assigned;
                    break;
                case 10:
                    newFlightObj.notes = assigned;
                    break;
                case 11:
                    newFlightObj.launchLink = assigned;
                    break;
            }
        }
        newObj.flights.push(newFlightObj)

    }
    univObj = newObj;
    document.getElementById("sample").innerText = JSON.stringify(univObj, null, 1);
    let saveButton = document.createElement("button");
    saveButton.innerText = "Save to file";
    proccessJSON();
    saveButton.addEventListener("click", saveToFile)
    document.getElementById("saveDiv").appendChild(saveButton);
}

/**
 * converts input to json object
 */
function proccessJSON() {
    let ssssss = returnCurrJSON();
    let index = ssssss.findIndex(element => element.name == document.getElementById("boosterSN").value);

    if (index <= -1) { // for cases where it's a new 
        ssssss.push(univObj);
    } else { //modifying a existing booster      
        ssssss[index] = univObj;
    }

    let currentDateTime = new Date();

    jsonData.lastUpdate.date = (currentDateTime.getMonth() + 1) + "/" + currentDateTime.getDate() + "/" + currentDateTime.getFullYear();
    jsonData.lastUpdate.time = currentDateTime.getHours() + ":" + currentDateTime.getMinutes();

    console.log(jsonData);
}

function saveToFile() {
    saveJSON(jsonData, "launchFile");
}

//fiils in the inputs
function fillOtherInputs(flightList) {
    for (let i = 0; i < flightList.length; i++) {
        let newFlightObj = flightList[i];

        for (let j = 0; j < 12; j++) {
            let assigned = document.getElementById((i + 1) + "," + j);
            switch (j) {
                case 0:
                    // do nothing
                    break;
                case 1:
                    assigned.value = newFlightObj.missionName;
                    break;
                case 2:
                    assigned.value = newFlightObj.typeVehicle;
                    break;
                case 3:
                    assigned.value = newFlightObj.missionDate.date;
                    break;
                case 4:
                    assigned.value = newFlightObj.missionDate.time;
                    break;
                case 5:
                    assigned.value = newFlightObj.launchLoc;
                    break;
                case 6:
                    assigned.value = newFlightObj.recovery.type;
                    break;
                case 7:
                    assigned.value = newFlightObj.recovery.name;
                    break;
                case 8:
                    assigned.value = newFlightObj.recovery.status;
                    break;
                case 9:
                    assigned.value = newFlightObj.status;
                    break;
                case 10:
                    assigned.value = newFlightObj.notes;
                    break;
                case 11:
                    assigned.value = newFlightObj.launchLink;
                    break;
            }
        }

    }
}

//for when add flight button clicked
function onAddFlight() {
    document.getElementById("numFlights").value = Number.parseInt(document.getElementById("numFlights").value) + 1;
    genFlightInputs();

    let currVehicl = returnCurrJSON();
    let i = currVehicl.findIndex(element => element.name == document.getElementById("boosterSN").value);
    if (i >= 0) {
        let currSpficBooster = currVehicl[i];
        fillOtherInputs(currSpficBooster.flights);
    }

}

//for when the number of flights is changed by user
function onChangeOFFlights() {
    genFlightInputs();
}

//Displays inputs for each mission.
function genFlightInputs() {
    document.getElementById("missionInfo").innerHTML = ""; //resets 

    for (let i = 0; i < Number.parseInt(document.getElementById("numFlights").value); i++) {
        let tempDIV = document.createElement("div");
        tempDIV.setAttribute("class", "indivFlight");
        for (let j = 0; j < 12; j++) {
            let tempID;
            let tempInput = document.createElement("input");
            let tempLabel = document.createElement("label");
            switch (j) {
                case 0:
                    tempInput.type = "number";
                    tempInput.value = i + 1;
                    tempInput.style.width = "40px"
                    tempLabel.innerHTML = "Flight #:"
                    break;
                case 1:
                    tempInput.type = "text";
                    tempLabel.innerHTML = "Mission name:"
                    tempInput.style.width = "80px"
                    break;
                case 2:
                    tempInput.type = "text";
                    tempLabel.innerHTML = "LV type:"
                    tempInput.style.width = "80px"
                    break;
                case 3:
                    tempInput.type = "text";
                    tempLabel.innerHTML = "Date:"
                    tempInput.style.width = "80px"
                    break;
                case 4:
                    tempInput.type = "text";
                    tempLabel.innerHTML = "Time:"
                    tempInput.style.width = "45px"
                    break;
                case 5:
                    tempInput.type = "text";
                    tempLabel.innerHTML = "Launch Loc:"
                    tempInput.style.width = "50px"
                    break;
                case 6:
                    tempInput.type = "text";
                    tempLabel.innerHTML = "Recovey type:"
                    tempInput.style.width = "80px"
                    break;
                case 7:
                    tempInput.type = "text";
                    tempLabel.innerHTML = "Rec. name:"
                    tempInput.style.width = "80px"
                    break;
                case 8:
                    tempInput.type = "text";
                    tempLabel.innerHTML = "Rec. status:"
                    tempInput.style.width = "80px"
                    break;
                case 9:
                    tempInput.type = "text";
                    tempLabel.innerHTML = "Mission status:"
                    tempInput.style.width = "80px"
                    break;
                case 10:
                    tempInput.type = "text";
                    tempLabel.innerHTML = "Notes:"
                    break;
                case 11:
                    tempInput.type = "text";
                    tempLabel.innerHTML = "Link:"
                    break;

            }
            tempID = "" + (i + 1) + "," + j;
            tempInput.id = tempID;
            tempLabel.setAttribute("for", tempID);
            tempDIV.appendChild(tempLabel);
            tempDIV.appendChild(tempInput);
        }
        document.getElementById("missionInfo").appendChild(tempDIV);
    }


}