import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import { Button } from '@mui/material';


const columns = [
    {field: "name", headerName: "Name", width: 150},
    {field: "email", headerName: "Email", width: 150},
    {field: "role", headerName: "Role", width: 150},
    {field: "action", headerName: "Action", width: 150, renderCell: () => {
        return (
            <>
                <Button>View</Button>
                <Button>Delete</Button>
            </>
        )
    }}
];

const rows = [
    {id: 1, name: "Graham Priest", email: "graham.priest@email.com", role: 'ADMINISTRATOR'},
    {id: 2, name: "Bob Smith", email: "bob.smith33@email.com", role: "CONTRIBUTOR"},
    {id: 3, name: "Bertrand Russell", email: "bertrand.russell@email.com", role: "CONTRIBUTOR"}
];
export default function Users() {
    
    return (
         <Box sx={{width: "100%", height: 600}}>
            <DataGrid 
                 columns={columns}
                 rows={rows}
                 pageSize={10}
                 rowsPerPageOptions={[10]}
                  />

        </Box>

    );
};
