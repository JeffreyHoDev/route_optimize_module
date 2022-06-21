import './navigation-bar.style.css'

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom'

const NavigationBarComponent = () => {
    return (
        
        <Box sx={{ width: '100%', bgcolor: 'primary.dark' }}>
            <nav>
                <List>
                    <div className='navigation-bar-container'>
                        <ListItem disablePadding>
                            <Link to="/user-management" style={{ textDecoration: 'none', color: 'white' }}>
                                <ListItemButton>
                                    <ListItemText primary="User Management"  />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                            <Link to="/fleet-management" style={{ textDecoration: 'none', color: 'white' }}>
                                <ListItemButton>
                                    <ListItemText primary="Fleet Management" />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                            <Link to="/vehicle-management" style={{ textDecoration: 'none', color: 'white' }}>
                                <ListItemButton>
                                    <ListItemText primary="Vehicle Management" />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                            <Link to="/passenger-management" style={{ textDecoration: 'none', color: 'white' }}>
                                <ListItemButton>
                                    <ListItemText primary="Passengers Management" />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                            <Link to="/set-trip" style={{ textDecoration: 'none', color: 'white' }}>
                                <ListItemButton>
                                    <ListItemText primary="Set Trip" />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    </div>
                </List>
            </nav>
        </Box>
    )
}

export default NavigationBarComponent