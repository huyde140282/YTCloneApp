import { Button } from "../../atoms/Button";
import {
  initialValues,
  registerInputFields,
  validationSchema,
} from "./constant";
import { Form, Formik } from "formik";
import { RegisterFormProps } from "./types";
import InputField from "@/atoms/InputField";
import Link from "next/link";
import LoadingSpinner from "@/atoms/LoadingSpinner";
import { ToastContainer } from "react-toastify";

const RegisterForm: React.FC<RegisterFormProps> = ({
  registerUser,
  isLoading,
}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <ToastContainer />
      <div className="absolute inset-0 bg-gray-300 opacity-50 backdrop-filter backdrop-blur-sm"></div>
      <div className="bg-gray-300 p-8 rounded-xl shadow-md w-full max-w-md mx-4 md:w-1/3 relative">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <h2 className="text-[#0b3d72] text-3xl font-bold mb-2 text-center">
              Sign up
            </h2>
            <p className="text-[#0b3d72] text-sm mb-4 text-center">
              Welcome to the Video Sharing Platform! Share and explore engaging
              videos.
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={registerUser}
            >
              <Form className="w-full">
                {registerInputFields.map(({ registerName, label, type }) => (
                  <InputField
                    key={registerName}
                    name={registerName}
                    label={label}
                    type={type}
                  />
                ))}
                <Button name="Register" />
              </Form>
            </Formik>
            <div className="mt-4 flex justify-between">
              <Link className="text-sm text-[#007aff]" href="/login">
                Already have an account? Sign in
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
