import { VideoSharedType } from "@/shared/types";

export type ShareYouTubeVideoProps = {
    onShareVideo: (video: VideoSharedType) => void;
    isLoading: boolean
}