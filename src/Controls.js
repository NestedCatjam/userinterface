import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';


const backend = "";



export default function Controls() {

  const [rows, setRows] = React.useState([]);

  const handleDelete = row => {
    
    fetch(`${backend}/control/${row.id}`, {method: 'DELETE'}
    ).then(response => {
      response.ok ? setRows(rows.filter(control => control.id !== row.id)) : 
        alert("Error in deletion");
  })

    console.log("deleted:", row)
    alert("row deleted:", row)
  }

  const handleGet = id => {
    fetch(`${backend}/control/get/${id}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log("data returned:", data)
    })
  }
   
  const columns = [
    { field: "id", headerName: "Control ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "description", headerName: "Description", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    { field: "subtype", headerName: "Subtype", width: 150 },
    { field: "mapping", headerName: "Mapping", width: 150 },
    {
      field: "action", headerName: "Action", width: 300, renderCell: (params) => {
        return (
          <>
                        <Button>View</Button>
                        <Button>Change</Button>
                        <Button onClick={item => handleDelete(params.row)}>Delete</Button>
                    </>
                )
              }
            }
          ];
          
    React.useEffect(() => {
      fetch(`${backend}/controls`, { method: 'GET' }).then(raw => raw.json()).then(rows => {
        console.log("row ID:" , rows.id)
        console.log(rows)
        setRows(rows);
      });
    }, [])

    return (
        <>
            <Typography variant="h1" component="h1">Controls</Typography>
            <Button>Add new control</Button>
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
