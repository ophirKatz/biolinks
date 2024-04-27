import React from "react";
import SignInForm from "./(components)/SignInForm";

export default function JoinPage() {
  return (
    <div className="h-svh w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-center items-center gap-4 font-semibold">
        <span className="text-xl pt-20">Welcome to BioLinks!</span>
        <span className="text-lg text-white/50">Let's link that bio</span>
      </div>
      <div className="flex-2 h-full animate-in flex flex-col gap-6">
        <span className="text-lg font-bold w-full flex justify-center">
          Login
        </span>
        <SignInForm />
      </div>
    </div>
  );
}
