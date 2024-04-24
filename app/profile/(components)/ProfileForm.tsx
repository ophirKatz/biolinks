"use client";

import React, { useState } from "react";
import { SubmitButton } from "../../../components/forms/SubmitButton";
import CoverPhotos from "./CoverPhotos";
import Channels from "./Channel";
import Tabs from "./Tab";
import Username from "./Username";
import submitProfileForm from "../submit-action";

export type ProfileFormData = {
  username: string;
  title: string;
};

export default function ProfileForm() {
  const [profileForm, setProfileForm] = useState<ProfileFormData>({
    username: "",
    title: "",
  });

  const onUsernameChange = (value: string) => {
    setProfileForm({
      ...profileForm,
      username: value,
    });
  };

  const onSaveForm = () => submitProfileForm(profileForm);

  return (
    <form className="animate-in flex flex-col w-full justify-center text-foreground gap-4">
      <div className="flex flex-col gap-4 px-12">
        <Username onChange={onUsernameChange} />

        <label className="text-md mt-2">Bio</label>
        <input
          className="bg-white/10 rounded-lg flex items-center justify-center h-16 px-2"
          type="text"
          name="title"
          placeholder="Title"
          required
        />
        <textarea
          className="bg-white/10 rounded-lg flex items-center justify-center h-40 p-2"
          name="title"
          placeholder="Bio"
        ></textarea>

        <label className="text-md mt-2">Cover Photos</label>
        <CoverPhotos />

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
