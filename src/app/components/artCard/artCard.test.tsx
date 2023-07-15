import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the extend-expect module
import ArtCard from './page';
describe('ArtCard', () => {
    it('displays the title', () => {
        render(<ArtCard title="Test Title" />);
        const title = screen.getByText('Test Title');
        expect(title).toBeInTheDocument();
    });
});