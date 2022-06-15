import CustomTableComponent from "../../components/table/customTable.component";


const PassengerManagementPage = () => {

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'passengername', headerName: 'Passenger Name', flex: 1 },
        { field: 'relateduser', headerName: 'Related User', flex: 1 },
        { field: 'pickupaddress', headerName: 'Pickup Address', flex: 2 },
        { field: 'postalcode', headerName: 'Postal Code', flex: 1},
        { field: 'registerdate', headerName: 'Register Date', flex: 1 },
      ];
    
      const rows = [
        { id: 1, username: 'Snow1234', passengername: 'Snow', relateduser: "AdminGor", pickupaddress: "250B Compassvale Street Singapore", postalcode: 123456, registerdate: "15th June 2022" },
        { id: 2, username: 'RaymondGor', passengername: 'Raymond', relateduser: "AdminGor", pickupaddress: "123C Singapore", postalcode: 789101, registerdate: "15th June 2022" },
      ];
    
    return (
        <div className="usermanagement-page-container">
            <h1>Passenger Management Page</h1>
            {/* <TableComponent columns={columns} data={data}/> */}
            <div className="custom-table-component">
                <CustomTableComponent rows={rows} columns={columns}/>
            </div>
        </div>
    )
}

export default PassengerManagementPage