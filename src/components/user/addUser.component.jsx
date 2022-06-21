import { useState } from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import './addUser.style.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const AddUserComponent = () => {


    
    const classes = useStyles()
    const [ buttonState, toggleButtonState ] = useState(false)
    const [ newUserInformation, setNewUserInformation ] = useState({
        "username": "",
        "displayname": "",
        "role": "Admin",
        "password": "",
        "confirmpassword": ""
    })

    const inputsHandler = (event) => {
        setNewUserInformation({...newUserInformation, [event.target.name]: event.target.value})
    }

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
      
    


    const handleSubmit = (event) => {
        event.preventDefault()
        toggleButtonState(!buttonState)
        if(newUserInformation.confirmpassword !== newUserInformation.password) {
            alert("Confirm Password must be same as Password")
        }else {

            let newDate = new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            let fullDate = `${year} ${month<10?`0${month}`:`${month}`} ${date}`

            const userdataToBeInserted = {
                username: newUserInformation.username,
                displayname: newUserInformation.displayname,
                role: newUserInformation.role,
                password: newUserInformation.password,
                registerdate: fullDate
            }

            fetch('http://localhost:9999/addUser', {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(userdataToBeInserted)
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
    }

    return (
    <div className="add-user-component-container">
        
        <h1>Add a User</h1>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1.5, width: '25ch' },
            }}
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <div className="add-user-input-detail">
                <TextField id="username" label="Username" name="username" variant="outlined" onChange={inputsHandler}  required />
            </div>
            <div className="add-user-input-detail">
                <TextField id="displayname" label="Display Name" name="displayname" variant="outlined" helperText="This will be the name appear to others" onChange={inputsHandler} required />
            </div>
            <div className="add-user-input-detail">
                {/* <FormControl className={classes.formControl} fullWidth>
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                        labelId="role-label" 
                        id="role" 
                        label="Role" 
                        name="role"
                        onChange={inputsHandler}
                        value={newUserInformation.role}
                        className="select-role"

                    >
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Scheduler">Scheduler</MenuItem>
                        <MenuItem value="Driver">Driver</MenuItem>
                    </Select>
                </FormControl> */}
                <label htmlFor='role'>Role: </label>
                <select name="role" onChange={inputsHandler} value={newUserInformation.role}>
                    <option value="Admin">Admin</option>
                    <option value="Scheduler">Scheduler</option>
                    <option value="Driver">Driver</option>
                </select>
            </div>
            <div className="add-user-input-detail">
                <TextField id="password" name="password" label="Password" type="password" variant="outlined" onChange={inputsHandler} required/>
            </div>
            <div className="add-user-input-detail">
                <TextField id="confirmpassword" name="confirmpassword" label="Confirm Password" type="password" variant="outlined" onChange={inputsHandler} required/>
            </div>
            <Button id="addUserButton" disabled={buttonState} variant="contained" color="primary" type="submit" >Add</Button>
        </Box>
        
    </div>
    )
}

export default AddUserComponent