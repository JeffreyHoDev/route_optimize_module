import GoogleMapReact from 'google-map-react';
import './map.css'
import { key } from '../../constant'


const GoogleMapContainer = ({ center, zoom, setMapObj, setMapsObj }) => {


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
            >
            </GoogleMapReact>
            

        </div>

    )
}

export default GoogleMapContainer