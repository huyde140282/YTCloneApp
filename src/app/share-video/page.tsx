"use client";
import ShareVideoForm from "@/components/ShareVideoForm";
import { useAppSelector } from "@/redux/hooks";
import { NextPage } from "next";
import { useHandleShare } from "./modules/handleShare";
import { useEffect } from "react";
import Router from "next/router";

const ShareVideoPage: NextPage = () => {
  const { user } = useAppSelector((state) => state.auth);
 
  const { handleShare, loading } = useHandleShare(user);
  return <ShareVideoForm onShareVideo={handleShare} isLoading={loading} />;
};

export default ShareVideoPage;
