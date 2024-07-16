import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';
import { searchModules } from '../../services/ApiService';

jest.mock('../../services/ApiService');

const mockModules = [
    { name: 'react', owner: 'facebook', stars: 180000 },
    { name: 'react-router', owner: 'remix', stars: 42000 },
    { name: 'react-redux', owner: 'reduxjs', stars: 20000 },
];

describe('Home Component', () => {
    it('renders Home component and triggers search on button click', async () => {
        (searchModules as jest.Mock).mockResolvedValueOnce(mockModules);

        render(<Home />);

        expect(screen.getByText('Welcome to Home')).toBeInTheDocument();

        const input = screen.getByLabelText('Search for a module');
        const button = screen.getByRole('button', { name: /Search/i });

        fireEvent.change(input, { target: { value: 'react' } });
        fireEvent.click(button);

        await waitFor(() => {
            expect(input).toHaveValue('react');
        });

        await waitFor(() => {
            mockModules.forEach((module) => {
                expect(screen.getByText(module.name)).toBeInTheDocument();
                expect(screen.getByText(`Owner: ${module.owner} | Stars: ${module.stars}`)).toBeInTheDocument();
            });
        });
    });
});
