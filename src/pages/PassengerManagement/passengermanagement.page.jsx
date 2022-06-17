import CustomTableComponent from "../../components/table/customTable.component";
import { useEffect, useState } from 'react'

const PassengerManagementPage = () => {

    const [ rows, setRows ] = useState([])

    useEffect(() => {
        fetch("http://localhost:9999/getPassengers")
        .then(response => response.json())
        .then(data => {
          setRows(data)
        })
        .catch(console.log)
      }, [])

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'passengername', headerName: 'Passenger Name', flex: 1 },
        { field: 'relateduser', headerName: 'Related User', flex: 1 },
        { field: 'pickupaddress', headerName: 'Pickup Address', flex: 2 },
        { field: 'postalcode', headerName: 'Postal Code', flex: 1},
        { field: 'registerdate', headerName: 'Register Date', flex: 1 },
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