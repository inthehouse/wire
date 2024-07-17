import React from 'react';
import { render, screen } from '@testing-library/react';
import ModuleList from './ModuleList';

const mockModules = [
    { name: 'react', stars: 1000, rank: 1 },
    { name: 'vue', stars: 900, rank: 2 },
];

describe('ModuleList Component', () => {
    it('renders modules list when data is provided', () => {
        render(<ModuleList modules={mockModules} />);

        expect(screen.getByText('react')).toBeInTheDocument();
        expect(screen.getByText('Stars: 1000')).toBeInTheDocument();
        expect(screen.getByText('Rank: 1')).toBeInTheDocument();

        expect(screen.getByText('vue')).toBeInTheDocument();
        expect(screen.getByText('Stars: 900')).toBeInTheDocument();
        expect(screen.getByText('Rank: 2')).toBeInTheDocument();
    });
});
