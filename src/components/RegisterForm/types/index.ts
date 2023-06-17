export type RegisterFormData = {
    username: string;
    email: string;
    password: string;
}
export type RegisterFormProps = {
    registerUser: (data: RegisterFormData) => void;
    isLoading: boolean
}
