import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Home from './Home';
import { searchModules } from '../../services/ApiService';

jest.mock('../../services/ApiService', () => ({
    searchModules: jest.fn(),
}));

describe('Home Component', () => {
    it('renders the home component and allows searching', async () => {
        const mockModules = {
            results: [{ name: 'react', stars: 1000, rank: 1 }],
            total: 1,
        };
        (searchModules as jest.Mock).mockResolvedValue(mockModules);

        render(<Home />);

        const searchInput = screen.getByLabelText(/search for a module/i);
        const searchButton = screen.getByRole('button', { name: /search/i });

        fireEvent.change(searchInput, { target: { value: 'react' } });
        fireEvent.click(searchButton);

        await waitFor(() => {
            expect(searchModules).toHaveBeenCalledWith('react', 1);
            expect(screen.getByText(/react/i)).toBeInTheDocument();
        });
    });
});
