"use client";
import LoginForm from "@/components/LoginForm";
import { auth } from "@/firebase";
import { login } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { User } from "@/shared/types";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Login: NextPage = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = async (user: User) => {
    console.log(user);
    const { email, password } = user;
    try {
      const newUser = await signInWithEmailAndPassword(email, password);
      if (!newUser) return;
      dispatch(login(user));
      router.push("/");
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };
  useEffect(() => {
    if (error)
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
  }, [error]);

  return <LoginForm loginUser={handleLogin} />;
};

export default Login;
