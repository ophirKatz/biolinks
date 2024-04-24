import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { RiLinkM } from "react-icons/ri";

export type TabProps = {
  index: number;
  name: string;
  isActive: boolean;
};

export function Tab(props: TabProps & { onToggleActivity: () => void }) {
  return (
    <div className="w-full flex gap-4 h-16">
      <div
        className={
          "w-16 flex justify-center items-center rounded-lg " +
          (props.isActive ? "bg-white/30" : "bg-white/10")
        }
      >
        <button
          className={
            "w-full h-full flex justify-center items-center " +
            (props.isActive ? "" : "opacity-60")
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
          (props.isActive ? "bg-white/30" : "bg-white/10")
        }
      >
        <span className={props.isActive ? "" : "opacity-60"}>{props.name}</span>
      </div>
      <div
        className={
          "w-16 flex justify-center items-center rounded-lg " +
          (props.isActive ? "bg-white/30" : "bg-white/10")
        }
      >
        <button
          className={
            "w-full h-full flex justify-center items-center " +
            (props.isActive ? "" : "opacity-60")
          }
          type="button"
          onClick={props.onToggleActivity}
        >
          <IconContext.Provider value={{ size: "24" }}>
            {props.isActive ? <BsEyeFill /> : <BsEyeSlashFill />}
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default function Tabs() {
  const onToggleActivity = (index: number) => {
    console.log("toggle activity for tab", index);
    const newTabs = tabs.map((c, i) => {
      return i === index ? { ...c, isActive: !c.isActive } : c;
    });
    setTabs(newTabs);
  };

  const [tabs, setTabs] = useState([
    {
      index: 0,
      name: "Products",
      isActive: false,
    },
    {
      index: 1,
      name: "Coupons",
      isActive: false,
    },
    {
      index: 2,
      name: "Contact",
      isActive: false,
    },
  ]);

  return (
    <>
      {tabs.map((x) => (
        <Tab
          {...x}
          key={x.index}
          onToggleActivity={() => onToggleActivity(x.index)}
        />
      ))}
    </>
  );
}
