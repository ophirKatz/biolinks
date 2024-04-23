"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export enum JoinStep {
  Auth,
  EditTabs,
}

const ButtonsContainer = (props: any) => (
  <div className="w-full flex justify-center font-bold items-center h-20 text-2xl">
    {props.children}
  </div>
);

export default function JoinButtons() {
  const [step, setStep] = useState(JoinStep.Auth);
  const router = useRouter();

  const onBack = () => {
    console.log("Back was clicked");
    setStep(step === JoinStep.EditTabs ? JoinStep.Auth : step);
  };
  const onNext = () => {
    console.log("Next was clicked");
    setStep(step === JoinStep.Auth ? JoinStep.EditTabs : step);
  };

  return (
    <>
      {step === JoinStep.Auth ? (
        <ButtonsContainer>
          <button
            className="flex-1 h-full bg-white text-black rounded-lg"
            onClick={onNext}
          >
            Next
          </button>
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          <button
            className="flex-1 h-full bg-white/10 rounded-s-lg"
            onClick={onBack}
          >
            Back
          </button>
          <button
            className="flex-1 h-full bg-white text-black rounded-e-lg"
            onClick={onNext}
          >
            Next
          </button>
        </ButtonsContainer>
      )}
    </>
  );
}
