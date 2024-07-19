import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';
import { searchModules } from '../../services/ApiService';

jest.mock('../../services/ApiService', () => ({
    searchModules: jest.fn(),
}));

describe('Home Component', () => {
    it('renders the home component and allows searching', async () => {
        const mockModules = {
            results: [{ name: 'react', stars: 1000, rank: 1 }],
        };
        (searchModules as jest.Mock).mockResolvedValue(mockModules);

        render(<Home />);

        const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
        const searchButton = screen.getByTestId('search-button');

        await userEvent.type(searchInput, 'react');
        await userEvent.click(searchButton);

        await waitFor(() => {
            expect(searchModules).toHaveBeenCalledWith('react');
            expect(screen.getByText(/react/i)).toBeInTheDocument();
        });
    });

    it('displays loading spinner while fetching modules', async () => {
        (searchModules as jest.Mock).mockImplementation(() => new Promise((resolve) => setTimeout(() => resolve({ results: [] }), 1000)));

        render(<Home />);

        const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
        const searchButton = screen.getByTestId('search-button');

        await userEvent.type(searchInput, 'react');
        await userEvent.click(searchButton);

        await waitFor(() => {
            expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(searchModules).toHaveBeenCalledWith('react');
        });
    });

    it('displays "No modules found" message when search yields no results', async () => {
        const mockModules = { results: [] };
        (searchModules as jest.Mock).mockResolvedValue(mockModules);

        render(<Home />);

        const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
        const searchButton = screen.getByTestId('search-button');

        await userEvent.type(searchInput, 'unknown');
        await userEvent.click(searchButton);

        await waitFor(() => {
            expect(searchModules).toHaveBeenCalledWith('unknown');
            expect(screen.getByText(/no modules found/i)).toBeInTheDocument();
        });
    });
});
