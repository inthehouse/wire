import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Inbox, Mail, Home as HomeIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
}));

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
        <StyledDrawer variant="permanent" open>
            <Divider />
            <List>
                {menuItems.map(({ text, icon, route }) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => handleNavigation(route)}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </StyledDrawer>
    );
};

export default Sidebar;
