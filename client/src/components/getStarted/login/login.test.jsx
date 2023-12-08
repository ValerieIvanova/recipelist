import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './Login';
import AuthContext from '../../../contexts/authContext';

describe('Login Component', () => {
    const renderLogin = () => {
        return render(
            <AuthContext.Provider value={{}}>
                <Login />
            </AuthContext.Provider>
        );
    };

    it('renders the login form fields', () => {
        renderLogin();
        const emailField = screen.getByLabelText('Email');
        const passwordField = screen.getByLabelText('Password');
        const submitButton = screen.getByRole('button', { name: 'Sign In' });

        expect(emailField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });
});
