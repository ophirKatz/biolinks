"use client";

import React from "react";
import { IconContext } from "react-icons";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { RiLinkM } from "react-icons/ri";
import { TabType, UserTabModel, getTabName } from "@/models/UserProfile";

export function TabEdit(
  props: UserTabModel & {
    onToggleActivity: () => void;
    onLinksEditClick: () => void;
  }
) {
  return (
    <div className="w-full flex gap-4 h-16">
      <div
        className={
          "w-16 flex justify-center items-center relative rounded-lg " +
          (props.is_active ? "bg-white/30" : "bg-white/10")
        }
      >
        {props.count === 0 ? (
          <></>
        ) : (
          <div className="rounded-full tag absolute top-0 right-0 c2 border-c3 border-2 flex justify-center items-center aspect-square w-8">
            {props.count}
          </div>
        )}
        <button
          className={
            "w-full h-full flex justify-center items-center " +
            (props.is_active ? "" : "opacity-60")
          }
          type="button"
          onClick={props.onLinksEditClick}
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
  onTabActivityToggled: (index: number) => void;
  onProductsClick: () => void;
};

export default function TabsEdit(props: TabsProps) {
  const onTabLinksClick = (tab: UserTabModel) => {
    if (tab.type === TabType.Products) {
      props.onProductsClick();
    }
  };

  return (
    <>
      {props.tabs.map((x, index) => (
        <TabEdit
          {...x}
          key={index}
          onToggleActivity={() => props.onTabActivityToggled(index)}
          onLinksEditClick={() => onTabLinksClick(x)}
        />
      ))}
    </>
  );
}
