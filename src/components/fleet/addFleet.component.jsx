import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import { useState } from 'react'
import Box from '@mui/material/Box';

import './addFleet.style.css'

const AddFleetComponent = () => {
    const [ newFleetInformation, setNewFleetInformation ] = useState({
        "fleetname": "",
        "registerdate": ""
    })

    const [ buttonState, toggleButtonState ] = useState(false)

    const inputsHandler = (event) => {
        setNewFleetInformation({...newFleetInformation, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        toggleButtonState(!buttonState)

            let newDate = new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            let fullDate = `${year}-${month<10?`0${month}`:`${month}`}-${date}`

            const fleetDataToBeInserted = {
                fleetname: newFleetInformation.fleetname,
                registerdate: fullDate
            }

            fetch('http://localhost:9999/addFleet', {
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

                }else {
                    alert(`(Error: ${result.code}) Failed To Add: ${result.detail}`)
                    toggleButtonState(false)
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="add-fleet-component-container">
            <h1>Add a Fleet</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1.5, width: '25ch' },
                }}
                autoComplete="off"
                onSubmit={submitHandler}
            >
                
                <div className="add-fleet-input-detail" style={{marginBottom: ".5rem"}}>
                    <TextField id="fleetname" label="Fleet Name" variant="outlined" name="fleetname" required size='small' onChange={inputsHandler}/>
                </div>
                <Button type="submit" disabled={buttonState} size="small" variant="contained" startIcon={<SaveIcon />} color="primary">Add Fleet</Button>
            </Box>

            

        </div>        
    )
}

export default AddFleetComponent