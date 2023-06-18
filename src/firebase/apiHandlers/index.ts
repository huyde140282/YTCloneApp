import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { firestore } from '../config';
import { User, Video, VideoFirebase } from '@/shared/types';
import { SOMETHING_WENT_WRONG } from '@/shared/message';

export const fetchVideos = async (): Promise<Video[]> => {
  try {
    // Retrieve the videos collection from Firestore
    const videosSnapshot = await getDocs(collection(firestore, 'videos'));

    if (videosSnapshot.empty) throw new Error(SOMETHING_WENT_WRONG);

    const videos: Video[] = [];

    // Iterate through each video document
    for (const videoDoc of videosSnapshot.docs) {
      const videoData = videoDoc.data() as VideoFirebase;
      const userId = videoData.userId;

      // Retrieve the user document using userId
      const userDoc = await getDoc(doc(firestore, 'users', userId));
      if (userDoc.exists()) {
        const userData = userDoc.data() as User;
        const videoWithUserEmail: Video = {
          ...videoData,
          sharedBy: userData.email,
        };
        videos.push(videoWithUserEmail);
      } else {
        throw new Error(SOMETHING_WENT_WRONG);
      }
    }

    return videos;
  } catch (error) {
    // Handle the error
    console.error('Error fetching videos:', error);
    throw new Error(SOMETHING_WENT_WRONG);
  }
};
