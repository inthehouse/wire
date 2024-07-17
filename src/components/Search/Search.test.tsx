import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './Search';

describe('SearchBar Component', () => {
    it('calls onSearch with the input value when the form is submitted', () => {
        const mockOnSearch = jest.fn();
        render(<SearchBar onSearch={mockOnSearch} />);

        const input = screen.getByLabelText('Search for a module');
        const button = screen.getByRole('button', { name: /Search/i });

        fireEvent.change(input, { target: { value: 'react' } });
        fireEvent.click(button);

        expect(mockOnSearch).toHaveBeenCalledWith('react');
    });
});
