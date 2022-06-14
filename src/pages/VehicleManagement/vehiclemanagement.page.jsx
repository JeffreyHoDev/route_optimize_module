const VehicleManagementPage = () => {
    return (
        <div className="vehicle-management-page-container">
            <h1>Vehicle Management Page</h1>
            {/* <TableComponent columns={columns} data={data}/> */}
            <div className="custom-table-component">
                <input type="text" placeholder="Search Name"></input>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Vehicle Plate</th>
                            <th>Register Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ABC1234D</td>
                            <td>14th June 2022</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VehicleManagementPage