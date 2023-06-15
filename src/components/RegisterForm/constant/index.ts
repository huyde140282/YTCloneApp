import { RegisterFormData } from "../types";
import * as Yup from "yup";

export const registerInputFields: Record<string, string>[] = [
    {
        registerName: 'username',
        label: 'Username',
        type: 'text',
        name: 'username',
    },
    {
        registerName: 'email',
        label: 'Email',
        type: 'email',
        name: 'email',
    },
    {
        registerName: 'password',
        label: 'Password',
        type: 'password',
        name: 'password',
    },
]
export const initialValues: RegisterFormData = {
    username: "",
    password: "",
    email: "",
};
export const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
});
