'use client';
import VideoList from '@/components/VideoList';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { useFetchVideos } from '@/app/modules/useHandleFetchVideos';

export default function Page() {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const { videos, loading: videoLoading } = useFetchVideos({
    isLoggedIn,
    router,
  });

  return (
    <>
      <main>
        <h1 className="text-3xl font-bold text-center text-white mt-5 mb-8">
          Explore and Discover Engaging Videos!
        </h1>
        {isLoggedIn && <VideoList videos={videos} loading={videoLoading} />}
      </main>
    </>
  );
}
