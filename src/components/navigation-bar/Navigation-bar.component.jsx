import './navigation-bar.style.css'

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const NavigationBarComponent = () => {
    return (
        
        <Box sx={{ width: '100%', bgcolor: 'primary.dark' }}>
            <nav>
                <List>
                    <div className='navigation-bar-container'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="User Management" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Fleet Management" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Vehicle Management" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Passengers Management" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Set Trip" />
                            </ListItemButton>
                        </ListItem>
                    </div>
                </List>
            </nav>
        </Box>
    )
}

export default NavigationBarComponent