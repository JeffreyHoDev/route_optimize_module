import { DataGrid } from '@mui/x-data-grid';
import Button from '@material-ui/core/Button'

import { TextField } from '@material-ui/core';

const CustomTableComponent = ({ columns, rows }) => {

    const renderButton = (params) => {
        return (
            <div>
                <Button variant="contained" color="primary" type="button" onClick={(event) => console.log(params)}>Edit</Button>
                <Button variant="contained" color="secondary" type="button">Delete</Button>
            </div>
        )
    }

    columns.push({
        field: 'action',
        headerName: 'Action',
        flex: 1,
        renderCell: renderButton,
        sortable: false
    })



    return (
        <div className="custom-table-component" style={{ height: 400, width: '100%' }}>
            <TextField id="searchbar" label="Search" variant="outlined" size='small' style={{marginBottom: ".5rem"}}/>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    )
}

export default CustomTableComponent