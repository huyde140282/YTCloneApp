"use client";
import ShareVideoForm from "@/components/ShareVideoForm";
import { NextPage } from "next";

const ShareVideoPage: NextPage = () => {
  return (
    <ShareVideoForm
      onShareVideo={()=> console.log('abcs')}
    />
  );
};

export default ShareVideoPage;
