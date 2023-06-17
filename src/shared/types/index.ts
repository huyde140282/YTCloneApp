export type VideoFirebase = {
    title: string;
    userId: string;
    videoUrl: string;
    likes: number;
    dislikes: number;
    description: string;
}

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
    videos?: Video[];
    loading: boolean
    error: string | null
}
export type User = {
    id: string;
    email: string;
    password: string;
}
export type LoginFormData = {
    email: string;
    password: string;
}
export type NewUser = {
    email: string;
    username: string;
    password: string;
}
export type VideoSharedType = {
    title: string;
    description: string;
    videoUrl: string;
}