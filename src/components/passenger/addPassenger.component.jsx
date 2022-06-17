import { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import './addPassenger.style.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));


const AddPassengerComponent = () => {
    const classes = useStyles()

    const [ buttonState, toggleButtonState ] = useState(false)
    const [ users, setUsers ] = useState([])
    const [ newPassengerInformation, setNewPassengerInformation ] = useState({
        "passengername": "",
        "relateduser": "",
        "contactnumber": "",
        "pickupaddress": "",
        "postalcode": ""
    })

    const inputsHandler = (event) => {
        setNewPassengerInformation({...newPassengerInformation, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        fetch("http://localhost:9999/getUsers")
        .then(response => response.json())
        .then(data => {
            setUsers(data)
        })
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

            const passengerdataToBeInserted = {
                passengername: newPassengerInformation.passengername,
                relateduser: newPassengerInformation.relateduser,
                contactnumber: newPassengerInformation.contactnumber,
                pickupaddress: newPassengerInformation.pickupaddress,
                postalcode: newPassengerInformation.postalcode,
                registerdate: fullDate
            }

            fetch('http://localhost:9999/addPassenger', {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(passengerdataToBeInserted)
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
    <div className="add-passenger-component-container">
        <h1>Add a Passenger</h1>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1.5, width: '25ch' },
            }}
            autoComplete="off"
            onSubmit={submitHandler}
        >
            <div className="add-passenger-input-detail">
                <TextField id="passengername" label="Passenger Name" variant="outlined" name="passengername" onChange={inputsHandler} />
            </div>
            <div className="add-passenger-input-detail">
                <FormControl className={classes.formControl} fullWidth >
                    <InputLabel id="relateduser-label">Related User</InputLabel>
                    <Select
                        labelId="relateduser-label" 
                        id="relateduser" 
                        label="Related User"
                        name="relateduser" 
                        onChange={inputsHandler} 
                        value={newPassengerInformation.relateduser}
                    >
                    {
                        users.map(user => <MenuItem key={`username-${user.id}`} value={user.username}>{`${user.displayname} (${user.username})`}</MenuItem>)
                    }
                    </Select>
                </FormControl>
            </div>
            <div className="add-passenger-input-detail">
                <TextField id="contactnumber" label="Contact Number" variant="outlined" type="tel" name="contactnumber" onChange={inputsHandler}/>
            </div>
            <div className="add-passenger-input-detail">
                <TextField id="pickupaddress" label="Pickup Address" variant="outlined" name="pickupaddress" onChange={inputsHandler} />
            </div>
            <div className="add-passenger-input-detail">
                <TextField id="postalcode" label="Postal Code" variant="outlined" type="number" name="postalcode" onChange={inputsHandler} />
            </div>
            <Button variant="contained" disabled={buttonState} color="primary" type="submit">Add</Button>

        </Box>
        
    </div>
    )
}

export default AddPassengerComponent