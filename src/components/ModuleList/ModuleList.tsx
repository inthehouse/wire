import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

interface Module {
    name: string;
    owner: string;
    stars: number;
}

interface ModuleListProps {
    modules: Module[];
}

const ModuleList: React.FC<ModuleListProps> = ({ modules }) => {
    return (
        <Box>
            <Typography variant="h4" component="h2" gutterBottom>
                Modules
            </Typography>
            <List>
                {modules.map((module, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={module.name}
                            secondary={`Owner: ${module.owner} | Stars: ${module.stars}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ModuleList;
