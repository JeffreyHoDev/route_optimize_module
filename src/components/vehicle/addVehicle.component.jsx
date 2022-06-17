import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';

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



const AddVehicleComponent = () => {

    const submitHandler = () => {

    }

    const classes = useStyles()
    return (
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
                        <TextField id="filled-basic" label="Vehicle Plate" variant="filled" type='text' name="vehiclename"></TextField>
                    </FormControl>
                </div>
                <div className='add-vehicle-details'>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="vehiclefleet">Vehicle Fleet: </InputLabel>
                        <Select type='text' labelId="vehiclefleet">
                            <MenuItem>ABC Group</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <Button variant="contained" color="primary" type="submit">Add</Button>
            </Box>
            
        </div>        
    )
}

export default AddVehicleComponent