import { FieldErrors, UseFormRegister } from "react-hook-form";
export type InputFieldProps = {
    errors: FieldErrors<any>;
    register: UseFormRegister<any>;
    label: string;
    type: string;
    name: string;
    errorMessage: string;
    required?: boolean;
};