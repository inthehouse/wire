import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, TextField, Button } from '@mui/material';
import SearchBar from '../../components/SearchBar/SearchBar';
import ModuleList from '../../components/ModuleList/ModuleList';
import { searchModules } from '../../services/ApiService';

const Home: React.FC = () => {
    const [modules, setModules] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchModules = async () => {
            if (searchQuery) {
                try {
                    const data = await searchModules(searchQuery);
                    setModules(data);
                } catch (error) {
                    console.error('Failed to fetch modules:', error);
                }
            }
        };
        fetchModules();
    }, [searchQuery]);

    const handleSearch = (searchQuery: string) => {
        setSearchQuery(searchQuery);
    };

    return (
        <Container>
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Home
            </Typography>
            <SearchBar onSearch={handleSearch} />
            <ModuleList modules={modules} />
        </Container>
    );
};

export default Home;
