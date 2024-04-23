import JoinButtons from "@/components/join/JoinButtons";
import React from "react";

export default function JoinLayout(props: any) {
  return (
    <div className="h-full w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
      <div className="flex flex-col w-full h-screen justify-between px-12 py-20">
        {props.children}
        <JoinButtons />
      </div>
    </div>
  );
}
