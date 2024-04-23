import Auth from "@/components/join/Auth";
import React from "react";

export default function JoinPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-8 font-bold">
      <span className="text-xl">Welcome to Biolinks!</span>
      <span className="text-lg text-gray-400">Let's link that bio</span>
      <Auth />
    </div>
  );
}
