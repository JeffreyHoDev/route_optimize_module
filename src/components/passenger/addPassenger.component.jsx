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
                <label htmlFor="fathername">Father Name: </label>
                <input type='text' name="fathername"></input>
            </div>
            <div className="add-passenger-input-detail">
                <label htmlFor="mothername">Mother Name: </label>
                <input type='text' name="mothername"></input>
            </div>
            <div className="add-passenger-input-detail">
                <label htmlFor="contactnumber">Contact Number: </label>
                <input type='tel' name="contactnumber"></input>
            </div>
            <div className="add-passenger-input-detail">
                <label htmlFor="address">Address: </label>
                <input type='text' name="address"></input>
            </div>
            <div className="add-passenger-input-detail">
                <label htmlFor="postalcode">Postal Code: </label>
                <input type='number' name="postalcode"></input>
            </div>

            <button type="button">Add</button>
        </form>
    </div>
    )
}

export default AddPassengerComponent