import React from 'react';
import { ShareYouTubeVideoProps } from './types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  initialValues,
  sharedVideoInputFields,
  validationSchema,
} from './constant';
import InputField from '../../atoms/InputField';
import LoadingSpinner from '@/atoms/LoadingSpinner';
import { ToastContainer } from 'react-toastify';

const ShareVideoForm: React.FC<ShareYouTubeVideoProps> = ({
  onShareVideo,
  isLoading,
}) => {
  return (
    <div className="flex justify-center h-screen">
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onShareVideo}
      >
        <Form className="w-2/3 md:w-1/2 mx-auto mt-8">
          <fieldset className="border-2 border-white p-8 h-auto">
            {/* Display loading spinner */}
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                {/* Form title */}
                <legend className="text-lg font-semibold text-[#007aff]">
                  Share a Youtube movie
                </legend>
                <div className="mb-6">
                  {/* Input fields for sharing video */}
                  {sharedVideoInputFields.map(({ label, type, name }) => (
                    <InputField
                      key={name}
                      name={name}
                      label={label}
                      type={type}
                      color="white"
                    />
                  ))}
                </div>
                <div className="mb-6">
                  {/* Description field */}
                  <label
                    htmlFor="description"
                    className="block font-medium text-gray-300"
                  >
                    Description
                  </label>
                  <Field
                    as="textarea"
                    id="description"
                    name="description"
                    className="flex-grow px-2 py-2 border rounded-md w-full"
                    placeholder="Enter a description"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col items-center gap-7">
                  {/* Share button */}
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md w-full shadow-md"
                  >
                    Share
                  </button>
                </div>
              </>
            )}
          </fieldset>
        </Form>
      </Formik>
    </div>
  );
};

export default ShareVideoForm;
