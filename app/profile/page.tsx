import { fetchUserProfileAction } from "./(actions)/fetch-user-profile.action";
import ProfileForm, { ProfileFormProps } from "./(components)/ProfileForm";
import React from "react";

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  let props: ProfileFormProps = {
    username: "",
    title: "",
    description: "",
  };

  if (!searchParams.message) {
    const userProfile = await fetchUserProfileAction();
    props = {
      username: userProfile.username,
      title: userProfile.title,
      description: userProfile.description,
      coverPhoto1Url: userProfile.cover_photo1_url,
      coverPhoto2Url: userProfile.cover_photo2_url,
      coverPhoto3Url: userProfile.cover_photo3_url,
    };
  }

  return (
    <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
      <div className="flex flex-col justify-center items-center gap-4 mt-8 font-bold pt-20">
        <span className="text-xl">Welcome to BioLinks!</span>
        <span className="text-lg text-gray-400">Let's link that bio</span>
        {searchParams.message ? (
          <span className="text-md text-red-600">{searchParams.message}</span>
        ) : (
          <></>
        )}

        <ProfileForm {...props} />
      </div>
    </div>
  );
}
