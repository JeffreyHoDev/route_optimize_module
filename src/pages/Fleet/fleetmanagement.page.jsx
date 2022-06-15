
import CustomTableComponent from '../../components/table/customTable.component'

const FleetManagementPage = () => {

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'fleetname', headerName: 'Fleet', flex: 1 },
        { field: 'registerdate', headerName: 'Register Date', flex: 1 },
        { field: 'createdby', headerName: 'Created By', flex: 1 },
      ];
    
      const rows = [
        { id: 1, fleetname: 'Snow', registerdate: '15th June 2022', createdby: 'AdminGor' },
        { id: 2, fleetname: 'ABC Group', registerdate: '15th June 2022', createdby: 'AdminGor' },
        { id: 3, fleetname: 'Research Group', registerdate: '15th June 2022', createdby: 'AdminGor' },
      ];


    return (
        <div className="fleet-management-page-container">
            <h1>Fleet Management Page</h1>
            {/* <TableComponent columns={columns} data={data}/> */}
            <div className="custom-table-component">
                <CustomTableComponent rows={rows} columns={columns}/>
            </div>
        </div>        
    )
}

export default FleetManagementPage