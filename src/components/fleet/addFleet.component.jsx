import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';

const AddFleetComponent = () => {
    return (
        <div className="add-fleet-component-container">
            <h1>Add a Fleet</h1>
            <form className="add-fleet-form">
                <div className="add-fleet-input-detail">
                    <label htmlFor="fleetname">Fleet Name: </label>
                    <input type='text' name="fleetname" required></input>
                </div>
                <Button type="submit" size="small" variant="contained" startIcon={<SaveIcon />} color="primary">Add</Button>
            </form>
        </div>        
    )
}

export default AddFleetComponent