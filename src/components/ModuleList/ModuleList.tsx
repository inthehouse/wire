import React, { useState, useEffect, useMemo } from 'react';
import { Module } from '../../services/ApiService';
import { v4 as uuidv4 } from 'uuid';
import { Table, TableHead, TableRow, TableCell, TableBody, Box, Container, Link, styled } from '@mui/material';
import Pagination from '../Pagination/Pagination';

export interface ModuleListProps {
    modules: Module[];
    onSort: (property: keyof Module) => void;
    currentPage: number;
}

const ITEMS_PER_PAGE = 5;
const COLUMN_NAMES = {
    NAME: 'Name',
    STARS: 'Stars',
    RANK: 'Rank',
};

const StyledContainer = styled(Container)({
    marginTop: '16px',
});

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

    const paginatedModules = useMemo(() => {
        const startIndex = page * ITEMS_PER_PAGE;
        return modules.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [modules, page]);

    return (
        <StyledContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Link href="#" underline="none" onClick={() => handleSort('name')} role="button">
                                {COLUMN_NAMES.NAME}
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Link href="#" underline="none" onClick={() => handleSort('stars')} role="button">
                                {COLUMN_NAMES.STARS}
                            </Link>
                        </TableCell>
                        <TableCell>{COLUMN_NAMES.RANK}</TableCell>
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
                    data-testid="pagination"
                    totalItems={modules.length}
                    itemsPerPage={ITEMS_PER_PAGE}
                    currentPage={page}
                    onPageChange={handleChangePage}
                />
            </Box>
        </StyledContainer>
    );
};

export default ModuleList;
