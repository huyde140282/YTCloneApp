import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "../../atoms/Button";
import { inputFields } from "./constant";
import InputField from "../../atoms/InputField";
import { RegisterFormData } from "./types";

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();
  const router = useRouter();

  const onSubmit = (data: RegisterFormData) => {
    // Add your form submission logic here
    // For example, make an API call to register the user
    // and handle any success or error scenarios
    router.push("/");
    // Redirect to the dashboard after successful registration
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        {inputFields.map((field) => (
          <InputField
            key={field.registerName}
            errors={errors}
            register={register}
            name={field.registerName}
            label={field.label}
            type={field.type}
            required
            errorMessage={field.errorMessage}
          />
        ))}
        <Button name="Register" />
      </form>
    </div>
  );
};

export default RegisterForm;
