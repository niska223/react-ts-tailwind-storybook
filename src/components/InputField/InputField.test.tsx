import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputField } from './InputField';

describe('InputField', () => {
  it('renders with label and placeholder', () => {
    render(<InputField label="Test" placeholder="Type here" />);
    expect(screen.getByLabelText('Test')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument();
  });

  it('shows error message when invalid', () => {
    render(<InputField label="Email" invalid errorMessage="Invalid email" />);
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<InputField label="Name" onChange={handleChange} />);
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'abc' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('can be cleared if clearable', () => {
    const handleChange = jest.fn();
    render(<InputField label="Clearable" clearable value="abc" onChange={handleChange} />);
    fireEvent.click(screen.getByLabelText('Clear input'));
    expect(handleChange).toHaveBeenCalled();
  });
});
