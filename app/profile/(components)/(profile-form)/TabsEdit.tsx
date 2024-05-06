"use client";

import React from "react";
import { IconContext } from "react-icons";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { RiLinkM } from "react-icons/ri";
import { UserTabModel, getTabName } from "@/models/UserProfile";

export function TabEdit(
  props: UserTabModel & { onToggleActivity: () => void }
) {
  return (
    <div className="w-full flex gap-4 h-16">
      <div
        className={
          "w-16 flex justify-center items-center rounded-lg " +
          (props.is_active ? "bg-white/30" : "bg-white/10")
        }
      >
        <button
          className={
            "w-full h-full flex justify-center items-center " +
            (props.is_active ? "" : "opacity-60")
          }
          type="button"
        >
          <IconContext.Provider value={{ size: "24" }}>
            <RiLinkM />
          </IconContext.Provider>
        </button>
      </div>
      <div
        className={
          "flex-1 flex justify-center items-center rounded-lg " +
          (props.is_active ? "bg-white/30" : "bg-white/10")
        }
      >
        <span className={props.is_active ? "" : "opacity-60"}>
          {getTabName(props)}
        </span>
      </div>
      <div
        className={
          "w-16 flex justify-center items-center rounded-lg " +
          (props.is_active ? "bg-white/30" : "bg-white/10")
        }
      >
        <button
          className={
            "w-full h-full flex justify-center items-center " +
            (props.is_active ? "" : "opacity-60")
          }
          type="button"
          onClick={props.onToggleActivity}
        >
          <IconContext.Provider value={{ size: "24" }}>
            {props.is_active ? <BsEyeFill /> : <BsEyeSlashFill />}
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export type TabsProps = {
  tabs: UserTabModel[];
};

export default function TabsEdit(
  props: TabsProps & {
    onTabActivityToggled: (index: number) => void;
  }
) {
  return (
    <>
      {props.tabs.map((x, index) => (
        <TabEdit
          {...x}
          key={index}
          onToggleActivity={() => props.onTabActivityToggled(index)}
        />
      ))}
    </>
  );
}
