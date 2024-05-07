import UserProfileView from "@/components/profile/UserProfileView";
import { UserProfileModel } from "@/models/UserProfile";
import React from "react";

export type ProfilePreviewProps = {
  profile: UserProfileModel;
  onBack: () => void;
  className?: string;
};

export default function ProfilePreview(props: ProfilePreviewProps) {
  return (
    <div
      className={
        "h-full w-full absolute flex flex-col justify-between " +
        props.className
      }
    >
      <div className="h-16"></div>
      <div className="h-full p-8">
        <UserProfileView profile={props.profile} />
      </div>
      <button
        className="w-full h-16 flex justify-center items-center bg-black z-30 text-white font-bold"
        onClick={props.onBack}
      >
        Back
      </button>
    </div>
  );
}
