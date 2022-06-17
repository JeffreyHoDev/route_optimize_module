import CustomTableComponent from '../../components/table/customTable.component'
import { useState, useEffect } from 'react'


const FleetManagementPage = () => {

    const [ rows, setRows ] = useState([])

    useEffect(() => {
        fetch("http://localhost:9999/getFleets")
        .then(response => response.json())
        .then(data => {
          setRows(data)
        })
        .catch(console.log)
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'fleetname', headerName: 'Fleet', flex: 1 },
        { field: 'registerdate', headerName: 'Register Date', flex: 1 },
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