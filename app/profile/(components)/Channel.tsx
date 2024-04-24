"use client";

import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { CiCircleMinus } from "react-icons/ci";
import Check from "../../../components/icons/Check";
import { DebounceInput } from "react-debounce-input";

type IconNames = "instagram" | "tiktok" | "youtube";

const getIconFromName = (iconName: IconNames) => {
  switch (iconName) {
    case "instagram":
      return <PiInstagramLogoFill />;
    case "tiktok":
      return <FaTiktok />;
    case "youtube":
      return <FaYoutube />;
  }
};

type ChannelProps = {
  index: number;
  icon: IconNames;
  isVerified: boolean;
};

function Channel(props: ChannelProps & { onChange: () => void }) {
  const icon = getIconFromName(props.icon);

  return (
    <div className="rounded-lg h-16 bg-white/10 w-full grid grid-cols-[20%_60%_20%]">
      <div className="rounded-s-lg flex justify-center items-center">
        <IconContext.Provider value={{ size: "24" }}>
          {icon}
        </IconContext.Provider>
      </div>
      <div className="flex">
        <div className="h-full flex items-center">@</div>
        <DebounceInput
          className="flex-1 bg-transparent px-2"
          autoCorrect="false"
          debounceTimeout={500}
          onChange={props.onChange}
        />
      </div>
      <div className="rounded-e-lg flex justify-center items-center">
        <IconContext.Provider value={{ size: "24" }}>
          {props.isVerified ? <Check /> : <CiCircleMinus />}
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default function Channels() {
  const onChannelChange = (index: number) => {
    const newChannels = channels.map((c, i) => {
      return i === index ? { ...c, isVerified: true } : c;
    });
    setChannels(newChannels);
    console.log("Set new channels", channels, newChannels);
  };

  const [channels, setChannels] = useState<ChannelProps[]>([
    {
      index: 0,
      icon: "instagram",
      isVerified: false,
    },
    {
      index: 1,
      icon: "tiktok",
      isVerified: false,
    },
    {
      index: 2,
      icon: "youtube",
      isVerified: false,
    },
  ]);

  return (
    <>
      {channels.map((x) => (
        <Channel
          {...x}
          key={x.index}
          onChange={() => onChannelChange(x.index)}
        />
      ))}
    </>
  );
}
