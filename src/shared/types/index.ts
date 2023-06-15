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
export type User = {
    email: string;
    password: string;
}
export type NewUser = {
    email: string;
    username: string;
    password: string;
}