import React from "react";
import SignInForm from "./(components)/SignInForm";

export default function JoinPage() {
  return (
    <div className="h-screen w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-col justify-between">
      <div className="flex flex-col justify-center items-center gap-4 font-semibold">
        <span className="text-xl pt-20">Welcome to BioLinks!</span>
        <span className="text-lg text-white/50">Let's link that bio</span>
      </div>
      <div className="animate-in flex flex-col gap-6 mt-[-6rem]">
        <span className="text-lg font-bold w-full flex justify-center">
          Login
        </span>
        <SignInForm />
        {/* <button className="w-full h-16 rounded-lg border"></button>
        <button className="w-full h-16 rounded-lg border"></button>
        <button className="w-full h-16 rounded-lg border"></button> */}
      </div>
    </div>
  );
}
