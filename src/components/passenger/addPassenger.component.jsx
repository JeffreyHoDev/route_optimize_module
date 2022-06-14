const AddPassengerComponent = () => {
    return (
    <div className="add-passenger-component-container">
        <h1>Add a Passenger</h1>
        <form className="add-passenger-form">
            <div className="add-passenger-input-detail">
                <label htmlFor="passengername">Passenger Name: </label>
                <input type='text' name="passengername"></input>
            </div>
            <div className="add-passenger-input-detail">
                <label htmlFor="realateduser">Related User: </label>
                <select name="realateduser">
                    <option>AdminGor</option>
                </select>
            </div>
            <div className="add-passenger-input-detail">
                <label htmlFor="contactnumber">Contact Number: </label>
                <input type='tel' name="contactnumber"></input>
            </div>
            <div className="add-passenger-input-detail">
                <label htmlFor="address">Pick Up Address: </label>
                <input type='text' name="address"></input>
            </div>
            <div className="add-passenger-input-detail">
                <label htmlFor="postalcode">Pick Up Postal Code: </label>
                <input type='number' name="postalcode"></input>
            </div>

            <button type="button">Add</button>
        </form>
    </div>
    )
}

export default AddPassengerComponent