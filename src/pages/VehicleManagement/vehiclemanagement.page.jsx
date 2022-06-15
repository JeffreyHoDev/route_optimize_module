import CustomTableComponent from '../../components/table/customTable.component'

const VehicleManagementPage = () => {

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'vehiclePlate', headerName: 'Vehicle Plate', width: 130 },
        { field: 'registerDate', headerName: 'Register Date', width: 130, type: 'date' },
    ];

    const rows = [
        { id: 1, vehiclePlate: 'Snow', registerDate: 'Jon' },
    ];

    return (
        <div className="vehicle-management-page-container">
            <h1>Vehicle Management Page</h1>
            {/* <TableComponent columns={columns} data={data}/> */}
            <div className="custom-table-component">
                <CustomTableComponent rows={rows} columns={columns}/>
            </div>
        </div>
    )
}

export default VehicleManagementPage