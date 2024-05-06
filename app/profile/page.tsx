import Link from "next/link";
import { fetchUserProfileAction } from "./(actions)/fetch-user-profile.action";
import ProfileForm from "./(components)/(profile-form)/ProfileForm";
import React from "react";
import { UserProfileModel } from "@/models/UserProfile";
import {
  SearchParamsCodes,
  getSearchParamsMessage,
} from "@/utils/search-params-codes";
import ProfileContainer from "./(components)/ProfileContainer";

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: { code: SearchParamsCodes };
}) {
  // const searchParams = useSearchParams();
  let profile: UserProfileModel = {
    id: "",
    username: "",
    title: "",
    description: "",
    tabs: [],
    channels: [],
    coupons: [],
    products: [],
  };

  if (!searchParams.code) {
    profile = await fetchUserProfileAction();
    console.log("userProfile from api", profile);
  }

  return (
    <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
      <ProfileContainer profile={profile} />
      {/* <div className="flex flex-col justify-center items-center gap-4 mt-8 font-bold pt-20">
        <Link href="/profile">
          <span className="text-xl">Welcome to BioLinks!</span>
        </Link>
        <span className="text-lg text-gray-400">Let's link that bio</span>
        {searchParams.code ? (
          <span className="text-md text-red-600">
            {getSearchParamsMessage(searchParams.code)}
          </span>
        ) : (
          <></>
        )}

        <ProfileForm profile={profile} />
      </div> */}
    </div>
  );
}
