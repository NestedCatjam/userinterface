import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronLeft, People } from '@mui/icons-material';
import * as Icons from '@mui/icons-material';

export default function ButtonAppBar(props) {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    return (
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <CssBaseline />
            <AppBar position="sticky" width={"100%"} component="nav">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setSidebarOpen(true)}
                        sx={{ mr: 2, ...(sidebarOpen ? { display: 'none' } : {}) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {props.className}
                    </Typography>
                    <Link to="/login"><Button color="inherit">Login</Button></Link>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                component="nav"
                open={sidebarOpen}
            >

                <IconButton onClick={() => setSidebarOpen(false)}>
                    <ChevronLeft />
                </IconButton>
                <Divider />
                <List>
                    {[['admin', <People />], ['evidence', <Icons.FilePresent />]].map(([item, icon]) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton component={Link} to={'/' + item}>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
