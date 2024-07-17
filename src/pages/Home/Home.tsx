import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import ModuleList from '../../components/ModuleList/ModuleList';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import { searchModules, Module } from '../../services/ApiService';

const ITEMS_PER_PAGE = 5;

const Home: React.FC = () => {
    const [modules, setModules] = useState<Module[]>([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchModules = async (query: string) => {
        try {
            const data = await searchModules(query);
            setModules(data.results);
            setTotalItems(data.total);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (searchQuery) {
            fetchModules(searchQuery);
        }
    }, [searchQuery]);

    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedModules = modules.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <Container>
            <Typography variant="h2" component="h1" gutterBottom>
                Module Search
            </Typography>
            <Search onSearch={setSearchQuery} />
            <ModuleList modules={paginatedModules} />
            {totalPages > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </Container>
    );
};

export default Home;
