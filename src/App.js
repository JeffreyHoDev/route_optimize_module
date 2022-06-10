import './App.css'
import { useEffect, useState } from 'react'

import GoogleMapContainer from './GoogleMapReact'
import Checkbox from './components/checkbox/checkbox.component'


const App = () => {

  const defaultProps = {
    center: {lat: 1.290270, lng: 103.851959}, 
    zoom: 10
  }
  
  const [allStatesofCheckbox, setAllStatesofCheckbox] = useState(new Array(4).fill(false))
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [queryData, setQueryData] = useState(null)

  
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

    setQueryData(ToQueryDirection)
  }

  const handleOnChange = (position) => {
    const updatedStatesofCheckbox = allStatesofCheckbox.map((item, index) => {
      return index === position ? !item: item
    })
    setAllStatesofCheckbox(updatedStatesofCheckbox)
  };

  const { center, zoom } = defaultProps


  useEffect(() => {
    console.log(queryData)
  }, [queryData])

  return (
    <div className="App">

      <GoogleMapContainer center={center} zoom={zoom} queryData={queryData} />
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

export default App