import { useState, useEffect } from 'react'
import CustomTableComponent from '../../components/table/customTable.component'


const UserManagementPage = () => {

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'username', headerName: 'Username', flex: 1 },
    { field: 'displayname', headerName: 'Display Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
  ];

  const rows = [
    { id: 1, username: 'Snow', email: 'snow@example.com' },
    { id: 2, username: 'Dota', email: 'dota@example.com' },
  ];

  const [ displayUsers, setDisplayUsers ] = useState(null)


  const url = "http//localhost:9999/getUsers"
  useEffect(() => {
    fetch(url)
    .then(console.log)
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