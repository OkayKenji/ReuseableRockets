let rockets = 
{
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
              status : "TActive",
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
                  missionDate : { date : "08/07", time : "05:12" },
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
            },
            {  
              name : 1053, 
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