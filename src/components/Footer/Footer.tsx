import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                bgcolor: 'background.paper',
                p: 2,
                textAlign: 'center',
            }}
        >
            <Typography variant="body1">© 2024</Typography>
        </Box>
    );
};

export default Footer;