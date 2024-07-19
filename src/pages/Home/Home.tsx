import React, { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import Search from '../../components/Search/Search';
import ModuleList from '../../components/ModuleList/ModuleList';
import { searchModules, Module } from '../../services/ApiService';

const Home: React.FC = () => {
    const [query, setQuery] = useState('');
    const [modules, setModules] = useState<Module[]>([]);
    const [currentPage] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await searchModules(query);
                setModules(data.results);
            } catch (error) {
                console.error('Error fetching modules:', error);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchData();
        } else {
            setModules([]);
        }
    }, [query]);

    const handleSort = (property: keyof Module) => {
        const sortedModules = [...modules].sort((a, b) => {
            if (property === 'name') {
                return a.name.localeCompare(b.name);
            } else if (property === 'stars') {
                return b.stars - a.stars;
            } else {
                return 0;
            }
        });
        setModules(sortedModules);
    };

    return (
        <Container>
            <Search onSearch={setQuery} />
            {loading ? (
                <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
                    <CircularProgress data-testid="loading-spinner" />
                </Box>
            ) : modules.length > 0 ? (
                <ModuleList
                    modules={modules}
                    onSort={handleSort}
                    currentPage={currentPage}
                />
            ) : (
                query && (
                    <Typography variant="h6" align="center" sx={{ mt: 4 }}>
                        No modules found.
                    </Typography>
                )
            )}
        </Container>
    );
};

export default Home;
