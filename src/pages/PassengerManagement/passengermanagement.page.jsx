import CustomTableComponent from "../../components/table/customTable.component";
import { useEffect, useState } from 'react'

import { Button } from '@mui/material';
import AddPassengerComponent from '../../components/passenger/addPassenger.component'

const PassengerManagementPage = () => {

  const [ addPassengerComponentShow, toogleAddPassengerComponent ] = useState(false)
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
      <>
        <div className="usermanagement-page-container">
            <h1>Passenger Management Page</h1>
            <Button variant="contained" color="primary" onClick={()=> toogleAddPassengerComponent(!addPassengerComponentShow)}>Add User</Button>
            {/* <TableComponent columns={columns} data={data}/> */}
            <div className="custom-table-component">
                <CustomTableComponent rows={rows} columns={columns}/>
            </div>
        </div>
        <AddPassengerComponent addPassengerComponentShow={addPassengerComponentShow} toogleAddPassengerComponent={toogleAddPassengerComponent}/>
      </>
    )
}

export default PassengerManagementPage