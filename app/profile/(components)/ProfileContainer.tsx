"use client";

import { UserProductModel, UserProfileModel } from "@/models/UserProfile";
import React, { useMemo, useState } from "react";
import ProfileForm from "./(profile-form)/ProfileForm";
import ProfilePreview from "./(preview)/ProfilePreview";
import ProductsForm from "./(products-form)/ProductsForms";

export type ProfileContainerProps = {
  profile: UserProfileModel;
};

enum ProfilePageMode {
  ProfileForm,
  ProductsForm,
  Preview,
}

export default function ProfileContainer(props: ProfileContainerProps) {
  const [mode, setMode] = useState(ProfilePageMode.ProductsForm);
  const [isAnimate, setIsAnimate] = useState(false);

  const previewClassName = useMemo(() => {
    if (mode === ProfilePageMode.Preview) return " animate-in-ltr";
    return " animate-out-rtl";
  }, [mode]);
  //   const profileFormClassName = useMemo(() => {
  //     if (!isAnimate) return "";
  //     if (mode === ProfilePageMode.ProfileForm) return " animate-in-rtl";
  //     return " animate-out-ltr";
  //   }, [mode]);

  const [previewProfile, setPreviewProfile] = useState<
    UserProfileModel | undefined
  >(undefined);

  const goToPreview = (profile: UserProfileModel) => {
    setPreviewProfile(profile);
    setMode(ProfilePageMode.Preview);
    setIsAnimate(true);
  };

  const goBackToProfileForm = () => {
    setMode(ProfilePageMode.ProfileForm);
    setIsAnimate(true);
  };

  return (
    <>
      {mode === ProfilePageMode.Preview && previewProfile ? (
        <ProfilePreview
          className="animate-preview-left"
          profile={previewProfile}
          onBack={goBackToProfileForm}
        />
      ) : (
        <></>
      )}
      {mode === ProfilePageMode.ProfileForm ? (
        <ProfileForm profile={props.profile} onPreview={goToPreview} />
      ) : (
        <></>
      )}
      {mode === ProfilePageMode.ProductsForm ? (
        <ProductsForm
          profile={props.profile}
          onBack={() => {}}
          onSave={(products: UserProductModel[]) => {}}
        />
      ) : (
        <></>
      )}
    </>
  );
}
