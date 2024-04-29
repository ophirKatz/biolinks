"use client";

import { UserChannelModel } from "@/models/UserProfile";
import { IconContext } from "react-icons";
import ChannelIcon from "../../../components/ChannelIcon";

type UserChannelProps = {
  channel: UserChannelModel;
};

export default function UserChannel(props: UserChannelProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <IconContext.Provider value={{ size: "24" }}>
        <ChannelIcon name={props.channel.type} />
      </IconContext.Provider>
      <div className="text-md">{props.channel.follower_count}</div>
    </div>
  );
}
