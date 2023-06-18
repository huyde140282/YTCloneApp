import { randomId } from './../../../../shared/initalData/index';
import { useState } from "react";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { firestore } from "@/firebase/config";
import { showErrorToast, showSuccessfullToast } from "@/shared/handler";
import { User, VideoSharedType } from "@/shared/types";
import { useRouter } from "next/navigation";
import { FAILED_TO_SHARE_VIDEO, SUCCESSFULLY_SHARED, VIDEO_ALREADY_EXISTS } from '@/shared/message';

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
                showErrorToast(VIDEO_ALREADY_EXISTS);
                setLoading(false);
                return;
            }
            console.log({ ...data, userId: user.id, dislikes: 0, likes: 0 })
            await setDoc(doc(firestore, "videos", randomId), {
                ...data,
                userId: user.id,
                dislikes: 0, likes: 0
            });
            showSuccessfullToast(SUCCESSFULLY_SHARED);
            router.push("/");
        } catch (error) {
            console.log(error);
            showErrorToast(FAILED_TO_SHARE_VIDEO);
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
