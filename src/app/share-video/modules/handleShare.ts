import { useState } from "react";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { firestore } from "@/firebase/config";
import { showErrorToast, showSuccessfullToast } from "@/shared/handler";
import { randomId } from "@/shared/initalData";
import { User, VideoSharedType } from "@/shared/types";
import { useRouter } from "next/navigation";

export function useHandleShare(user?: User) {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    const handleShare = async (data: VideoSharedType) => {
        if (!user) return
        setLoading(true);

        try {
            // Check if video with the same videoURL already exists
            const videosQuery = query(
                collection(firestore, "videos"),
                where("videoUrl", "==", data.videoUrl)
            );
            const videoDocsSnapshot = await getDocs(videosQuery);

            if (!videoDocsSnapshot.empty) {
                console.log('zo')
                showErrorToast("Video already exists");
                setLoading(false);
                return;
            }
            console.log({ ...data, userId: user.id, dislikes: 0, likes: 0 })
            await setDoc(doc(firestore, "videos", randomId), {
                ...data,
                userId: user.id,
                dislikes: 0, likes: 0
            });
            showSuccessfullToast("Successfully shared");
            router.push("/");
        } catch (error) {
            console.log(error);
            showErrorToast("Failed to share video");
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    return {
        handleShare,
        loading,
    };
}
