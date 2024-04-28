import React from "react";
import { fetchUserProfileByUsernameAction } from "./(actions)/fetch-user-profile-by-username.action";
import Image from "next/image";
import UserProfile from "../profile/(components)/UserProfile";
import Link from "next/link";

export default async function BioLinksPage({
  params,
}: {
  params: { username: string };
}) {
  const userProfile = await fetchUserProfileByUsernameAction(params.username);

  userProfile.channels = [
    {
      id: "1",
      name: "instagram",
      follower_count: "100K",
      url: "",
    },
    {
      id: "2",
      name: "tiktok",
      follower_count: "143K",
      url: "",
    },
  ];

  userProfile.available_tabs = ["contact", "products", "coupons"];

  userProfile.coupons = [
    {
      id: "1",
      title: "70 הנחה בזארה",
      description: "",
      url: "",
    },
    {
      id: "2",
      title: "מבצע סופש בטרמינל איקס",
      description: "",
      url: "",
    },
    {
      id: "3",
      title: "30% הנחה על המצלמה שלי",
      description: "",
      url: "",
    },
    {
      id: "4",
      title: "חודש חינם ברייזאפ",
      description: "",
      url: "",
    },
    // {
    //   id: "5",
    //   title: "1+1 בקולומביה עד ה-3.4.2024",
    //   description: "",
    //   url: "",
    // },
  ];

  console.log("Found user profile", userProfile);
  return (
    <div className="h-svh overflow-hidden w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 absolute px-8 flex flex-col justify-between">
      <div className="h-16"></div>
      <UserProfile profile={userProfile} />
      <div className="h-16 flex justify-center items-center z-20">
        <Link href="/join" className="text-lg text-white font-bold">
          Try BioLinks
        </Link>
      </div>
    </div>
  );
}
