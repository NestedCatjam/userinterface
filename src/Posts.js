import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Posts = () => {
    const { userId } = useParams();

    const [userName, setUserName] = useState(null);

    const [rows, setRows] = useState([]);
    useEffect(() => {
        fetch(`/users/${userId}/posts`, { method: 'GET' }).then(raw => raw.json()).then(rows => {
            console.log(rows);
            setRows(rows);
        });
    }, []);
    useEffect(() => { fetch(`/users/${userId}`, { method: 'GET' }).then(raw => raw.json()).then(row => setUserName(row.name)); })

    const columns = [
        { name: "content" }
    ];

    return (
        <>
            <Typography variant="h1" component="h1">{userName}'s posts</Typography>
            <Button component={Link}>New post</Button>
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

export default Posts;