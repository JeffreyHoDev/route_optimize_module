const CustomTableComponent = () => {
    return (
        <div className="custom-table-component">
            <input type="text" placeholder="Search Name"></input>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>adminGor</td>
                        <td>Gor</td>
                        <td>adminGor@example.com</td>
                        <td>Admin</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CustomTableComponent