"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { NewUser } from "@/shared/types";
import RegisterForm from "@/components/RegisterForm";

const RegisterPage: NextPage = () => {
  const router = useRouter();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = async (data: NewUser) => {
    const { email, password } = data;
    try {
      // For example, make an API call to register the user
      const newUser = await createUserWithEmailAndPassword(email, password);
      if (!newUser) return;
      // Redirect to the login page after successful registration
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("error");
    if (error)
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
  }, [error]);

  return <RegisterForm registerUser={handleRegister} />;
};

export default RegisterPage;
