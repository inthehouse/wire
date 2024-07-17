import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        onPageChange(page);
    };

    return (
        <MuiPagination
            count={pageCount}
            page={currentPage}
            onChange={handleChange}
            color="primary"
        />
    );
};

export default Pagination;
