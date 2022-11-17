import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "role", headerName: "Role", width: 150 },
    {
        field: "action", headerName: "Action", width: 300, renderCell: () => {
            return (
                <>
                    <Button>View</Button>
                    <Button>Change role</Button>
                    <Button>Delete</Button>
                </>
            )
        }
    }
];
const backend = "";

export default function Users() {
    const [rows, setRows] = React.useState([]);
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
                />

            </Box>
        </>
    );
};
