const AddUserComponent = () => {
    return (
    <div className="add-user-component-container">
        <h1>Add a User</h1>
        <form className="add-user-form">
            <div className="add-user-input-detail">
                <label htmlFor="username">Username: </label>
                <input type='text' name="username"></input>
            </div>
            <div className="add-user-input-detail">
                <label htmlFor="displayname">Display Name: </label>
                <input type='text' name="displayname"></input>
            </div>
            <div className="add-user-input-detail">
                <label htmlFor="role">Username: </label>
                <select name='role'>
                    <option>Admin</option>
                    <option>Scheduler</option>
                    <option>Driver</option>
                </select>
            </div>
            <div className="add-user-input-detail">
                <label htmlFor="password">Password: </label>
                <input type='password' name="password"></input>
            </div>
            <div className="add-user-input-detail">
                <label htmlFor="confirmpassword">Confirm Password: </label>
                <input type='password' name="confirmpassword"></input>
            </div>
            <button type="button">Add</button>
        </form>
    </div>
    )
}

export default AddUserComponent