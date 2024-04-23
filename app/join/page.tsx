import React from "react";

export default function JoinPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-12 font-bold">
      <span className="text-xl">Welcome to Biolinks!</span>
      <span className="text-lg text-gray-400">Let's link that bio</span>
      <input
        className="w-full flex justify-center font-bold items-center h-20 text-lg bg-white/30 rounded-lg text-white px-2"
        placeholder="Email address"
      />
      <div className="w-full flex justify-center items-center font-bold items-center h-20 text-lg rounded-lg text-white">
        <span className="h-full flex-1 bg-white/10 rounded-s-lg">
          Biolinks\
        </span>
        <input
          className="h-full flex-1 bg-white/30 rounded-e-lg flex items-center justify-center px-2"
          placeholder="Username"
        />
      </div>
    </div>
  );
}
