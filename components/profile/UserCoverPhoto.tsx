"use client";

import React, { useEffect, useState } from "react";
import { UserProfileViewProps } from "./UserProfileView";
import Image from "next/image";

export default function UserCoverPhoto(props: UserProfileViewProps) {
  const [index, setIndex] = useState(0);

  const urls = [
    props.profile.cover_photo1_url,
    props.profile.cover_photo2_url,
    props.profile.cover_photo3_url,
  ].filter(Boolean);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % urls.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      {urls.length === 0 ? (
        <></>
      ) : (
        <Image
          className="object-cover z-10"
          src={urls[index]!}
          fill
          alt="cover"
        />
      )}
    </>
    // <div className="w-full h-full absolute">
    //   {urls.length === 0 ? (
    //     <></>
    //   ) : (
    //     <Image
    //       className="object-cover z-10"
    //       src={urls[index]!}
    //       fill
    //       alt="cover"
    //     />
    //   )}
    // </div>
  );
}
