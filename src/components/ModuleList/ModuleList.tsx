import React, { useState, useEffect } from 'react';
import { Module } from '../../services/ApiService';
import { v4 as uuidv4 } from 'uuid';
import { Table, TableHead, TableRow, TableCell, TableBody, Box, Container, Link } from '@mui/material';
import Pagination from '../Pagination/Pagination';

interface ModuleListProps {
    modules: Module[];
    onSort: (property: keyof Module) => void;
    currentPage: number;
}

const ITEMS_PER_PAGE = 5;

const ModuleList: React.FC<ModuleListProps> = ({ modules, onSort, currentPage }) => {
    const [orderBy, setOrderBy] = useState<keyof Module>('name');
    const [page, setPage] = useState(currentPage);

    useEffect(() => {
        setPage(currentPage);
    }, [currentPage]);

    const handleChangePage = (newPage: number) => {
        setPage(newPage);
    };
    const handleSort = (property: keyof Module) => {
        setOrderBy(property);
        onSort(property);
    };

    const startIndex = page * ITEMS_PER_PAGE;
    const paginatedModules = modules.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Link href="#" underline="none" onClick={() => handleSort('name')}>
                                Name
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Link href="#" underline="none" onClick={() => handleSort('stars')}>
                                Stars
                            </Link>
                        </TableCell>
                        <TableCell>Rank</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginatedModules.map((module) => (
                        <TableRow key={uuidv4()}>
                            <TableCell>{module.name}</TableCell>
                            <TableCell>{module.stars}</TableCell>
                            <TableCell>{module.rank}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Box display="flex" justifyContent="center" mt={2}>
                <Pagination
                    totalItems={modules.length}
                    itemsPerPage={ITEMS_PER_PAGE}
                    currentPage={page}
                    onPageChange={handleChangePage}
                />
            </Box>
        </Container>
    );
};

export default ModuleList;
