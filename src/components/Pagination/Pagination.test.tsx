import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
    it('renders the correct number of page buttons', () => {
        render(<Pagination currentPage={1} totalPages={5} onPageChange={() => { }} />);

        expect(screen.getAllByRole('button')).toHaveLength(5);
    });

    it('highlights the current page button', () => {
        render(<Pagination currentPage={2} totalPages={5} onPageChange={() => { }} />);

        expect(screen.getByText('2')).toHaveAttribute('class', expect.stringContaining('MuiButton-contained'));
    });

    it('calls onPageChange when a button is clicked', () => {
        const handlePageChange = jest.fn();
        render(<Pagination currentPage={1} totalPages={5} onPageChange={handlePageChange} />);

        fireEvent.click(screen.getByText('3'));

        expect(handlePageChange).toHaveBeenCalledWith(3);
    });
});
