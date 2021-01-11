let rockets = {
    falcons : {
        boosters : [
            { 
              name : 1046, 
              status : "Inactive",
              flights : [
                {
                  missionName : "Bangabandhu Sat-1",
                  falconType  : "Falcon 9",
                  missionDate : { date : "05/11/2018", time : "20:14" },
                  launchLoc    : "LC-39A",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : "First Block 5 Falcon 9 to be launched."
                },
                {
                  missionName : "Merah Putin",
                  falconType  : "Falcon 9",
                  missionDate : { date : "08/07/2018", time : "05:18" },
                  launchLoc    : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : "First reflight of a Block 5 Falcon 9." 
                },
                {
                  missionName : "Spaceflight SSO-A",
                  falconType  : "Falcon 9",
                  missionDate : { date : "12/3/2018", time : "18:34" },
                  launchLoc    : "SLC-4E",
                  recovery    : { type: "Drone ship", name : "JRtI", status : "Successful" },
                  status      : "Successful",
                  notes       : "First Falcon booster to fly from three diffrent launch pads." 
                },
                {
                  missionName : "Dragon Launch Escape Demonstration",
                  falconType  : "Falcon 9",
                  missionDate : { date : "01/19/2020", time : "15:30" },
                  launchLoc    : "LC-39A",
                  recovery    : { type: "No attempt", name : "", status : "Expended" },
                  status      : "Successful",
                  notes       : "Mission demonstrated Dragon's ability to escape off of Falcon 9 in case of an emergency. The booster was destroyed by aerodynamic forces after the escape." 
                }  
              ]
            },
            {
              name : 1047, 
              status : "Inactive",
              flights : [
                {
                  missionName : "Telstar 19V",
                  falconType  : "Falcon 9",
                  missionDate : { date : "07/22/2018", time : "05:50" },
                  launchLoc    : "SLC-40",
                  recoveryL   : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "Es'hail-2",
                  falconType  : "Falcon 9",
                  missionDate : { date : "11/15/2018", time : "20:46" },
                  launchLoc    : "LC-39A",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "AMOS-17",
                  falconType  : "Falcon 9",
                  missionDate : { date : "08/07/2019", time : "23:23" },
                  launchLoc    : "SLC-40",
                  recovery    : { type: "No attempt", name : "", status : "Expended" },
                  status      : "Successful",
                  notes       : "Booster was not recovered per the mission requirments."
                }
              ] 
            },
            {
              name : 1048,
              status : "Inactive",
              flights : [
                {
                  missionName : "Iridium-7",
                  falconType  : "Falcon 9",
                  missionDate : { date : "07/25/2018", time : "11:39" },
                  launchLoc    : "SLC-4E",
                  recovery    : { type: "Drone ship", name : "JRtI", status : "Successful" },
                  status      : "Successful",
                  notes       : "Landed Successfully despite bad weather."
                },
                {
                  missionName : "SAOCOM 1A",
                  falconType  : "Falcon 9",
                  missionDate : { date : "10/08/2018", time : "02:22" },
                  launchLoc    : "SLC-4E",
                  recovery    : { type: "Landing zone", name : "LZ-4", status : "Successful" },
                  status      : "Successful",
                  notes       : "First landing at LZ-4."
                },
                {
                  missionName : "Nusantara Satu",
                  falconType  : "Falcon 9",
                  missionDate : { date : "02/22/2019", time : "01:45" },
                  launchLoc    : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : "One payload was sent to lunar orbit."
                },
                {
                  missionName : "Starlink 1 v1.0",
                  falconType  : "Falcon 9",
                  missionDate : { date : "11/11/2019", time : "14:56" },
                  launchLoc    : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : "First operational Starlinks! First flight to refly fairings."
                },
                {
                  missionName : "Starlink 5 v1.0",
                  falconType  : "Falcon 9",
                  missionDate : { date : "03/18/2020", time : "12:16" },
                  launchLoc    : "LC-39A",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Failure" },
                  status      : "Successful",
                  notes       : "On accent an engine failure occurred due to cleaning fluid stuck inside a sensor in the engine. May have caused another engine failure during the decent. "
                },
              ]
            },
            {  
              name : 1049, 
              status : "Active",
              flights : [
                {
                  missionName : "Telstar 18V",
                  falconType  : "Falcon 9",
                  missionDate : { date : "09/10/2018", time : "04:45" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "Iridium-8",
                  falconType  : "Falcon 9",
                  missionDate : { date : "01/11/2019", time : "15:31" },
                  launchLoc   : "SLC-4E",
                  recovery    : { type: "Drone ship", name : "JRtI", status : "Successful" },
                  status      : "Successful",
                  notes       : "Finial launch of Iridium satellites with SpaceX in the NEXT contract. All satellites were deployed successfully."
                },
                {
                  missionName : "Starlink v0.9",
                  falconType  : "Falcon 9",
                  missionDate : { date : "05/24/2019", time : "02:30" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : "First large launch batch of Starlink satellites (60). They were of production design but not yet operational."
                },
                {
                  missionName : "Starlink 2 v1.0",
                  falconType  : "Falcon 9",
                  missionDate : { date : "01/07/2020", time : "02:33" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "Starlink 7 v1.0",
                  falconType  : "Falcon 9",
                  missionDate : { date : "06/04/2020", time : "01:25" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "JRtI", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "Starlink 10 v1.0 (with Skysats 19-21)",
                  falconType  : "Falcon 9",
                  missionDate : { date : "08/18/2020", time : "14:31" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : "Only launched 58 satellites."
                },
                {
                  missionName : "Starlink 15 v1.0",
                  falconType  : "Falcon 9",
                  missionDate : { date : "11/25/2020", time : "02:13" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : "First booster to fly for the 7th time."
                },
              ] 
            },
            {  
              name : 1050, 
              status : "Inactive",
              flights : [
                {
                  missionName : "CRS-16",
                  falconType  : "Falcon 9",
                  missionDate : { date : "12/05/2018", time : "18:16" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Landing zone", name : "LZ-1", status : "Failure" },
                  status      : "Successful",
                  notes       : "Grid fin hydraulic pump stalled. Made a soft water landing."
                },
              ] 
            },
            {  
              name : 1051, 
              status : "Active",
              flights : [
                {
                  missionName : "Crew Demo-1",
                  falconType  : "Falcon 9",
                  missionDate : { date : "03/02/2019", time : "07:49" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : "First launch of a human-rated version of Dragon."
                },
                {
                  missionName : "RADARSAT Constellation",
                  falconType  : "Falcon 9",
                  missionDate : { date : "06/12/2019", time : "14:17" },
                  launchLoc   : "SLC-4E",
                  recovery    : { type: "Ground pad", name : "LZ-4", status : "Successful" },
                  status      : "Successful",
                  notes       : "Launched three satellites, prior to deployment they can be seen moving into position for deployment."
                },
                {
                  missionName : "Starlink 3 v1.0",
                  falconType  : "Falcon 9",
                  missionDate : { date : "01/29/2020", time : "14:07" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "Starlink 6 v1.0",
                  falconType  : "Falcon 9",
                  missionDate : { date : "04/22/2020", time : "19:30" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "Starlink 9 v1.0 (with SXRS-1)",
                  falconType  : "Falcon 9",
                  missionDate : { date : "08/07/2020", time : "05:12" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : "Only launched 57 Starlinks. "
                },
                {
                  missionName : "Starlink 13 v1.0",
                  falconType  : "Falcon 9",
                  missionDate : { date : "10/18/2020", time : "12:25" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "SXM-7",
                  falconType  : "Falcon 9",
                  missionDate : { date : "12/13/2020", time : "17:30" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "JRtI", status : "Successful" },
                  status      : "Successful",
                  notes       : "First time a customer flew on a booster with significant flights. Also first dedicated customer launch where fairings were previously flown."
                }      
              ] 
            },
            {  
              name : 1052, 
              status : "Active",
              flights : [
                {
                  missionName : "Arabsat-6A",
                  falconType  : "Falcon Heavy",
                  missionDate : { date : "04/11/2019", time : "22:35" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Ground pad", name : "LZ-1/LZ-2", status : "Successful" },
                  status      : "Successful",
                  notes       : "First Block 5 variant of the Falcon Heavy to be launched."
                },
                {
                  missionName : "STP-2",
                  falconType  : "Falcon Heavy",
                  missionDate : { date : "06/25/2019", time : "06:30" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Ground pad", name : "LZ-1/LZ-2", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
              ] 
            },
            {  
              name : 1053, 
              status : "Active",
              flights : [
                {
                  missionName : "Arabsat-6A",
                  falconType  : "Falcon Heavy",
                  missionDate : { date : "04/11/2019", time : "22:35" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Ground pad", name : "LZ-1/LZ-2", status : "Successful" },
                  status      : "Successful",
                  notes       : "First Block 5 variant of the Falcon Heavy to be launched."
                },
                {
                  missionName : "STP-2",
                  falconType  : "Falcon Heavy",
                  missionDate : { date : "06/25/2019", time : "06:30" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Ground pad", name : "LZ-1/LZ-2", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
              ] 
            },
            {  
              name : 1054, 
              status : "Inactive",
              flights : [
                {
                  missionName : "GPS III SV01",
                  falconType  : "Falcon 9",
                  missionDate : { date : "12/22/2018", time : "13:51" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "No attempt", name : "", status : "Expended" },
                  status      : "Successful",
                  notes       : "Per the mission requirements the booster was expended."
                },
              ] 
            },
            {  
              name : 1055, 
              status : "Inactive",
              flights : [
                {
                  missionName : "Arabsat-6A",
                  falconType  : "Falcon Heavy",
                  missionDate : { date : "04/11/2919", time : "22:35" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Failure" },
                  status      : "Successful",
                  notes       : "After a good landing, center core fell over in the seas because octograbber was not configured for the center core ."
                },
              ] 
            },
            {  
              name : 1056, 
              status : "Inactive",
              flights : [
                {
                  missionName : "CRS-17",
                  falconType  : "Falcon 9",
                  missionDate : { date : "05/04/2019", time : "06:48" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "CRS-18",
                  falconType  : "Falcon 9",
                  missionDate : { date : "07/25/2019", time : "22:01" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Ground pad", name : "LZ-1", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "JCSAT-18/Kacific1",
                  falconType  : "Falcon 9",
                  missionDate : { date : "12/17/2019", time : "00:10" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "Starlink 4 v1.0",
                  falconType  : "Falcon 9",
                  missionDate : { date : "02/17/2020", time : "15:05" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Failure" },
                  status      : "Successful",
                  notes       : "Booster was loaded with incorrect data leading to a landing failure."
                },
              ] 
            },
            {  
              name : 1057, 
              status : "Inactive",
              flights : [
                {
                  missionName : "STP-2",
                  falconType  : "Falcon Heavy",
                  missionDate : { date : "06/25/2019", time : "06:30" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Failure" },
                  status      : "Successful",
                  notes       : "High entry forces and heat caused the TVC in the center engine to fail causing the landing to fail."
                }
              ] 
            },
            {  
              name : 1058, 
              status : "Active",
              flights : [
                {
                  missionName : "Crew Demo-2",
                  falconType  : "Falcon 9",
                  missionDate : { date : "05/30/2020", time : "19:22" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : "Mission successfully launched Bob Behnken and Doug Hurley safely to the ISS."
                },
                {
                  missionName : "ANASIS-II",
                  falconType  : "Falcon 9",
                  missionDate : { date : "07/20/2020", time : "21:30" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "JRtI", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "Starlink 12 v1.0",
                  falconType  : "Falcon 9",
                  missionDate : { date : "10/06/2020", time : "11:29" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "CRS-21",
                  falconType  : "Falcon 9",
                  missionDate : { date : "12/06/2020", time : "16:17" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : "First cargo launch of new Dragon variant."
                },        
              ] 
            },
            {  
              name : 1059, 
              status : "Active",
              flights : [
                {
                  missionName : "CRS-19",
                  falconType  : "Falcon 9",
                  missionDate : { date : "12/05/2019", time : "17:29" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "CRS-20",
                  falconType  : "Falcon 9",
                  missionDate : { date : "03/07/2020", time : "04:50" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "Starlink 8 v1.0 (with Skysats 16-18)",
                  falconType  : "Falcon 9",
                  missionDate : { date : "06/13/2020", time : "09:21" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : "Only launched 58 satellites."
                },
                {
                  missionName : "SAOCOM 1B",
                  falconType  : "Falcon 9",
                  missionDate : { date : "08/30/2020", time : "23:18" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Ground pad", name : "LZ-1", status : "Successful" },
                  status      : "Successful",
                  notes       : "First polar launch from from Florida since the 1960s."
                },
                {
                  missionName : "NROL-108",
                  falconType  : "Falcon 9",
                  missionDate : { date : "112/19/2020", time : "14:00" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Ground pad", name : "LZ-1", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },       
              ] 
            },
            {  
              name : 1060, 
              status : "Active",
              flights : [
                {
                  missionName : "GPS III SV03",
                  falconType  : "Falcon 9",
                  missionDate : { date : "06/30/2020", time : "20:10" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "JRtI", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "Starlink 11 v1.0",
                  falconType  : "Falcon 9",
                  missionDate : { date : "09/03/2020", time : "12:46" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Drone ship", name : "OCISLY", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "Starlink 14 v1.0",
                  falconType  : "Falcon 9",
                  missionDate : { date : "10/24/2020", time : "15:31" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "JRtI", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                },
                {
                  missionName : "Turksat 5A",
                  falconType  : "Falcon 9",
                  missionDate : { date : "01/08/2021", time : "2:15" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "JRtI", status : "Successful? " },
                  status      : "Successful",
                  notes       : ""
                },
              ] 
            },
            {  
              name : 1061, 
              status : "Active",
              flights : [
                {
                  missionName : "Crew-1",
                  falconType  : "Falcon 9",
                  missionDate : { date : "11/16/2020", time : "00:27" },
                  launchLoc   : "LC-39A",
                  recovery    : { type: "Drone ship", name : "JRtI", status : "Successful" },
                  status      : "Successful",
                  notes       : "Successfully launched Mike Hopkins, Victor Glover, Shannon Walker, and Sochi Noguchi."
                },
              ] 
            },
            {  
              name : 1062, 
              status : "Active",
              flights : [
                {
                  missionName : "GPS III SV04",
                  falconType  : "Falcon 9",
                  missionDate : { date : "11/05/2020", time : "23:24" },
                  launchLoc   : "SLC-40",
                  recovery    : { type: "Drone ship", name : "JRtI", status : "Successful" },
                  status      : "Successful",
                  notes       : "Initial landing was scrubbed due to higher then expected pressure in the gas generators due to left over lacquer."
                },       
              ] 
            },
            {  
              name : 1063, 
              status : "Active",
              flights : [
                {
                  missionName : "Sentinel-6",
                  falconType  : "Falcon 9",
                  missionDate : { date : "11/21/2020", time : "17:17" },
                  launchLoc   : "SLC-4E",
                  recovery    : { type: "Ground pad", name : "LZ-4", status : "Successful" },
                  status      : "Successful",
                  notes       : ""
                }  
              ] 
            },
            {  
              name : "S/N", 
              status : "THE STATUS OF THE BOOOSTER",
              flights : [
                {
                  missionName : "",
                  falconType  : "",
                  missionDate : { date : "//", time : ":" },
                  launchLoc    : "",
                  recovery    : { type: "", name : "", status : "" },
                  status      : "",
                  notes       : ""
                }
              ] 
            }
        ]
    }
}
