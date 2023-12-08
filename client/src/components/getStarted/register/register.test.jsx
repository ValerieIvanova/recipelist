import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Register from './Register';
import AuthContext from '../../../contexts/authContext';

describe('Register Component', () => {
    const renderRegister = () => {
        return render(
            <AuthContext.Provider value={{}}>
                <Register />
            </AuthContext.Provider>
        );
    };

    it('renders the registration form fields', () => {
        renderRegister();
        const emailField = screen.getByLabelText('Email');
        const usernameField = screen.getByLabelText('Username');
        const passwordField = screen.getByLabelText('Password');
        const repeatPasswordField = screen.getByLabelText('Repeat Password');
        const submitButton = screen.getByRole('button', { name: 'Sign Up' });

        expect(emailField).toBeInTheDocument();
        expect(usernameField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
        expect(repeatPasswordField).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });
});
