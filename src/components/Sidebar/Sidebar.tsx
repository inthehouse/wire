import React from 'react';
import { styled, Drawer, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Divider } from '@mui/material';
import { Inbox, Mail, Home as HomeIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    const menuItems = [
        { text: 'Home', icon: <HomeIcon />, route: '/' },
        { text: 'Inbox', icon: <Inbox />, route: '/inbox' },
        { text: 'Starred', icon: <Mail />, route: '/starred' },
        { text: 'Send email', icon: <Mail />, route: '/send-email' },
        { text: 'Drafts', icon: <Inbox />, route: '/drafts' },
    ];

    const handleNavigation = (route: string) => {
        navigate(route);
    };

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            open
        >
            <Divider />
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton onClick={() => handleNavigation(item.route)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
