"use client";

import Channel from "@/components/join/Channel";
import CoverPhotos from "@/components/join/CoverPhotos";
import { JoinStep } from "@/components/join/JoinStep";
import Tab from "@/components/join/Tab";
import Username from "@/components/join/Username";
import React, { useState } from "react";

export default function JoinPage() {
  const [step, setStep] = useState(JoinStep.Auth);

  const onBack = () => {
    console.log("Back was clicked");
    setStep(step === JoinStep.EditTabs ? JoinStep.Auth : step);
  };
  const onNext = () => {
    console.log("Next was clicked");
    setStep(step === JoinStep.Auth ? JoinStep.EditTabs : step);
  };

  return (
    <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
      <div className="flex flex-col justify-center items-center gap-4 mt-8 font-bold px-12 pt-20">
        <span className="text-xl">Welcome to Biolinks!</span>
        <span className="text-lg text-gray-400">Let's link that bio</span>
        <form className="animate-in flex flex-col w-full justify-center gap-2 text-foreground gap-4 mb-8">
          <Username />

          <label className="text-md mt-2">Bio</label>
          <input
            className="bg-white/10 rounded-lg flex items-center justify-center h-16 px-2"
            type="text"
            name="title"
            placeholder="Title"
            required
          />
          <textarea
            className="bg-white/10 rounded-lg flex items-center justify-center h-40 p-2"
            name="title"
            placeholder="Bio"
          ></textarea>

          <label className="text-md mt-2">Cover Photos</label>
          <CoverPhotos />

          <label className="text-md mt-2">Channels</label>
          <Channel />
          <Channel />
          <Channel />

          <label className="text-md mt-2">Tabs</label>
          <Tab name="Products" />
          <Tab name="Coupons" />
          <Tab name="Contact" />
        </form>
      </div>
      <div className="border-t h-16 w-full flex">
        <button
          className="flex-1 w-full h-full flex justify-center items-center text-lg font-bold"
          type="button"
        >
          Save
        </button>
        <button
          className="flex-1 w-full h-full flex justify-center items-center text-lg font-bold"
          type="button"
        >
          Preview
        </button>
      </div>
      {/* <JoinButtons step={step} onBack={onBack} onNext={onNext} /> */}
    </div>
  );
}
