import { useState, useEffect } from 'react'
import CustomTableComponent from '../../components/table/customTable.component'
import AddUserComponent from '../../components/user/addUser.component';

import { Button } from '@mui/material';

const UserManagementPage = () => {

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'username', headerName: 'Username', flex: 1 },
    { field: 'displayname', headerName: 'Display Name', flex: 1 },
    { field: 'registerdate', headerName: 'Register Date', flex: 1 },
    { field: 'role', headerName: 'Role', flex: 1 },
  ];


  const [ rows, setRows ] = useState([])
  const [ addUserComponentShow, toogleAddUserComponent ] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9999/getUsers")
    .then(response => response.json())
    .then(data => {
      setRows(data)
    })
    .catch(console.log)
  }, [])


    return (
      <>
        <div className="usermanagement-page-container">
            <h1>User Management Page</h1>
            <Button variant="contained" color="primary" onClick={()=> toogleAddUserComponent(!addUserComponentShow)}>Add User</Button>
            {/* <TableComponent columns={columns} data={data}/> */}
            <CustomTableComponent columns={columns} rows={rows} />
        </div>
        <AddUserComponent toogleAddUserComponent={toogleAddUserComponent} addUserComponentShow={addUserComponentShow}/>

      </>
    )
}

export default UserManagementPage