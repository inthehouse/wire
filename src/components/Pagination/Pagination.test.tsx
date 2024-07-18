import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
    const onPageChange = jest.fn();
    const onRowsPerPageChange = jest.fn();

    beforeEach(() => {
        onPageChange.mockClear();
        onRowsPerPageChange.mockClear();
    });

    it('renders pagination controls correctly', () => {
        render(
            <Pagination
                totalItems={50}
                itemsPerPage={10}
                currentPage={0}
                onPageChange={onPageChange}
            />
        );

        expect(screen.getByText('Rows per page:')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Previous Page' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Next Page' })).toBeInTheDocument();
    });

    it('calls onPageChange when Previous Page button is clicked', () => {
        render(
            <Pagination
                totalItems={50}
                itemsPerPage={10}
                currentPage={1}
                onPageChange={onPageChange}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: 'Previous Page' }));
        expect(onPageChange).toHaveBeenCalledWith(0);
    });

    it('calls onPageChange when Next Page button is clicked', () => {
        render(
            <Pagination
                totalItems={50}
                itemsPerPage={10}
                currentPage={1}
                onPageChange={onPageChange}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: 'Next Page' }));
        expect(onPageChange).toHaveBeenCalledWith(2);
    });

    it('calls onRowsPerPageChange when Rows per page is changed', () => {
        render(
            <Pagination
                totalItems={50}
                itemsPerPage={10}
                currentPage={1}
                onPageChange={onPageChange}
            />
        );

        fireEvent.change(screen.getByRole('combobox'), { target: { value: '25' } });
        expect(onRowsPerPageChange).toHaveBeenCalledWith(25);
    });
});
