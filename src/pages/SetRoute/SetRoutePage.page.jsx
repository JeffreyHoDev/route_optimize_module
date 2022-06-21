import { useState, useEffect } from 'react'

import GoogleMapContainer from '../../utils/GoogleMaps/GoogleMapReact'
import CheckboxComponent from '../../components/checkbox/checkbox.component'

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';

import './setRoutePage.style.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const SetRoutePage = () => {
    
  const [mapObj, setMapObj] = useState(null)
  const [mapsObj, setMapsObj ] = useState(null)
  const [allStatesofCheckbox, setAllStatesofCheckbox] = useState(new Array(50).fill(false))
  const [tempRenderer, setTempRenderer] = useState(null)
  const [ buttonState, toggleButtonState ] = useState(false)
  const [ queryButtonState, toggleQueryButtonState ] = useState(false)
  const [ vehicles, setVehicles ] = useState([])
  const [ passengers, setPassengers ] = useState([])
  const [ newTrip, setNewTrip ] = useState({
    "origin": "",
    "destination": "",
    "assignedvehicle": ""
  })
  
  const classes = useStyles()

  const submitHandler = (event) => {
    event.preventDefault()
    // toggleButtonState(!buttonState)
  }

  const inputsHandler = (event) => {
    setNewTrip({...newTrip, [event.target.name]: event.target.value})
  }

  useEffect(() => {
    fetch('http://localhost:9999/getVehicles')
    .then(response => response.json())
    .then(data => setVehicles(data))
    .catch(err => console.log(`Error Vehicles Fetching: ${err}`))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9999/getPassengers')
    .then(response => response.json())
    .then(data => setPassengers(data))
    .catch(err => console.log(`Error Passengers Fetching: ${err}`))
  }, [])

  const processData = (event) => {
    event.preventDefault();
    toggleQueryButtonState(true)
      const updatedWaypointsToQuery = allStatesofCheckbox.map((state,index) => {
        if(state){
          return {
            "location": passengers[index].pickupaddress + passengers[index].postalcode
          }
        }
      })
  
      const cleanedWayPoints = updatedWaypointsToQuery.filter(item => item)
  
      const ToQueryDirection = {
        "origin": newTrip.origin,
        "destination": newTrip.destination,
        "waypoints": cleanedWayPoints,
        "optimizeWaypoints": true
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
                  toggleQueryButtonState(false)
                  if (status === mapsObj.DirectionsStatus.OK) {
                      
                      directionsRenderer.setDirections(result);
                  } else {
                      console.error(`error fetching directions ${result}`);
                      toggleQueryButtonState(false)
                  }
              }
          )

      }
  
      
  }

  const defaultProps = {
    center: {lat: 1.290270, lng: 103.851959}, 
    zoom: 10
  }
  



  const handleOnChange = (position) => {
    const updatedStatesofCheckbox = allStatesofCheckbox.map((item, index) => {
      return index === position ? !item: item
    })

    setAllStatesofCheckbox(updatedStatesofCheckbox)
  };

  const { center, zoom } = defaultProps
    return (
      <div className='setroute-page'>
        <h1>Set Trip</h1>
        <div className="setroute-page-container">
            <GoogleMapContainer
                center={center} 
                zoom={zoom} 
                allStatesofCheckbox={allStatesofCheckbox} 
                origin={newTrip.origin} 
                destination={newTrip.destination}
                setMapObj={setMapObj}
                setMapsObj={setMapsObj}

                />
              <Box
                component="form"
                autoComplete="off"
                onSubmit={submitHandler}
              >
            <div className='inputs-container'>
                <div className='checkbox-container'>
                  {

                    passengers.length === 0 ? <h2>No passengers registered yet</h2> :
                    passengers.map((passenger, index) => {
                      return <CheckboxComponent 
                      key={`passenger-${index}`} 
                      name={`${passenger.passengername} (${passenger.pickupaddress}, ${passenger.postalcode})`} 
                      index={index} 
                      states={allStatesofCheckbox} 
                      handleOnChange={handleOnChange} 
                      />
                  })
                  }
                </div>
                <div className='other-inputs-container'>
                  <div className='origin-input'>
                    <TextField id="origin" label="Origin" variant="outlined" type="text" name="origin" onChange={inputsHandler} required />
                  </div>
                  <div className='destination-input'>
                    <TextField id="destination" label="Destination" variant="outlined" type="text" name="destination" onChange={inputsHandler} required/>
                  </div>
                  <div className='vehicle-input'>
                    <FormControl className={classes.formControl} fullWidth >
                        <InputLabel id="assigned-vehicle-label">Assigned Vehicle</InputLabel>
                        <Select
                            labelId="assigned-vehicle-label" 
                            id="assignedvehicle" 
                            label="Assigned Vehicle"
                            name="assignedvehicle" 
                            onChange={inputsHandler} 
                            value={newTrip.assignedvehicle} 
                            required
                        >
                        {
                            vehicles.map(vehicle => <MenuItem key={`assignedvehicle-${vehicle.id}`} value={vehicle.vehicleplate}>{vehicle.vehicleplate.toUpperCase()}</MenuItem>)
                        }
                        </Select>
                    </FormControl>                
                  </div>
                  <div className='button-container'>
                    <Button variant="contained" disabled={queryButtonState} color="secondary" onClick={processData}>Query Route</Button>
                    <Button variant="contained" type="submit" disabled={buttonState} color="primary">Set the Plan</Button>
                  </div>
                </div>
              
            </div>
            </Box>
        </div>

      </div>
    )
}

export default SetRoutePage