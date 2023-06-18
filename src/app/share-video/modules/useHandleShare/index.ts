import { useState } from 'react';
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { firestore } from '@/firebase/config';
import { showErrorToast, showSuccessfullToast } from '@/shared/handler';
import { User, VideoSharedType } from '@/shared/types';
import { useRouter } from 'next/navigation';
import {
  FAILED_TO_SHARE_VIDEO,
  SUCCESSFULLY_SHARED,
  VIDEO_ALREADY_EXISTS,
} from '@/shared/message';
import { randomId } from '@/shared/initalData';

export function useHandleShare(user?: User) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  // Function to handle sharing a video
  const handleShare = async (data: VideoSharedType) => {
    if (!user) return;
    setLoading(true);

    try {
      // Check if video with the same videoURL already exists
      const videosQuery = query(
        collection(firestore, 'videos'),
        where('videoUrl', '==', data.videoUrl)
      );
      const videoDocsSnapshot = await getDocs(videosQuery);

      // If a video with the same videoURL exists, show an error toast and return
      if (!videoDocsSnapshot.empty) {
        showErrorToast(VIDEO_ALREADY_EXISTS);
        setLoading(false);
        return;
      }
      // Save the video data to Firestore with a random ID
      await setDoc(doc(firestore, 'videos', randomId), {
        ...data,
        userId: user.id,
        dislikes: 0,
        likes: 0,
      });
      // Show a success toast after successful video sharing
      showSuccessfullToast(SUCCESSFULLY_SHARED);

      router.push('/');
    } catch (error) {
      showErrorToast(FAILED_TO_SHARE_VIDEO);
    } finally {
      // Set loading to false after a short delay (1 second)
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
