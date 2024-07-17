import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import ModuleList from '../../components/ModuleList/ModuleList';
import Pagination from '../../components/Pagination/Pagination';
import { searchModules, Module } from '../../services/ApiService';
import Search from '../../components/Search/Search';

const Home: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [modules, setModules] = useState<Module[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchModules = async () => {
            if (searchQuery) {
                try {
                    const data = await searchModules(searchQuery, currentPage);
                    setModules(data.results);
                    setTotalItems(data.total);
                } catch (error) {
                    console.error('Error fetching modules:', error);
                }
            }
        };

        fetchModules();
    }, [searchQuery, currentPage]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    return (
        <Container>
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Home
            </Typography>
            <Search onSearch={handleSearch} />
            <ModuleList modules={modules} />
            <Pagination
                currentPage={currentPage}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChange={(page: number) => setCurrentPage(page)}
            />
        </Container>
    );
};

export default Home;
