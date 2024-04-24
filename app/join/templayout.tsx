"use client";

import { JoinStep } from "@/components/join/JoinStep";
import JoinButtons from "@/components/join/JoinButtons";
import React, { useState } from "react";

export default function JoinLayout(props: any) {
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
    <div className="h-full w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
      <div className="flex flex-col w-full h-screen justify-between px-12 py-20">
        {props.children}
        <JoinButtons step={step} onBack={onBack} onNext={onNext} />
      </div>
    </div>
  );
}
