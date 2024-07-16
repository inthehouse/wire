import React from 'react';
import { render, screen } from '@testing-library/react';
import ModuleList from './ModuleList';

const mockModules = [
    { name: 'react', owner: 'facebook', stars: 180000 },
    { name: 'react-router', owner: 'remix', stars: 42000 },
    { name: 'react-redux', owner: 'reduxjs', stars: 20000 },
];

describe('ModuleList Component', () => {
    it('renders modules list', () => {
        render(<ModuleList modules={mockModules} />);

        mockModules.forEach((module) => {
            expect(screen.getByText(module.name)).toBeInTheDocument();
            expect(screen.getByText(`Owner: ${module.owner} | Stars: ${module.stars}`)).toBeInTheDocument();
        });
    });
});
