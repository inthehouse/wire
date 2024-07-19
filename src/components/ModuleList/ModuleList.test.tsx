import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ModuleList, { ModuleListProps } from './ModuleList';
import { Module } from '../../services/ApiService';

// mock pagination component
interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (newPage: number) => void;
}

jest.mock('../Pagination/Pagination', () => ({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) => (
    <div data-testid="pagination">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 0}>
            Previous
        </button>
        <span>{`Page ${currentPage + 1}`}</span>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= Math.ceil(totalItems / itemsPerPage) - 1}>
            Next
        </button>
    </div>
));

const mockModules: Module[] = [
    { name: 'Module A', stars: 100, rank: 1 },
    { name: 'Module B', stars: 200, rank: 2 },
    { name: 'Module C', stars: 150, rank: 3 },
    { name: 'Module D', stars: 180, rank: 4 },
    { name: 'Module E', stars: 90, rank: 5 },
];

const mockSortHandler = jest.fn();

describe('ModuleList Component', () => {
    let mockProps: ModuleListProps;

    beforeEach(() => {
        mockProps = {
            modules: mockModules,
            onSort: mockSortHandler,
            currentPage: 0,
        };
    });

    it('renders module list correctly with initial data', () => {
        render(<ModuleList {...mockProps} />);

        mockModules.forEach((module) => {
            const moduleNameElement = screen.getByText(module.name);
            expect(moduleNameElement).toBeInTheDocument();
        });

        const paginationElement = screen.getByTestId('pagination');
        expect(paginationElement).toBeInTheDocument();
    });

    it('updates pagination correctly when page changes', () => {
        const { rerender } = render(<ModuleList {...mockProps} />);

        const nextButton = screen.getByText('Next');
        fireEvent.click(nextButton);

        mockProps.currentPage = 1;
        rerender(<ModuleList {...mockProps} />);

        const paginationElement = screen.getByTestId('pagination');
        expect(paginationElement).toBeInTheDocument();
        expect(screen.getByText('Page 2')).toBeInTheDocument();
    });

    it('sorts modules correctly when clicking on name', () => {
        render(<ModuleList {...mockProps} />);
        fireEvent.click(screen.getByText('Name'));
        expect(mockSortHandler).toHaveBeenCalledWith('name');
    });

    it('sorts modules correctly when clicking on stars', () => {
        render(<ModuleList {...mockProps} />);
        fireEvent.click(screen.getByText('Stars'));
        expect(mockSortHandler).toHaveBeenCalledWith('stars');
    });
});
