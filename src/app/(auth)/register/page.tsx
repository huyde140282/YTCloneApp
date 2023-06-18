'use client';
import { NextPage } from 'next';
import RegisterForm from '@/components/RegisterForm';
import { useHandleRegister } from './modules/useHandleRegister';

const RegisterPage: NextPage = () => {
  const { handleRegister, loading } = useHandleRegister();

  return <RegisterForm registerUser={handleRegister} isLoading={loading} />;
};

export default RegisterPage;
