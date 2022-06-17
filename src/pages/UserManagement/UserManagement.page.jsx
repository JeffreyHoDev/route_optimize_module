import { useState, useEffect } from 'react'
import CustomTableComponent from '../../components/table/customTable.component'


const UserManagementPage = () => {

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'username', headerName: 'Username', flex: 1 },
    { field: 'displayname', headerName: 'Display Name', flex: 1 },
    { field: 'registerdate', headerName: 'Register Date', flex: 1 },
    { field: 'role', headerName: 'Role', flex: 1 },
  ];


  const [ rows, setRows ] = useState([])

  useEffect(() => {
    fetch("http://localhost:9999/getUsers")
    .then(response => response.json())
    .then(data => {
      setRows(data)
    })
    .catch(console.log)
  }, [])


    return (
        <div className="usermanagement-page-container">
            <h1>User Management Page</h1>
            {/* <TableComponent columns={columns} data={data}/> */}
            <CustomTableComponent columns={columns} rows={rows} />
        </div>
    )
}

export default UserManagementPage