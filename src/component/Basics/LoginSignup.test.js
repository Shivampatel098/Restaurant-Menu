/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react'; // Import the necessary testing functions
import { MemoryRouter } from 'react-router-dom';
import LoginSignup from './LoginSignup';

describe('LoginSignup Component', () => {
  it('Renders the Login form by default', () => {
    const component = (
      <MemoryRouter>
        <LoginSignup />
      </MemoryRouter>
    );    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });

  it('Switches to the Sign Up form when "Sign Up" button is clicked', () => {
    const component = (
      <MemoryRouter>
        <LoginSignup />
      </MemoryRouter>
    );
    const { container, getByRole } = render(component);
  
    // Find and click the "Sign Up" button by its role
    const signUpButton = getByRole('signup-button');
    fireEvent.click(signUpButton);

    expect(container).toMatchSnapshot();
  });

  it('Validates form inputs and displays error messages', () => {
    const component = (
      <MemoryRouter>
        <LoginSignup />
      </MemoryRouter>
    );    const { container, getByText, getByRole, getByPlaceholderText } = render(component);

    // Find and click the "Sign Up" button
    const signUpButton = getByRole('signup-button');
    fireEvent.click(signUpButton);

    // Find input fields
    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email ID');
    const passwordInput = getByPlaceholderText('Password');

    // Find the submit button
    const submitButton = getByRole('signup-button');

    // Click the submit button without filling in any fields
    fireEvent.click(submitButton);
    expect(container).toMatchSnapshot();

    // Fill in an invalid email and click the submit button
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);
    expect(container).toMatchSnapshot();

    // Fill in a valid email and click the submit button
    fireEvent.change(emailInput, { target: { value: 'valid-email@example.com' } });
    fireEvent.click(submitButton);
    expect(container).toMatchSnapshot();
  });
});
