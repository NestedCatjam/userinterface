import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';


const columns = [
    {field: "contributor", headerName: "Contributor", width: 150},
    {field: "framework", headerName: "Framework", width: 150},
    {field: "control", headerName: "Control", width: 150},
    {field: "action", headerName: "Action", width: 150, renderCell: () => {
        return (
            <>
                <Button>View</Button>
            </>
        )
    }}
];

const rows = [
    {id: 1, contributor: "Bob Smith", framework: "HITRUST", control: "10.90.1"},
    {id: 2, contributor: "Bertrand Russell", framework: "HITRUST", control: "10.90.1"}
];

const backend = "";

export default function Evidence() {
    const [rows, setRows] = React.useState([]);
        React.useEffect(() => {
            fetch(`${backend}/evidence`, { method: 'GET' }).then(raw => raw.json()).then(rows => {
                console.log(rows)
                setRows(rows);
            });
        }, [])
    return (
        <>
        <Typography variant="h1" component="h1">Compliance evidence uploads</Typography>
         <Box sx={{width: "100%", height: 600}}>
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
