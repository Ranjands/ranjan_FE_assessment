import React from 'react';
import { render, screen  } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DetailsPage from '../DetailsPage';

describe('DetailsPage component', () => {
    test('renders "University not found" when no university with the provided name is found', () => {
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(JSON.stringify([]));
        render(<DetailsPage />);
        expect(screen.getByText('University not found')).toBeInTheDocument();
      });
      
});