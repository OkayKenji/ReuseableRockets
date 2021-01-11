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
//  - Space Shuttles (and maybe the SRBs??)
let jsonData;
let falconB5Data;

function preload() {
  let url = 'https://raw.githubusercontent.com/OkayKenji/RocketsRCool/master/launchFile.json'
  jsonData = loadJSON(url);
}

function setup() {
  falconB5Data = jsonData.falcons.boosters;
  let tempHeight = 0;
  for (let i = 0; i < falconB5Data.length; i++) {

    tempHeight += falconB5Data[i].flights.length;
  }
  createCanvas(5000, tempHeight * 32 + falconB5Data.length * 16 + 40);
}

function draw() {
  console.log(jsonData);
  background(255);
  fill(0);
  strokeWeight(2);
  textSize(32)

  text("S/N", 0, 32);
  text("Status", 100, 32)
  text("# Flights", 220, 32);
  text("Flights", 350, 32);
  text("Mission name", 450, 32);
  text("Mission date", 1010, 32);
  text("Mission time", 1200, 32);
  text("Launch location", 1390, 32);
  text("Recovery type", 1620, 32);
  text("Recovery name", 1830, 32);
  text("Recovery status", 2060, 32);
  text("Mission status", 2295, 32);
  text("Notes", 2500, 32);
  
  
  let pos = 64;
  for (let i = 0; i < falconB5Data.length; i++) {

    text("B" + falconB5Data[i].name, 0, pos);
    text(falconB5Data[i].status, 100, pos)
    text(falconB5Data[i].flights.length, 220, pos);
    let flightData = falconB5Data[i].flights;
    for (let j = 0; j < flightData.length; j++) {
      text(j + 1, 350, pos);
      let f = flightData[j];
      //text(flightData[j].missionName,450,pos);
      text(f.missionName,450,pos);
      text(f.missionDate.date,1010,pos);
      text(f.missionDate.time,1200,pos);
      text(f.launchLoc,1390,pos);
      text(f.recovery.type,1620,pos);
      text(f.recovery.name,1830,pos);
      text(f.recovery.status,2060,pos);
      text(f.status,2295,pos);
      text(f.notes,2500,pos);
      pos += 32;
    }
    pos += 16;
  }

  noLoop();
}
