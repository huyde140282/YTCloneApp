import { LoginFormFormData } from "@/components/LoginForm/types";
import { auth } from "@/firebase/config";
import { login } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { showErrorToast } from "@/shared/handler";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

export default function useHandleLogin() {
    // Firebase authentication hook
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    // Function to handle login
    const handleLogin = async (data: LoginFormFormData) => {
        const { email, password } = data;
        // Set loading to true
        setLoading(true);
        try {
            // Sign in with email and password
            const newUser = await signInWithEmailAndPassword(email, password);
            if (!newUser) {
                // If user does not exist or login credentials are incorrect
                showErrorToast("User does not exist or username/password is incorrect");
                return;
            }
            const {
                user: { uid },
            } = newUser;
            dispatch(login({ ...data, id: uid }));
            router.push("/");
        } catch (error) {
            showErrorToast("Something went wrong");
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
