import { Button } from "../../atoms/Button";
import {
  initialValues,
  registerInputFields,
  validationSchema,
} from "./constant";
import { Form, Formik } from "formik";
import { RegisterFormProps } from "./types";
import InputField from "@/atoms/InputField";

const RegisterForm: React.FC<RegisterFormProps> = ({ registerUser }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={registerUser}
      >
        <Form className="w-full max-w-sm">
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
    </div>
  );
};

export default RegisterForm;
