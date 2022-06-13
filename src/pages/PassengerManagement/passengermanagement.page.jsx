

const PassengerManagementPage = () => {
    return (
        <div className="usermanagement-page-container">
            <h1>Passenger Management Page</h1>
            {/* <TableComponent columns={columns} data={data}/> */}
            <div className="custom-table-component">
                <input type="text" placeholder="Search Name"></input>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Passenger Name</th>
                            <th>Father Name</th>
                            <th>Mother Name</th>
                            <th>Pickup Address</th>
                            <th>Postal Code</th>
                            <th>Register Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Kid A</td>
                            <td>Father A</td>
                            <td>Mother A</td>
                            <td>250B Somewhere</td>
                            <td>123456</td>
                            <td>13th June 2022</td>
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

export default PassengerManagementPage