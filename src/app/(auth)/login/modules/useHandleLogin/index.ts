import { LoginFormFormData } from '@/components/LoginForm/types';
import { auth } from '@/firebase/config';
import { login } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { showErrorToast } from '@/shared/handler';
import { SOMETHING_WENT_WRONG, USER_DOES_NOT_EXIST } from '@/shared/message';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

export default function useHandleLogin() {
  // Firebase authentication hook
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // Function to handle login
  const handleLogin = async (data: LoginFormFormData) => {
    console.log(data);
    const { email, password } = data;
    // Set loading to true
    setLoading(true);
    try {
      // Sign in with email and password
      const newUser = await signInWithEmailAndPassword(email, password);
      if (!newUser) {
        // If user does not exist or login credentials are incorrect
        showErrorToast(USER_DOES_NOT_EXIST);
        return;
      }
      const {
        user: { uid },
      } = newUser;
      dispatch(login({ ...data, id: uid }));
      router.push('/');
    } catch (error) {
      showErrorToast(SOMETHING_WENT_WRONG);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return {
    handleLogin,
    loading,
  };
}
