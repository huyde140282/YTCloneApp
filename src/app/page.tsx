"use client";
import VideoList from "@/components/VideoList";
import { useAppSelector } from "@/redux/hooks";
import { videos } from "@/shared/data";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage: NextPage = () => {
  const router = useRouter();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);
  return (
    <main>
      <h1 className="text-2xl font-bold text-center">List of Shared Videos</h1>
      <VideoList videos={videos} />
    </main>
  );
};

export default HomePage;
