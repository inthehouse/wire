import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
    it('renders pagination component and handles page change', () => {
        const handlePageChange = jest.fn();
        render(
            <Pagination
                currentPage={1}
                totalItems={10}
                itemsPerPage={5}
                onPageChange={handlePageChange}
            />
        );

        const nextPageButton = screen.getByRole('button', { name: /next/i });
        fireEvent.click(nextPageButton);

        expect(handlePageChange).toHaveBeenCalledWith(2);
    });
});
