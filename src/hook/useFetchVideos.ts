
import { fetchVideos } from '@/firebase/apiHandlers';
import { Video } from '@/shared/types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useFetchVideos = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchVideos()
            .then((data) => {
                setVideos(data);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
            .catch((error) => {
                console.log('-------------error--------')
                setError(error.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
            });
        }
    }, [error]);

    return { videos, loading, error };
};
