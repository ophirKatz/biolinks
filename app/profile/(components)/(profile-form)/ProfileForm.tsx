"use client";

import React, { useState } from "react";
import { SubmitButton } from "../../../../components/forms/SubmitButton";
import CoverPhotos from "./EditCoverPhotos";
import Channels from "./EditChannels";
import TabsEdit from "./TabsEdit";
import UsernameInput from "./UsernameInput";
import { DebounceInput } from "react-debounce-input";
import { UserProfileModel } from "@/models/UserProfile";
import Link from "next/link";

export type ProfileFormProps = {
  profile: UserProfileModel;
  onPreview: () => void;
  onSave: () => void;
  onUpdate: (profile: UserProfileModel) => void;
  onProductsLinkClick: () => void;
  className?: string;
};

export default function ProfileForm(props: ProfileFormProps) {
  const [profile, setProfile] = useState<UserProfileModel>({
    ...props.profile,
  });

  const onUsernameChange = (username: string) => {
    setProfile({
      ...profile,
      username,
    });
    props.onUpdate(profile);
  };

  const onTitleChange = (title: string) => {
    setProfile({
      ...profile,
      title,
    });
    props.onUpdate(profile);
  };

  const onDescriptionChange = (description: string) => {
    setProfile({
      ...profile,
      description,
    });
    props.onUpdate(profile);
  };

  const onPhotoSelected = (index: number, filePath: string) => {
    setProfile({
      ...profile,
      cover_photo1_url: index === 0 ? filePath : profile.cover_photo1_url,
      cover_photo2_url: index === 1 ? filePath : profile.cover_photo2_url,
      cover_photo3_url: index === 2 ? filePath : profile.cover_photo3_url,
    });
    props.onUpdate(profile);
  };

  const onTabActivityToggled = (index: number) => {
    setProfile({
      ...profile,
      tabs: profile.tabs.map((t, i) => {
        return i === index ? { ...t, is_active: !t.is_active } : t;
      }),
    });
    props.onUpdate(profile);
  };

  return (
    <div
      className={
        "flex flex-col justify-center items-center gap-4 mt-8 font-bold pt-20 " +
        props.className
      }
    >
      <Link href="/profile">
        <span className="text-xl">Welcome to BioLinks!</span>
      </Link>
      <span className="text-lg text-gray-400">Let's link that bio</span>

      <form className="flex flex-col w-full justify-center text-foreground gap-4">
        <div className="flex flex-col gap-4 px-8">
          <UsernameInput value={profile.username} onChange={onUsernameChange} />

          <label className="text-md mt-2 text-end">ביו</label>
          <DebounceInput
            dir="rtl"
            className="bg-white/10 rounded-lg flex items-center justify-center h-16 px-2 text-white/50"
            type="text"
            name="title"
            placeholder="כותרת"
            autoComplete="false"
            autoCorrect="false"
            required
            debounceTimeout={500}
            value={profile.title}
            onChange={(e) => onTitleChange(e.target.value)}
          />
          <textarea
            dir="rtl"
            className="bg-white/10 rounded-lg flex items-center justify-center h-40 p-2 text-white/50"
            name="title"
            placeholder="ביו"
            value={profile.description}
            onChange={(e) => onDescriptionChange(e.target.value)}
          />

          <label className="text-md mt-2 text-end">תמונות רקע</label>
          <CoverPhotos
            urls={[
              profile.cover_photo1_url,
              profile.cover_photo2_url,
              profile.cover_photo3_url,
            ]}
            onPhotoSelected={onPhotoSelected}
          />

          <label className="text-md mt-2 text-end">ערוצים</label>
          <Channels />

          <label className="text-md mt-2 text-end">טאבים וקישורים</label>
          <TabsEdit
            tabs={profile.tabs}
            onTabActivityToggled={onTabActivityToggled}
            onProductsClick={props.onProductsLinkClick}
          />
        </div>

        <div className="border-t h-16 w-full flex mt-16">
          <SubmitButton
            formAction={props.onSave}
            className="flex-1 w-full h-full flex justify-center items-center text-lg font-bold"
            type="button"
            pendingText="Saving..."
          >
            Save
          </SubmitButton>
          <button
            className="flex-1 w-full h-full flex justify-center items-center text-lg font-bold"
            type="button"
            onClick={props.onPreview}
          >
            Preview
          </button>
        </div>
      </form>
    </div>
  );
}
