import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SortingDropdown from '../SortDropDown';

describe('SortingDropdown', () => {
  test('calls the onChange callback with the selected value', () => {
    const mockOnChange = jest.fn();
    render(<SortingDropdown onChange={mockOnChange} />);

    const sortingDropdown = screen.getByRole('combobox');
    fireEvent.change(sortingDropdown, { target: { value: 'asc' } });

    expect(mockOnChange).toHaveBeenCalledWith('asc');
  });

  test('renders the default "Select Sorting Option" option', () => {
    render(<SortingDropdown onChange={jest.fn()} />);

    const defaultOption = screen.getByRole('option', { name: 'Select Sorting Option' });
    expect(defaultOption).toBeInTheDocument();
  });

  test('renders the "A to Z" and "Z to A" options', () => {
    render(<SortingDropdown onChange={jest.fn()} />);

    const ascOption = screen.getByRole('option', { name: 'A to Z' });
    const descOption = screen.getByRole('option', { name: 'Z to A' });

    expect(ascOption).toBeInTheDocument();
    expect(descOption).toBeInTheDocument();
  });
});