import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Message } from '@mui/icons-material';

const backend = "";



export default function Users() {

    const [rows, setRows] = React.useState([]);
    
    const deleted = row =>
        fetch(`${backend}/users/${row.id}`, {method: 'DELETE'}).then(response => 
            response.ok ? setRows(rows.filter(user => user.id !== row.id)) : alert("Error connecting"));
   
    const columns = [
        { field: "name", headerName: "Name", width: 150, editable: true },
        { field: "email", headerName: "Email", width: 150, editable: true },
        { field: "role", headerName: "Role", width: 150 },
        {
            field: "action", headerName: "Action", width: 300, renderCell: (params) => {
                return (
                    <>
                        <Button>View</Button>
                        <Button>Change role</Button>
                        
                        <Button onClick={item => deleted(params.row)}>Delete</Button>
                    </>
                )
            }
        }
    ];

    const handleRowUpdate = (newRow, oldRow) => 
        newRow.id === oldRow.id && newRow !== oldRow ? fetch(`/users/${oldRow.id}`, {
            method: 'PUT', 
            body: JSON.stringify(newRow),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(response => response.ok ? newRow : alert("Connection error")) : oldRow;
    
    React.useEffect(() => {
        fetch(`${backend}/users`, { method: 'GET' }).then(raw => raw.json()).then(rows => {
            console.log(rows)
            setRows(rows);
        });
    }, [])
    return (
        <>
            <Typography variant="h1" component="h1">Users</Typography>
            <Button component={Link} to="/admin/new-user">Add new user</Button>
            <Box sx={{ width: "100%", height: 800 }}>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    experimentalFeatures={{newEditingApi: true}}
                    processRowUpdate={handleRowUpdate}
                />

            </Box>
        </>
    );
};
