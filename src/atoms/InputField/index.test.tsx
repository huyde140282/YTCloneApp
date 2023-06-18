import React from 'react';
import { render, screen } from '@testing-library/react';
import InputField from './';
import { Formik } from 'formik';

test('renders input field with label', () => {
  const label = 'Email';
  const name = 'email';
  const type = 'email';

  render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <InputField label={label} name={name} type={type} color={'blue'} />
    </Formik>
  );

  const labelElement = screen.getByText(label);
  const inputElement = screen.getByRole('textbox');
  const errorElement = screen.queryByText('Email is required'); // Assuming there is an error message for the email field

  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(errorElement).toBeNull();
});
