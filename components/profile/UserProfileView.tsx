import { UserProfileModel } from "@/models/UserProfile";
import React from "react";
import UserChannel from "./UserChannel";
import UserLinks from "./UserLinks";
import Link from "next/link";
import UserCoverPhoto from "./UserCoverPhoto";

export type UserProfileViewProps = {
  profile: UserProfileModel;
};

export default function UserProfileView(props: UserProfileViewProps) {
  return (
    <div className="h-full w-full">
      <UserCoverPhoto profile={props.profile} />

      <div className="h-full flex flex-col gap-8 z-30 relative">
        <div className="flex flex-col items-center gap-2">
          <Link href={"/" + props.profile.username} className="text-xl">
            {props.profile.title}
          </Link>
          <span className="text-lg">{props.profile.description}</span>
        </div>
        <div className="w-full flex gap-12 justify-center">
          {props.profile.channels.map((c, i) => (
            <UserChannel channel={c} key={i} />
          ))}
        </div>
        <div className="flex-1">
          <UserLinks profile={props.profile} />
        </div>
      </div>
    </div>
  );
}
