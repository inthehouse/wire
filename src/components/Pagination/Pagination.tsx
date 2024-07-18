import React from 'react';
import { Grid, Button } from '@mui/material';

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}) => {

    const handlePageChange = (newPage: number) => {
        onPageChange(newPage);
    };

    return (
        <Grid container justifyContent="center" spacing={2} mt={2}>
            <Grid item>
                <Button
                    size="small"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                    variant="contained"
                    color="primary"
                >
                    Previous
                </Button>
            </Grid>
            <Grid item>
                <Button
                    size="small"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= Math.ceil(totalItems / itemsPerPage) - 1}
                    variant="contained"
                    color="primary"
                >
                    Next
                </Button>
            </Grid>
        </Grid>
    );
};

export default Pagination;
