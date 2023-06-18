import { doc, setDoc } from 'firebase/firestore';
import { nanoid } from 'nanoid';
import { firestore } from '@/firebase/config';
import { videos } from './constants';

export const randomId = nanoid(11);

export async function addVideos() {
  try {
    for (const video of videos) {
      const randomId = nanoid(11);
      console.log(video);
      const { sharedBy, ...rest } = video;
      const videoData = { ...rest, userId: sharedBy };
      await setDoc(doc(firestore, 'videos', randomId), videoData);
    }
    console.log('Videos added successfully.');
  } catch (error) {
    console.error('Error adding videos: ', error);
  }
}
