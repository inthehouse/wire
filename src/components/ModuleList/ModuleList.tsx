import React from 'react';
import { Box, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Module } from '../../services/ApiService';

interface ModuleListProps {
    modules: Module[];
}

const ModuleList: React.FC<ModuleListProps> = ({ modules }) => {
    return (
        <Box>
            {modules.map((module) => (
                <Box key={uuidv4()} mb={2}>
                    <Typography variant="h6">{module.name}</Typography>
                    <Typography variant="body2">Stars: {module.stars}</Typography>
                    <Typography variant="body2">Rank: {module.rank}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default ModuleList;
