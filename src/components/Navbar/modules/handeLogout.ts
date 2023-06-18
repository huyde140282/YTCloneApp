import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/features/authSlice';
import { auth } from '@/firebase/config';
import { useAppSelector } from '@/redux/hooks';

export const useHandleLogout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await auth.signOut();
      dispatch(logout());
      setTimeout(() => {
        router.push('/login');
      }, 1000);
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setLoading(false);
    }
  };
  return {
    handleLogout,
    loading,
    user,
  };
};
