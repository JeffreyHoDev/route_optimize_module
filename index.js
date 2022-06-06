// const {Client} = require("@googlemaps/google-maps-services-js");

// const client = new Client({})

// client.directions({
//     params: {
//         key: "AIzaSyDpPFnwbANv2SiAfLBgji1dM3jpw_E0MjM"
//     }
// })

import fetch from 'node-fetch'
const callGoogle = () => {
    let key = "AIzaSyDpPFnwbANv2SiAfLBgji1dM3jpw_E0MjM"
    fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=Oxley+Bizhub+2&destination=250B+Compassvale+Street&key=${key}&region=SG&waypoints=optimize:true|Seletar+Mall|Tampines+Mall`)
    .then(response => response.json())
    .then(data => {
        console.log(data.routes[0].legs[0].steps)
    })

}