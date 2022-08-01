import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';

import { useState, useEffect } from 'react'

import './addVehicle.style.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));



const AddVehicleComponent = ({addVehicleComponentShow, toogleAddVehicleComponent }) => {
    
    const [ newVehicleInformation, setNewVehicleInformation ] = useState({
        "vehicleplate": "",
        "fleet": ""
    })

    const inputsHandler = (event) => {
        setNewVehicleInformation({...newVehicleInformation, [event.target.name]: event.target.value})
    }

    const [ buttonState, toggleButtonState ] = useState(false)
    const [ fleets, setFleets ] = useState([])

    useEffect(() => {
        fetch('http://localhost:9999/getFleets')
        .then(response => response.json())
        .then(data => setFleets(data))
        .catch(console.log)
    }, [])

    const submitHandler = (event) => {
        event.preventDefault()
        toggleButtonState(!buttonState)

            let newDate = new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            let fullDate = `${year}-${month<10?`0${month}`:`${month}`}-${date}`

            const fleetDataToBeInserted = {
                vehicleplate: newVehicleInformation.vehicleplate,
                registerdate: fullDate,
                fleet: newVehicleInformation.fleet
            }

            fetch('http://localhost:9999/addVehicle', {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(fleetDataToBeInserted)
            })
            .then(response => response.json())
            .then(result => {
                if(result === 0){
                    alert("Successfully Added")
                    toggleButtonState(false)
                    toogleAddVehicleComponent(false)

                }else {
                    alert(`(Error: ${result.code}) Failed To Add: ${result.detail}`)
                    toggleButtonState(false)
                }
            })
            .catch(err => console.log(err))
    }

    const classes = useStyles()
    return (
        <>
            {
                addVehicleComponentShow ? 
                <div className="add-vehicle-component-container">
                    <h1>Add a Vehicle</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1.5, width: '25ch' },
                        }}
                        autoComplete="off"
                        onSubmit={submitHandler}
                    >
                        <div className='add-vehicle-details'>
                            <FormControl className={classes.formControl}>
                                <TextField id="filled-basic" label="Vehicle Plate" variant="filled" type='text' name="vehicleplate" onChange={inputsHandler}></TextField>
                            </FormControl>
                        </div>
                        <div className='add-vehicle-details'>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="vehiclefleet">Vehicle Fleet: </InputLabel>
                                <Select type='text' labelId="vehiclefleet" name="fleet" onChange={inputsHandler} value={newVehicleInformation.fleet}>
                                    {
                                        fleets.map(fleet => <MenuItem key={`fleet-${fleet.id}`} value={fleet.fleetname}>{fleet.fleetname}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>
                        </div>

                        <Button variant="contained" disabled={buttonState} color="primary" type="submit">Add</Button>
                    </Box>
                    <Button onClick={() => toogleAddVehicleComponent(!addVehicleComponentShow) } type="button" disabled={buttonState} variant="contained" color="secondary">Cancel</Button>
                </div>                 
                : null
            }
       
        </>
    )
}

export default AddVehicleComponent