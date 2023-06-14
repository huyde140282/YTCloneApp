import React from "react";
import { InputFieldProps } from "./types";

const InputField = (props: InputFieldProps) => {
  const { errors, register, label, type, name, errorMessage, required } = props;
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 font-bold text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...(register(name),
        {
          required,
          pattern: "",
        })}
        className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-black"
        color="black"
      />
      {errors[name] && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
