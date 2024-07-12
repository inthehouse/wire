import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component Tests', () => {
    it('should be displayed', () => {
        render(<Header />);
        expect(screen.getByText('My Bower Search')).toBeInTheDocument();
    });
});
