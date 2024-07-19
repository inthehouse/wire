import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const StyledFooter = styled(Box)(({ theme }) => ({
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    textAlign: 'center',
}));


const Footer: React.FC = () => (
    <StyledFooter component="footer">
        <Typography variant="body1" role="contentinfo">
            My Search © 2024
        </Typography>
    </StyledFooter>
);

export default Footer;
