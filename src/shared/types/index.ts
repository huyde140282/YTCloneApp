export type Video = {
    title: string;
    sharedBy: string;
    videoUrl: string;
    likes: number;
    dislikes: number;
    description: string;
}
export type VideoProps = {
    video: Video;
}
export type VideoListProps = {
    videos: Video[];
}