import { fetchVideos } from '@/firebase/apiHandlers';
import { showErrorToast } from '@/shared/handler';
import { SOMETHING_WENT_WRONG } from '@/shared/message';
import { Video } from '@/shared/types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useEffect, useState } from 'react';

type FetchVideosOptions = {
  isLoggedIn: boolean;
  router: AppRouterInstance;
};

export const useFetchVideos = (props: FetchVideosOptions) => {
  const { isLoggedIn, router } = props;
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }
  }, [isLoggedIn, router]);

  useEffect(() => {
    fetchVideos()
      .then((data) => {
        setVideos(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(() => {
        console.log('-------------error--------');
        showErrorToast(SOMETHING_WENT_WRONG);
        setLoading(false);
      });
  }, []);

  return { videos, loading };
};
