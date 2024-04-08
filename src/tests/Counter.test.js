// import necessary react testing library helpers here
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
    // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () => {
    const counterMessage = screen.getByText(/counter/i);
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    const countDisplay = screen.getByText(/0/i);
    expect(countDisplay).toBeInTheDocument();
});

test('clicking + increments the count', () => {
    const incrementButton = screen.getByText(/\+/i);
    fireEvent.click(incrementButton);

    const countDisplay = screen.getByText(/1/i);
    expect(countDisplay).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
    const decrementButton = screen.getByText(/\-/i);
    fireEvent.click(decrementButton);

    const countDisplay = screen.getByText(/-1/i);
    expect(countDisplay).toBeInTheDocument();
});

