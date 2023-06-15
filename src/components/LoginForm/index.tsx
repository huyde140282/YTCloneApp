import React from "react";
import { Form, Formik } from "formik";
import Link from "next/link";
import { LoginFormProps } from "./types";
import { initialValues, loginInputFields, validationSchema } from "./constant";
import InputField from "@/atoms/InputField";
import { Button } from "@/atoms/Button";

const LoginForm: React.FC<LoginFormProps> = ({ loginUser }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div
        className="bg-red-500 p-8 rounded-xl shadow-md"
        style={{ background: "linear-gradient(to bottom, red, black)" }}
      >
        <h2 className="text-white text-2xl mb-6 text-center">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={loginUser}
        >
          <Form className="w-full max-w-sm">
            {loginInputFields.map(
              ({ loginName, label, type, required }) => (
                <InputField
                  key={loginName}
                  name={loginName}
                  label={label}
                  type={type}
                  required={required}
                />
              )
            )}
            <Button name="Login" />
          </Form>
        </Formik>
        <div className="mt-4 flex justify-between">
          <Link className="text-sm text-white" href="/register">
            Create new account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
