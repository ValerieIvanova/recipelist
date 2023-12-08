import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import AuthContext from '../../contexts/authContext';

describe('Header Component', () => {
    const mockAuthContext = {
        isAuthenticated: true,
        username: 'testUser',
    };

    it('renders the navigation links when authenticated', () => {
        render(
            <Router>
                <AuthContext.Provider value={mockAuthContext}>
                    <Header />
                </AuthContext.Provider>
            </Router>
        );

        const homeLink = screen.getByText('Home');
        const recipesLink = screen.getByText('Recipes');
        const contactsLink = screen.getByText('Contacts');
        const addRecipeLink = screen.getByText('Add Recipe');
        const myRecipesLink = screen.getByText('My Recipes');
        const profileLink = screen.getByText('Profile');
        const logoutLink = screen.getByText('Logout');

        expect(homeLink).toBeInTheDocument();
        expect(recipesLink).toBeInTheDocument();
        expect(contactsLink).toBeInTheDocument();
        expect(addRecipeLink).toBeInTheDocument();
        expect(myRecipesLink).toBeInTheDocument();
        expect(profileLink).toBeInTheDocument();
        expect(logoutLink).toBeInTheDocument();
    });

    it('renders the "Get Started" button when not authenticated', () => {
        render(
            <Router>
                <AuthContext.Provider value={{ isAuthenticated: false }}>
                    <Header />
                </AuthContext.Provider>
            </Router>
        );

        const getStartedButton = screen.getByText('Get Started');
        expect(getStartedButton).toBeInTheDocument();
    });
});
