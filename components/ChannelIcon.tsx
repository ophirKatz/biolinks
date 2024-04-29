import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTiktok, FaYoutube } from "react-icons/fa";

type ChannelIconProps = {
  name: string;
};

export default function ChannelIcon(props: ChannelIconProps) {
  switch (props.name) {
    case "instagram":
      return <PiInstagramLogoFill />;
    case "tiktok":
      return <FaTiktok />;
    case "youtube":
      return <FaYoutube />;
  }
}
