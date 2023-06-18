export type LoginFormFormData = {
  email: string;
  password: string;
};
export type LoginFormProps = {
  loginUser: (data: LoginFormFormData) => void;
  isLoading: boolean;
};
