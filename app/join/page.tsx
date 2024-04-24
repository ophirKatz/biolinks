import React from "react";

export default function JoinPage() {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-col justify-between">
      <div className="flex flex-col justify-center items-center gap-4 mt-8 font-bold px-12 py-20">
        <span className="text-xl">Welcome to Biolinks!</span>
        <span className="text-lg text-gray-400">Let's link that bio</span>
      </div>
      <div className="flex flex-col gap-6 px-8">
        <span className="text-lg font-bold w-full flex justify-center">
          Sign in
        </span>
        <button className="w-full h-16 rounded-lg border"></button>
        <button className="w-full h-16 rounded-lg border"></button>
        <button className="w-full h-16 rounded-lg border"></button>
      </div>
      <div></div>
    </div>
  );
}
