import React, { useState } from "react";
import Check from "../icons/Check";
import { DebounceInput } from "react-debounce-input";

export default function Username() {
  const [isValid, setIsValid] = useState(true);

  const onUsernameChange = (f: any) => {
    console.log(f.target.value);
  };

  return (
    <div className="w-full flex items-center font-bold h-16 text-lg rounded-lg text-white">
      <span className="h-full flex-1 flex justify-center items-center bg-white/10 rounded-s-lg">
        BioLinks\
      </span>
      <div className="h-full flex-1 bg-white/30 rounded-e-lg relative">
        {/* {isValid ?? <Check />} */}
        <Check className="absolute right-4 top-6" />
        <DebounceInput
          className="h-full w-full bg-transparent rounded-e-lg text-center"
          size={1}
          type="text"
          spellCheck="false"
          autoComplete="false"
          name="username"
          placeholder="Username"
          required
          debounceTimeout={500}
          onChange={onUsernameChange}
        />
      </div>
    </div>
  );
}
