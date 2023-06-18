import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { NewUser } from "@/shared/types";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "@/firebase/config";
import { showErrorToast } from "@/shared/handler";
import { SOMETHING_WENT_WRONG, USER_ALREADY_EXISTS } from "@/shared/message";

export function useHandleRegister() {
    const router = useRouter();
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [loading, setLoading] = useState<boolean>(false);

    const handleRegister = async (data: NewUser) => {
        const { username, email, password } = data;
        setLoading(true);

        try {
            const newUser = await createUserWithEmailAndPassword(email, password);
            if (!newUser) {
                showErrorToast(USER_ALREADY_EXISTS);
                return;
            }

            const userData = {
                id: newUser.user.uid,
                username,
                email,
                password,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            await setDoc(doc(firestore, "users", newUser.user.uid), userData);

            router.push("/login");
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
