import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

const Home: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Home
            </Typography>
            <Button variant="contained" color="primary">
                Click Me
            </Button>
        </Container>
    );
};

export default Home;