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
    return (
    <div className="add-user-component-container">
        <h1>Add a User</h1>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1.5, width: '25ch' },
            }}
            autoComplete="off"
        >
                <div className="add-user-input-detail">
                    <TextField id="username" label="Username" variant="outlined" />
                </div>
                <div className="add-user-input-detail">
                    <TextField id="displayname" label="Display Name" variant="outlined" helperText="This will be the name appear to others" />
                </div>
                <div className="add-user-input-detail">
                    <FormControl className={classes.formControl} fullWidth>
                        <InputLabel id="role-label">Role</InputLabel>
                        <Select
                            labelId="role-label" 
                            id="role" 
                            label="Role" 
                        >
                            <MenuItem>Admin</MenuItem>
                            <MenuItem>Scheduler</MenuItem>
                            <MenuItem>Driver</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="add-user-input-detail">
                    <TextField id="password" label="Password" type="password" variant="outlined" />
                </div>
                <div className="add-user-input-detail">
                    <TextField id="confirmpassword" label="Confirm Password" type="password" variant="outlined" />
                </div>
                <Button variant="contained" color="primary" type="button">Add</Button>
        </Box>
        
    </div>
    )
}

export default AddUserComponent