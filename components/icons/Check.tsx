import React from "react";
import { IconContext } from "react-icons";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Check(props: React.HTMLAttributes<any>) {
  return (
    <IconContext.Provider value={{ color: "green" }}>
      <FaRegCheckCircle {...props} />
    </IconContext.Provider>
  );
}
