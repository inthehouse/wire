import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component Tests', () => {
    it('should be displayed', () => {
        render(<Footer />);
        expect(screen.getByText('My Search © 2024')).toBeInTheDocument();
    });
});
