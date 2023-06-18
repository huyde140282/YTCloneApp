"use client";
import ShareVideoForm from "@/components/ShareVideoForm";
import { useAppSelector } from "@/redux/hooks";
import { NextPage } from "next";
import { useHandleShare } from "./modules/useHandleShare";

const ShareVideoPage: NextPage = () => {
  const { user } = useAppSelector((state) => state.auth);

  const { handleShare, loading } = useHandleShare(user || undefined);
  return <ShareVideoForm onShareVideo={handleShare} isLoading={loading} />;
};

export default ShareVideoPage;
