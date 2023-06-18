import { useRouter } from 'next/navigation';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { NewUser } from '@/shared/types';
import { doc, setDoc } from 'firebase/firestore';
import { auth, firestore } from '@/firebase/config';
import { showErrorToast } from '@/shared/handler';
import { SOMETHING_WENT_WRONG, USER_ALREADY_EXISTS } from '@/shared/message';

export function useHandleRegister() {
  const router = useRouter();
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to handle the registration process
  const handleRegister = async (data: NewUser) => {
    const { username, email, password } = data;
    setLoading(true);

    try {
      // Create a new user with email and password
      const newUser = await createUserWithEmailAndPassword(email, password);

      // If user creation fails, show an error toast and return
      if (!newUser) {
        showErrorToast(USER_ALREADY_EXISTS);
        return;
      }

      // Create user data object
      const userData = {
        id: newUser.user.uid,
        username,
        email,
        password,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      // Save user data to Firestore
      await setDoc(doc(firestore, 'users', newUser.user.uid), userData);

      // Redirect to login page after successful registration
      router.push('/login');
    } catch (error) {
      showErrorToast(SOMETHING_WENT_WRONG);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return {
    handleRegister,
    loading,
  };
}
