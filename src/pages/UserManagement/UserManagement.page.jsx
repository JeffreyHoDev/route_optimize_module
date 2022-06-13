import TableComponent from '../../components/table/table.component'
import CustomTableComponent from '../../components/table/customTable.component'
import { useMemo } from 'react'

const UserManagementPage = () => {

    const columns = useMemo(
        () => [
          {
            Header: 'Column 1',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'Column 2',
            accessor: 'col2',
          },
        ],
        []
    )

    const data = useMemo(
        () => [
          {
            col1: 'Hello',
            col2: 'World',
          },
          {
            col1: 'react-table',
            col2: 'rocks',
          },
          {
            col1: 'whatever',
            col2: 'you want',
          },
        ],
        []
    )
    return (
        <div className="usermanagement-page-container">
            <h1>User Management Page</h1>
            {/* <TableComponent columns={columns} data={data}/> */}
            <CustomTableComponent />
        </div>
    )
}

export default UserManagementPage