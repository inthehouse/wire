import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Search from './Search';

interface SearchProps {
    onSearch: (query: string) => void;
}

describe('Search Component', () => {
    const mockProps: SearchProps = {
        onSearch: jest.fn(),
    };

    it('renders search form correctly', () => {
        render(<Search onSearch={mockProps.onSearch} />);

        expect(screen.getByText('Search your modules here')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
    });

    it('calls onSearch prop with correct query on form submission', () => {
        render(<Search onSearch={mockProps.onSearch} />);

        const searchInput = screen.getByRole('textbox') as HTMLInputElement;
        fireEvent.change(searchInput, { target: { value: 'react' } });

        const searchButton = screen.getByRole('button', { name: 'Search' });
        fireEvent.click(searchButton);

        expect(mockProps.onSearch).toHaveBeenCalledWith('react');
    });

    it('does not call onSearch prop when query is empty on form submission', () => {
        render(<Search onSearch={mockProps.onSearch} />);

        const searchButton = screen.getByRole('button', { name: 'Search' });
        fireEvent.click(searchButton);

        expect(mockProps.onSearch).not.toHaveBeenCalled();
    });
});
