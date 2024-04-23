"use client";

import React from "react";
import { JoinStep } from "./JoinStep";

const ButtonsContainer = (props: any) => (
  <div className="w-full flex justify-center font-bold items-center h-16 text-2xl">
    {props.children}
  </div>
);

export type JoinButtonsProps = {
  step: JoinStep;
  onBack: () => void;
  onNext: () => void;
};

export default function JoinButtons(props: JoinButtonsProps) {
  const getNextText = () =>
    props.step === JoinStep.EditTabs ? "Finish" : "Next";

  return (
    <>
      {props.step === JoinStep.Auth ? (
        <ButtonsContainer>
          <button
            className="flex-1 h-full bg-white text-black rounded-lg"
            onClick={props.onNext}
          >
            {getNextText()}
          </button>
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          <button
            className="flex-1 h-full bg-white/10 rounded-s-lg"
            onClick={props.onBack}
          >
            Back
          </button>
          <button
            className="flex-1 h-full bg-white text-black rounded-e-lg"
            onClick={props.onNext}
          >
            {getNextText()}
          </button>
        </ButtonsContainer>
      )}
    </>
  );
}
