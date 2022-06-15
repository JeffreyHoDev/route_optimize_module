import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';

const AddFleetComponent = () => {
    return (
        <div className="add-fleet-component-container">
            <h1>Add a Fleet</h1>
            <form className="add-fleet-form">
                <div className="add-fleet-input-detail" style={{marginBottom: ".5rem"}}>
                    <TextField id="fleetname" label="Fleet Name" variant="outlined" required size='small'/>
                </div>
                <Button type="submit" size="small" variant="contained" startIcon={<SaveIcon />} color="primary">Add Fleet</Button>
            </form>
        </div>        
    )
}

export default AddFleetComponent