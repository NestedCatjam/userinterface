import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';

const columns = [
    {field: "contributor", headerName: "Contributor", width: 150},
    {field: "framework", headerName: "Framework", width: 150},
    {field: "control", headerName: "Control", width: 150},
    {field: "message", headerName: "Message", width: 150, renderCell: () => {
        return (
            <>
                <Button>View</Button>
            </>
        )
    }}
];

export default function MessageBoard(){



};