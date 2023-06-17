"use client";
import VideoList from "@/components/VideoList";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFetchVideos } from "@/hook/useFetchVideos";

export default function Page() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  const { videos, loading, error } = useFetchVideos();
  console.log(videos);
  return (
    <main>
      <h1 className="text-3xl font-bold text-center text-white mt-5 mb-8">
        Explore and Discover Engaging Videos!
      </h1>
      {isLoggedIn && (
        <VideoList videos={videos} loading={loading} error={error} />
      )}
    </main>
  );
}
