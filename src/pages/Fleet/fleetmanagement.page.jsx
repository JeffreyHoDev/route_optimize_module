import CustomTableComponent from '../../components/table/customTable.component'
import { useState, useEffect } from 'react'
import AddFleetComponent from '../../components/fleet/addFleet.component'

import { Button } from '@mui/material';


const FleetManagementPage = () => {

    const [ rows, setRows ] = useState([])
    const [ addFleetComponentShow, toogleAddFleetComponent ] = useState(false)

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
        <>
            <div className="fleet-management-page-container">
                <h1>Fleet Management Page</h1>
                <Button variant="contained" color="primary" onClick={()=> toogleAddFleetComponent(!addFleetComponentShow)}>Add Fleet</Button>
                {/* <TableComponent columns={columns} data={data}/> */}
                <div className="custom-table-component">
                    <CustomTableComponent rows={rows} columns={columns}/>
                </div>
            </div>
            <AddFleetComponent addFleetComponentShow={addFleetComponentShow} toogleAddFleetComponent={toogleAddFleetComponent}/>
        </>
    )
}

export default FleetManagementPage