"use client";

import { UserProfileModel } from "@/models/UserProfile";
import React, { useState } from "react";
import ProfileForm from "./(profile-form)/ProfileForm";

export type ProfileContainerProps = {
  profile: UserProfileModel;
};

enum ProfilePageMode {
  ProfileForm,
  ProductsForm,
  Preview,
}

export default function ProfileContainer(props: ProfileContainerProps) {
  const [mode, setMode] = useState(ProfilePageMode.ProfileForm);

  return (
    <>
      {mode === ProfilePageMode.ProfileForm ? (
        <ProfileForm profile={props.profile} /> // Add click events
      ) : (
        <></>
      )}
    </>
  );
}
