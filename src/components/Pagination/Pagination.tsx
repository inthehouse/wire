import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <MuiPagination
            count={totalPages}
            page={currentPage}
            color="primary"
            onChange={(event, value) => onPageChange(value)}
        />
    );
};

export default Pagination;
