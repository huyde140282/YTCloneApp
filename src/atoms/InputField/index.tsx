import React from "react";
import { Field, ErrorMessage } from "formik";
import { InputFieldProps } from "./types";

const InputField = (props: InputFieldProps) => {
  const { label, name, type, color } = props;

  const labelClassName =
    color === "blue"
      ? "block mb-2 font-bold text-[#0b3d72]"
      : "block mb-2 font-bold text-white";

  return (
    <div className="mb-4">
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-black"
      />
      <ErrorMessage name={name} component="span" className="text-red-500" />
    </div>
  );
};

export default InputField;
