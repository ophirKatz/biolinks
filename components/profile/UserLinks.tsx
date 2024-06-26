"use client";

import { TabType, UserProfileModel, UserTabModel } from "@/models/UserProfile";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { HiInformationCircle } from "react-icons/hi2";
import { RiDiscountPercentFill } from "react-icons/ri";

type LinksProps = {
  profile: UserProfileModel;
};

function getTabText(type: TabType): string {
  switch (type) {
    case TabType.Products:
      return "מוצרים";
    case TabType.Coupons:
      return "קודי קופון";
    case TabType.Contact:
      return "צרו קשר";
  }
}

function Tab(props: {
  type: TabType;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="flex flex-col gap-1 items-center"
      onClick={props.onClick}
    >
      <span className={"font-sm " + (props.isSelected ? "font-bold" : "")}>
        {getTabText(props.type)}
      </span>
      <div className={props.isSelected ? "w-8 border border-white" : ""}></div>
    </button>
  );
}

function Coupons(props: LinksProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      {props.profile.coupons.map((p, i) => {
        return (
          <div
            className="shadow-xl rounded-lg h-16 bg-white/30 w-full grid grid-cols-[20%_60%_20%]"
            key={i}
          >
            <div className="rounded-s-lg flex justify-center items-center">
              <IconContext.Provider value={{ size: "24", color: "white" }}>
                <HiInformationCircle />
              </IconContext.Provider>
            </div>
            <span className="h-full flex items-center justify-center" dir="rtl">
              {p.title}
            </span>
            <div className="rounded-e-lg flex justify-center items-center">
              <IconContext.Provider value={{ size: "24" }}>
                <RiDiscountPercentFill />
              </IconContext.Provider>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function UserLinks(props: LinksProps) {
  const [currentTab, setCurrentTab] = useState(TabType.Products);

  const onTabClick = (tab: UserTabModel) => setCurrentTab(tab.type);

  return (
    <div className="h-full flex flex-col justify-between gap-4">
      <div>
        <Coupons profile={props.profile} />
      </div>
      <div className="w-full flex justify-between">
        {props.profile.tabs.map((t, i) => (
          <Tab
            type={t.type}
            isSelected={currentTab === t.type}
            key={i}
            onClick={() => onTabClick(t)}
          />
        ))}
      </div>
    </div>
  );
}
