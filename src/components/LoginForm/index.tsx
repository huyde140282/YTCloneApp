import React from 'react';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import { LoginFormProps } from './types';
import { initialValues, loginInputFields, validationSchema } from './constant';
import InputField from '@/atoms/InputField';
import { Button } from '@/atoms/Button';
import { ToastContainer } from 'react-toastify';
import LoadingSpinner from '@/atoms/LoadingSpinner';

const LoginForm: React.FC<LoginFormProps> = ({ loginUser, isLoading }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <ToastContainer />

      {/* Semi-transparent backdrop */}
      <div className="absolute inset-0 bg-gray-300 opacity-50 backdrop-filter backdrop-blur-sm"></div>

      {/* Login form container */}
      <div className="bg-gray-300 p-8 rounded-xl shadow-md w-full max-w-md mx-4 md:w-2/3 relative">
        {isLoading ? (
          // Display loading spinner while logging in
          <LoadingSpinner />
        ) : (
          <>
            <h2 className="text-[#0b3d72] text-3xl font-bold mb-2 text-center">
              Sign in
            </h2>
            <p className="text-[#0b3d72] text-sm mb-4 text-center">
              Welcome to the Video Sharing Platform! Share and explore engaging
              videos.
            </p>

            {/* Login form */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={loginUser}
            >
              <Form className="w-full">
                {/* Render input fields for login */}
                {loginInputFields.map(({ name, label, type }) => (
                  <InputField
                    key={name}
                    name={name}
                    label={label}
                    type={type}
                    color="blue"
                  />
                ))}
                <Button name="Login" />
              </Form>
            </Formik>

            {/* Create new account link */}
            <div className="mt-4 flex justify-between">
              <Link className="text-sm text-[#007aff]" href="/register">
                Create new account?
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
