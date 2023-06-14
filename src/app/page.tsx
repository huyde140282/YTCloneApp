"use client";
import VideoList from "@/components/VideoList";
import { videos } from "@/shared/data";
import { NextPage } from "next";
import Image from "next/image";
const HomePage: NextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">List of Shared Videos</h1>
      <VideoList videos={videos} />
    </div>
  );
};

export default HomePage;
