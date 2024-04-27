import { UserProfileModel } from "@/models/UserProfile";
import React from "react";
import Image from "next/image";
import UserChannel from "./UserChannel";
import Links from "./Links";

type UserProfileProps = {
  profile: UserProfileModel;
};

export default function UserProfile(props: UserProfileProps) {
  return (
    <div className="h-full w-full">
      <Image
        className="object-cover z-10"
        src={props.profile.cover_photo1_url!}
        fill
        alt="cover"
      />

      <div className="flex flex-col gap-8 z-20 relative">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xl">{props.profile.title}</span>
          <span className="text-lg">{props.profile.bio}</span>
        </div>
        <div className="w-full flex gap-12 justify-center">
          {props.profile.channels.map((c, i) => (
            <UserChannel channel={c} key={i} />
          ))}
        </div>
        <div className="flex-1">
          <Links profile={props.profile} />
        </div>
      </div>
    </div>
  );
}
