import { useState } from 'react'

import GoogleMapContainer from '../../utils/GoogleMaps/GoogleMapReact'
import Checkbox from '../../components/checkbox/checkbox.component'



const SetRoutePage = () => {
    
  const [mapObj, setMapObj] = useState(null)
  const [mapsObj, setMapsObj ] = useState(null)
  const [tempRenderer, setTempRenderer] = useState(null)
  

  const processData = () => {

      const updatedWaypointsToQuery = allStatesofCheckbox.map((state,index) => {
        if(state){
          return {
            "location": placesName[index].name
          }
        }
      })
  
      const cleanedWayPoints = updatedWaypointsToQuery.filter(item => item)
  
      const ToQueryDirection = {
        "origin": origin,
        "destination": destination,
        "waypoints": cleanedWayPoints,
      }

      if(mapObj !== null && mapsObj !== null && ToQueryDirection !== null ) {
          

          const directionService = new mapsObj.DirectionsService()
          const directionsRenderer = new mapsObj.DirectionsRenderer()
          if(tempRenderer !== null){
              tempRenderer.setMap(null)
              setTempRenderer(directionsRenderer)
          }else {
              setTempRenderer(directionsRenderer)

          }

          directionsRenderer.setMap(mapObj)

          ToQueryDirection.travelMode = mapsObj.TravelMode.DRIVING
  
          directionService.route(
              ToQueryDirection,
              (result, status) => {
                  console.log(result)
                  if (status === mapsObj.DirectionsStatus.OK) {
                      
                      directionsRenderer.setDirections(result);
                      
                      
                  } else {
                      console.error(`error fetching directions ${result}`);
                  }
              }
          )

      }
  

  }

  const defaultProps = {
    center: {lat: 1.290270, lng: 103.851959}, 
    zoom: 10
  }
  
  const [allStatesofCheckbox, setAllStatesofCheckbox] = useState(new Array(4).fill(false))
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")


  
  const placesName = [
    {
      "name": "Boon Lay"
    },
    {
      "name": "Seletar Mall"
    },
    {
      "name": "Le Crescendo"
    },
    {
      "name": "Ang Mo Kio Hub"
    },
  ]



  const handleOnChange = (position) => {
    const updatedStatesofCheckbox = allStatesofCheckbox.map((item, index) => {
      return index === position ? !item: item
    })
    setAllStatesofCheckbox(updatedStatesofCheckbox)
  };

  const { center, zoom } = defaultProps
    return (
        <div className="setroute-page-container">
            <GoogleMapContainer placesName={placesName} 
                center={center} 
                zoom={zoom} 
                allStatesofCheckbox={allStatesofCheckbox} 
                origin={origin} 
                destination={destination}
                setMapObj={setMapObj}
                setMapsObj={setMapsObj}

                />
            <div className='inputs-container'>
                <div className='checkbox-container'>
                {
                placesName.map((item, index) => {
                    return <Checkbox key={`checkbox-${index}`} name={item.name} index={index} states={allStatesofCheckbox} handleOnChange={handleOnChange}/>
                })
                }
                </div>
                <div className='other-inputs-container'>
                <div className='origin-input'>
                    <label htmlFor='origin'>Origin: </label>
                    <input type="text" name="origin" onChange={(event) => setOrigin(event.target.value)}/>
                </div>
                <div className='destination-input'>
                    <label htmlFor='destination'>Destination: </label>
                    <input type="text" name="destination" onChange={(event) => setDestination(event.target.value)} />
                </div>
                </div>
                <button onClick={processData}>Query</button>
            </div>
        </div>
    )
}