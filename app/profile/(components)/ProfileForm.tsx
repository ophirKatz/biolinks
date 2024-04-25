"use client";

import React, { useState } from "react";
import { SubmitButton } from "../../../components/forms/SubmitButton";
import CoverPhotos from "./CoverPhotos";
import Channels from "./Channels";
import Tabs from "./Tabs";
import UsernameInput from "./UsernameInput";
import { DebounceInput } from "react-debounce-input";
import submitProfileFormAction from "../(actions)/submit-profile-form.action";

export type ProfileFormData = {
  username: string;
  title: string;
  description: string;
  coverPhoto1Url?: string;
  coverPhoto2Url?: string;
  coverPhoto3Url?: string;
};

export type ProfileFormProps = ProfileFormData;

export default function ProfileForm(props: ProfileFormProps) {
  const [profileForm, setProfileForm] = useState<ProfileFormData>({
    ...props,
  });

  const onUsernameChange = (username: string) => {
    setProfileForm({
      ...profileForm,
      username,
    });
  };

  const onTitleChange = (title: string) => {
    setProfileForm({
      ...profileForm,
      title,
    });
  };

  const onDescriptionChange = (description: string) => {
    setProfileForm({
      ...profileForm,
      description,
    });
  };

  const onPhotoSelected = (index: number, filePath: string) => {
    setProfileForm({
      ...profileForm,
      coverPhoto1Url: index === 0 ? filePath : profileForm.coverPhoto1Url,
      coverPhoto2Url: index === 1 ? filePath : profileForm.coverPhoto2Url,
      coverPhoto3Url: index === 2 ? filePath : profileForm.coverPhoto3Url,
    });
    console.log("profileForm", profileForm, filePath, index);
  };

  const onSaveForm = () => submitProfileFormAction(profileForm);

  return (
    <form className="animate-in flex flex-col w-full justify-center text-foreground gap-4">
      <div className="flex flex-col gap-4 px-8">
        <UsernameInput
          value={profileForm.username}
          onChange={onUsernameChange}
        />

        <label className="text-md mt-2">Bio</label>
        <DebounceInput
          className="bg-white/10 rounded-lg flex items-center justify-center h-16 px-2 text-white/50"
          type="text"
          name="title"
          placeholder="Title"
          autoComplete="false"
          autoCorrect="false"
          required
          debounceTimeout={500}
          value={profileForm.title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
        <textarea
          className="bg-white/10 rounded-lg flex items-center justify-center h-40 p-2 text-white/50"
          name="title"
          placeholder="Bio"
          value={profileForm.description}
          onChange={(e) => onDescriptionChange(e.target.value)}
        />

        <label className="text-md mt-2">Cover Photos</label>
        <CoverPhotos
          urls={[
            profileForm.coverPhoto1Url,
            profileForm.coverPhoto2Url,
            profileForm.coverPhoto3Url,
          ]}
          onPhotoSelected={onPhotoSelected}
        />

        <label className="text-md mt-2">Channels</label>
        <Channels />

        <label className="text-md mt-2">Tabs</label>
        <Tabs />
      </div>

      <div className="border-t h-16 w-full flex mt-16">
        <SubmitButton
          formAction={onSaveForm}
          className="flex-1 w-full h-full flex justify-center items-center text-lg font-bold"
          type="button"
          pendingText="Saving..."
        >
          Save
        </SubmitButton>
        <SubmitButton
          className="flex-1 w-full h-full flex justify-center items-center text-lg font-bold"
          type="button"
          pendingText="Saving Draft..."
        >
          Preview
        </SubmitButton>
      </div>
    </form>
  );
}
