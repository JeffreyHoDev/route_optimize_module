import Button from '@material-ui/core/Button'

const FleetManagementPage = () => {
    return (
        <div className="fleet-management-page-container">
            <h1>Fleet Management Page</h1>
            {/* <TableComponent columns={columns} data={data}/> */}
            <div className="custom-table-component">
                <input type="text" placeholder="Search Name"></input>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fleet Name</th>
                            <th>Register Date</th>
                            <th>Created By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ABC Group</td>
                            <td>14th June 2022</td>
                            <td>adminGor</td>
                            <td>
                                <Button size="small" variant="contained" color="primary">Edit</Button>
                                <Button size="small" variant="contained" color="secondary">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>        
    )
}

export default FleetManagementPage