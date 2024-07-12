import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
    it('renders the welcome message', () => {
        render(<Home />);
        expect(screen.getByText('Welcome to Home')).toBeInTheDocument();
    });

    it('renders the button with correct text', () => {
        render(<Home />);
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });
});
