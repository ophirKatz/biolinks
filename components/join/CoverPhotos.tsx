"use client";

import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FiPlus } from "react-icons/fi";

enum PhotoStatus {
  Inactive,
  Active,
  Selected,
}

type PhotoProps = {
  index: number;
  status: PhotoStatus;
  url?: string;
  onClick: (index: number) => void;
};

function CoverPhoto(props: PhotoProps) {
  const [isPhotoSelected, setIsPhotoSelected] = useState(false);

  return (
    <div
      className={
        "rounded-lg h-44 bg-white/10 flex-1 border-2 " +
        (props.status === PhotoStatus.Inactive ? "opacity-30" : "")
      }
    >
      <button
        className="w-full h-full flex justify-center items-center"
        type="button"
        disabled={props.status === PhotoStatus.Inactive}
        onClick={() => props.onClick(props.index)}
      >
        <IconContext.Provider value={{ size: "36", className: "opacity-30" }}>
          <FiPlus />
        </IconContext.Provider>
      </button>
    </div>
  );
}

export default function CoverPhotos() {
  const onPhotoClick = (index: number) => {
    console.log("Photo", index, "Clicked");
  };

  const [photos, setPhotos] = useState<PhotoProps[]>([
    {
      index: 0,
      status: PhotoStatus.Active,
      onClick: onPhotoClick,
    },
    {
      index: 1,
      status: PhotoStatus.Inactive,
      onClick: onPhotoClick,
    },
    {
      index: 2,
      status: PhotoStatus.Inactive,
      onClick: onPhotoClick,
    },
  ]);

  return (
    <div className="flex justify-content-between gap-6">
      {photos.map((x) => (
        <CoverPhoto {...x} key={x.index} />
      ))}
    </div>
  );
}
