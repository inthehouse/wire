import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Search from '../../components/Search/Search';
import ModuleList from '../../components/ModuleList/ModuleList';
import { searchModules, Module } from '../../services/ApiService';

const Home: React.FC = () => {
    const [query, setQuery] = useState('');
    const [modules, setModules] = useState<Module[]>([]);
    const [currentPage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await searchModules(query);
                setModules(data.results);
            } catch (error) {
                console.error('Error fetching modules:', error);
            }
        };

        if (query) {
            fetchData();
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
            <ModuleList
                modules={modules}
                onSort={handleSort}
                currentPage={currentPage}
            />
        </Container>
    );
};

export default Home;
