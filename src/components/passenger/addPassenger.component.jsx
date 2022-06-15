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

    return (
    <div className="add-passenger-component-container">
        <h1>Add a Passenger</h1>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1.5, width: '25ch' },
            }}
            autoComplete="off"
        >
            <div className="add-passenger-input-detail">
                <TextField id="passengername" label="Passenger Name" variant="outlined" />
            </div>
            <div className="add-passenger-input-detail">
                <FormControl className={classes.formControl} fullWidth >
                    <InputLabel id="relateduser-label">Related User</InputLabel>
                    <Select
                        labelId="relateduser-label" 
                        id="relateduser" 
                        label="Related User" 
                    >
                        <MenuItem>AdminGor</MenuItem>
                        <MenuItem>User B</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="add-passenger-input-detail">
                <TextField id="contactnumber" label="Contact Number" variant="outlined" type="tel"/>
            </div>
            <div className="add-passenger-input-detail">
                <TextField id="pickupaddress" label="Pickup Address" variant="outlined" />
            </div>
            <div className="add-passenger-input-detail">
                <TextField id="postalcode" label="Postal Code" variant="outlined" type="number" />
            </div>
            <Button variant="contained" color="primary" type="button">Add</Button>

        </Box>
        
    </div>
    )
}

export default AddPassengerComponent