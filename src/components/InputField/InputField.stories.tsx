import React, { useState } from 'react';
import { InputField, InputFieldProps } from './InputField';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<InputFieldProps> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<InputFieldProps>;

export const Basic: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'This is a helper text',
    variant: 'outlined',
    size: 'md',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    errorMessage: 'Invalid email',
    invalid: true,
    variant: 'filled',
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    placeholder: 'Disabled input',
    disabled: true,
    variant: 'ghost',
    size: 'md',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    passwordToggle: true,
    variant: 'outlined',
    size: 'md',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading',
    placeholder: 'Loading input',
    loading: true,
    variant: 'outlined',
    size: 'md',
  },
};

export const Clearable: Story = {
  render: (args: InputFieldProps) => {
    const [value, setValue] = useState('Clear me!');
    return (
      <InputField
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
        clearable
      />
    );
  },
  args: {
    label: 'Clearable',
    placeholder: 'Type something',
    variant: 'outlined',
    size: 'md',
  },
};
