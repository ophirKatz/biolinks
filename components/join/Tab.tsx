import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";

export type TabProps = {
  name: string;
};

export default function Tab(props: TabProps) {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => setIsActive(!isActive);

  return (
    <div className="w-full flex gap-4 h-16">
      <div
        className={
          "w-16 flex justify-center items-center rounded-lg " +
          (isActive ? "bg-white/30" : "bg-white/10 opacity-60")
        }
      ></div>
      <div
        className={
          "flex-1 flex justify-center items-center rounded-lg " +
          (isActive ? "bg-white/30" : "bg-white/10 opacity-60")
        }
      >
        {props.name}
      </div>
      <div
        className={
          "w-16 flex justify-center items-center rounded-lg " +
          (isActive ? "bg-white/30" : "bg-white/10 opacity-60")
        }
      >
        <button
          className="w-full h-full flex justify-center items-center"
          type="button"
          onClick={onClick}
        >
          <IconContext.Provider value={{ size: "24" }}>
            {isActive ? <BsEyeFill /> : <BsEyeSlashFill />}
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}