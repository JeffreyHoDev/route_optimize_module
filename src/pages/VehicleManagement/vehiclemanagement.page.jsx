import CustomTableComponent from '../../components/table/customTable.component'

import { useState, useEffect } from 'react'

const VehicleManagementPage = () => {

    const [ vehicles, setVehicles ] = useState([])

    useEffect(() => {
        fetch('http://localhost:9999/getVehicles')
        .then(response => response.json())
        .then(data => setVehicles(data))
        .catch(console.log)
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'vehicleplate', headerName: 'Vehicle Plate', flex: 1 },
        { field: 'fleet', headerName: 'Fleet', flex: 1},
        { field: 'registerdate', headerName: 'Register Date', flex: 2, type: 'date' },
    ];


    return (
        <div className="vehicle-management-page-container">
            <h1>Vehicle Management Page</h1>
            <div className="custom-table-component">
                <CustomTableComponent rows={vehicles} columns={columns}/>
            </div>
        </div>
    )
}

export default VehicleManagementPage