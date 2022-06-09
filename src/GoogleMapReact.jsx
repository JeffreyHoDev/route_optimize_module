import GoogleMapReact from 'google-map-react';
import './map.css'
import { key } from './constant'
import { useState } from 'react';

const GoogleMapContainer = ({center, zoom}) => {



    const [mapObj, setMapObj] = useState(null)
    const [mapsObj, setMapsObj ] = useState(null)

    

    const handle = () => {

        if(mapsObj!== null && mapObj !== null ) {
            const directionService = new mapsObj.DirectionsService()
            const directionsRenderer = new mapsObj.DirectionsRenderer();

            directionsRenderer.setMap(mapObj)
            // const origin = "Oxley Bizhub 2"
            // const destination = "250B Compassvale Street"

            const arrayofplaces = {
                "origin": "Oxley Bizhub 2",
                "destination": "250B Compassvale Street",
                travelMode: mapsObj.TravelMode.DRIVING,
                waypoints: [
                    {
                        location: "Seletar Mall"
                    },
                    {
                        location: "Hougang Mall"
                    },
                ]
            }

            directionService.route(
            arrayofplaces,
                (result, status) => {
                    if (status === mapsObj.DirectionsStatus.OK) {
                        directionsRenderer.setDirections(result);
                    } else {
                    console.error(`error fetching directions ${result}`);
                    }
                }
            )
        }
    }

    return (
        <div className='map-container'>
            <GoogleMapReact 
                bootstrapURLKeys={{
                    key: key, 
                    language: 'en'
                }}
                defaultZoom={zoom} 
                defaultCenter={center} 
                yesIWantToUseGoogleMapApiInternals={true} 
                onGoogleApiLoaded={({ map, maps }) => {
                    setMapObj(map)
                    setMapsObj(maps)
                    
                }}
            ></GoogleMapReact>
            <button type="button" onClick={handle}>Test</button>
        </div>

    )
}

export default GoogleMapContainer