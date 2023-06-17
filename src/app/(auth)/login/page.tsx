"use client";
import LoginForm from "@/components/LoginForm";

import { NextPage } from "next";
import useHandleLogin from "./modules/handleLogin";

const Login: NextPage = () => {
  const { handleLogin, loading } = useHandleLogin();

  return <LoginForm loginUser={handleLogin} isLoading={loading} />;
};

export default Login;
