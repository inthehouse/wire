import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';

describe('Sidebar Component Tests', () => {
    it('should render with menu items', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Inbox')).toBeInTheDocument();
        expect(screen.getByText('Starred')).toBeInTheDocument();
        expect(screen.getByText('Send email')).toBeInTheDocument();
        expect(screen.getByText('Drafts')).toBeInTheDocument();
    });
});
