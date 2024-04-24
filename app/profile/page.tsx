import ProfileForm from "./(components)/ProfileForm";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
      <div className="flex flex-col justify-center items-center gap-4 mt-8 font-bold pt-20">
        <span className="text-xl">Welcome to BioLinks!</span>
        <span className="text-lg text-gray-400">Let's link that bio</span>
        <ProfileForm />
      </div>
    </div>
  );
}
