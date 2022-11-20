import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {TextField} from '@mui/material';
import { Button, Modal, Typography } from '@mui/material';

const backend = "";


export default function Controls() {

  const initialPostValues = {"name": "", "type": "", "subtype": "", "description": ""};
  
  const [rows, setRows] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [postValues, setPostValue] = React.useState(initialPostValues);

  const handleChange = i => {
    let currPostValues = postValues

    for(let key in currPostValues){
      if(key == i.target.id){
        console.log(key, i.target.id)
        currPostValues[key] = i.target.value
      }
    }
    setPostValue(currPostValues)
  }

  const handleDelete = row => {    
    fetch(`${backend}/control/${row.id}`, {method: 'DELETE'}
    ).then(response => {
      response.ok ? setRows(rows.filter(control => control.id !== row.id)) : 
        alert("Error in deletion");
  })
    console.log("deleted:", row)
    alert("row deleted:", row)
  }

  const handlePost = e => {
    // e.preventDefault();

    const post = `${backend}` + "/control"
    // console.log("post:", postValues)
    console.log("postValues:", postValues)
    console.log("output:", JSON.stringify(postValues))
    fetch(post, {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(postValues)
    }).then(res => {
      console.log("res:", res)
      console.log("new post successfully added")
    })

    closeModal()
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

  const openNewControlModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);
   
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
      console.log(`${backend}/control`)
      fetch(`${backend}/control`, { method: 'GET' })
      .then(raw => {
        return raw.json()
      }).then(rows => {
        setRows(rows);
      });
    }, [])


    return (
        <>
            <Typography variant="h1" component="h1">Controls</Typography>
            <Button onClick={() => {openNewControlModal()}}>Add new control</Button>
            
            <Box sx={{ width: "100%", height: 800 }}>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </Box >

            <Modal
              open={openModal}
              onClose={closeModal}
              aria-labelledby="new-control-modal"
              aria-describedby="opens modal for creation of a new control"
              >
                <Box 
                component="form"
                sx={{position:"absolute", width:"50%", height: "40%", marginLeft:"50%", transform:"translate(-50%, 50%)", background:"skyblue"}}>
                  <h1>New Control</h1>
                  <TextField id="name" label="Name" onChange={i => {handleChange(i)}} required></TextField>
                  <TextField id="type" label="Type" onChange={i => {handleChange(i)}} required></TextField>
                  <TextField id="subtype" label="Subtype" onChange={i => {handleChange(i)}} required></TextField>
                  <TextField id="description" label="Description" onChange={i => {handleChange(i)}} required></TextField>
                  
                  <Button onClick={e => handlePost(e)}>Submit</Button>
                </Box>
              </Modal>
        </>
    );
};
