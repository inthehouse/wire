import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
    const setup = (currentPage: number, totalItems: number, itemsPerPage: number) => {
        const handlePageChange = jest.fn();
        render(
            <Pagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        );
        return { handlePageChange };
    };

    it('renders the pagination component with correct buttons enabled and disabled', () => {
        setup(0, 50, 5);

        const prevButton = screen.getByText(/previous/i);
        const nextButton = screen.getByText(/next/i);

        expect(prevButton).toBeDisabled();
        expect(nextButton).toBeEnabled();
    });

    it('calls onPageChange with correct arguments when next button is clicked', () => {
        const { handlePageChange } = setup(0, 50, 5);

        const nextButton = screen.getByText(/next/i);
        fireEvent.click(nextButton);

        expect(handlePageChange).toHaveBeenCalledWith(1);
    });

    it('calls onPageChange with correct arguments when previous button is clicked', () => {
        const { handlePageChange } = setup(1, 50, 5);

        const prevButton = screen.getByText(/previous/i);
        fireEvent.click(prevButton);

        expect(handlePageChange).toHaveBeenCalledWith(0);
    });

    it('disables next button on the last page', () => {
        setup(9, 50, 5);

        const nextButton = screen.getByText(/next/i);

        expect(nextButton).toBeDisabled();
    });

    it('enables previous button when not on the first page', () => {
        setup(1, 50, 5);

        const prevButton = screen.getByText(/previous/i);

        expect(prevButton).toBeEnabled();
    });
});
