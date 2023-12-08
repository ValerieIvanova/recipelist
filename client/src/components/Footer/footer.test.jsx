import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';


describe('Footer Component', () => {
    it('renders the text', () => {
        render(<Footer />);
        const text = screen.getByText('Whip, Mix and Savor! All recipes are culinary adventures waiting to be explored. Join our flavorful journey and unleash your inner chef!');
        expect(text).toBeInTheDocument();
    });
});