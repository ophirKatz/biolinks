"use client";

import React, { useRef, useState } from "react";
import { IconContext } from "react-icons";
import { FiPlus } from "react-icons/fi";
import { uploadCoverPhotoAction } from "../../(actions)/upload-covert-photos.action";
import Image from "next/image";

enum PhotoStatus {
  Inactive,
  Active,
  Selected,
}

type PhotoProps = {
  index: number;
  status: PhotoStatus;
  url?: string;
};

function CoverPhoto(
  props: PhotoProps & { onImageSelected: (f: File) => void }
) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onImageSelected = (f: File) => {
    console.log("Selected file:", f);

    props.onImageSelected(f);
  };

  return (
    <div
      className={
        "rounded-lg h-44 bg-white/10 flex-1 " +
        (props.status === PhotoStatus.Inactive ? "" : "border-2")
      }
    >
      {props.status === PhotoStatus.Selected ? (
        <button
          type="button"
          className="w-full h-full relative"
          onClick={() => fileInputRef.current!.click()}
        >
          <Image
            className="rounded-lg object-cover"
            src={props.url!}
            fill
            alt="Cover Photo 1"
            priority
          />
        </button>
      ) : (
        <div
          className={
            "w-full h-full " +
            (props.status === PhotoStatus.Inactive ? "opacity-30" : "")
          }
        >
          <button
            className="w-full h-full flex justify-center items-center"
            type="button"
            disabled={props.status === PhotoStatus.Inactive}
            onClick={() => fileInputRef.current!.click()}
          >
            <IconContext.Provider
              value={{ size: "36", className: "opacity-30" }}
            >
              <FiPlus />
            </IconContext.Provider>
          </button>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={(e) => onImageSelected(e.target.files![0])}
      />
    </div>
  );
}

export type CoverPhotosProps = {
  urls: (string | undefined)[];
};

export default function CoverPhotos(
  props: CoverPhotosProps & {
    onPhotoSelected: (index: number, filePath: string) => void;
  }
) {
  const onImageSelected = async (index: number, f: File) => {
    console.log("Photo", index, "Clicked");

    const formData = new FormData();
    formData.append("file", f);
    const uploadedFilePath = await uploadCoverPhotoAction(formData);

    props.onPhotoSelected(index, uploadedFilePath);

    console.log("successfully uploaded file", uploadedFilePath);

    setPhotos(
      photos.map((x, i) => {
        return i === index
          ? {
              ...x,
              status: PhotoStatus.Selected,
              url: uploadedFilePath,
            }
          : x;
      })
    );

    console.log("Set photos", photos);
  };

  const [photos, setPhotos] = useState<PhotoProps[]>(
    props.urls.map((url, index, urls) => {
      const status = url
        ? PhotoStatus.Selected
        : index === 0
        ? PhotoStatus.Active
        : urls[index - 1]
        ? PhotoStatus.Active
        : PhotoStatus.Inactive;
      return {
        index,
        url,
        status,
      };
    })
  );

  return (
    <div className="flex flex-row-reverse justify-content-between gap-6">
      {photos.map((x, i) => (
        <CoverPhoto
          {...x}
          key={i}
          onImageSelected={(f) => onImageSelected(i, f)}
        />
      ))}
    </div>
  );
}
