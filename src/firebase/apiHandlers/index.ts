import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../config";
import { User, Video, VideoFirebase } from "@/shared/types";

export const fetchVideos = async (): Promise<Video[]> => {
    try {
        const videosSnapshot = await getDocs(collection(firestore, "videos"));
        if (videosSnapshot.empty) throw new Error("Something went wrong, Please try again.");
        const videos: Video[] = [];

        for (const videoDoc of videosSnapshot.docs) {
            const videoData = videoDoc.data() as VideoFirebase;
            const userId = videoData.userId;

            // Retrieve the user document using userId
            const userDoc = await getDoc(doc(firestore, "users", userId));
            if (userDoc.exists()) {
                const userData = userDoc.data() as User;
                const videoWithUserEmail: Video = {
                    ...videoData,
                    sharedBy: userData.email,
                };
                videos.push(videoWithUserEmail);
            }
            else {
                throw new Error("Something went wrong, Please try again.")
            }
        }

        return videos;
    } catch (error) {
        // Handle the error
        console.error("Error fetching videos:", error);
        throw new Error("Server error");
    }
};
