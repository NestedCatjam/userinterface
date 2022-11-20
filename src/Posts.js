import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Posts = () => {
    const { userId } = useParams();

    const [userName, setUserName] = useState(null);

    const [rows, setRows] = useState([]);
    const handleNewPost = useCallback(() => {
        const content = prompt("Enter post content");
        fetch(`/users/${userId}/posts`, {
            method: 'POST', 
            body: JSON.stringify({
                id: null,
                content
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(response => response.ok ? (() => {})() : alert("Connection error"));
    });
    useEffect(() => {
        fetch(`/users/${userId}/posts`, { method: 'GET' }).then(raw => raw.json()).then(rows => {
            console.log(rows);
            setRows(rows);
        });
    }, []);
    useEffect(() => { fetch(`/users/${userId}`, { method: 'GET' }).then(raw => raw.json()).then(row => setUserName(row.name)); })

    const columns = [
        { field: "content" }
    ];

    return (
        <>
            <Typography variant="h1" component="h1">{userName}'s posts</Typography>
            <Button onClick={handleNewPost}>New post</Button>
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