"use client";

import {
  TabType,
  UserProductModel,
  UserProfileModel,
} from "@/models/UserProfile";
import React, { useMemo, useState } from "react";
import ProfileForm from "./(profile-form)/ProfileForm";
import ProfilePreview from "./(preview)/ProfilePreview";
import ProductsForm from "./(products-form)/ProductsForms";
import submitProfileAction from "../(actions)/submit-profile.action";

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

  const [profile, setProfile] = useState<UserProfileModel>(props.profile);

  const goToPreview = (profile: UserProfileModel) => {
    setPreviewProfile(profile);
    setMode(ProfilePageMode.Preview);
    setIsAnimate(true);
  };

  const goBackToProfileForm = () => {
    setMode(ProfilePageMode.ProfileForm);
    setIsAnimate(true);
  };

  const goToProductsEdit = () => {
    setMode(ProfilePageMode.ProductsForm);
    setIsAnimate(true);
  };

  const saveProducts = (products: UserProductModel[]) => {
    setProfile({
      ...profile,
      tabs: profile.tabs.map((t) =>
        t.type === TabType.Products
          ? {
              ...t,
              count: products.length,
            }
          : t
      ),
      products,
    });

    setMode(ProfilePageMode.ProfileForm);

    console.log("updated profile in container", profile);
  };

  const onSaveForm = (profileForm: UserProfileModel) => {
    setProfile({
      ...profileForm,
      products: [...profile.products],
    });
    submitProfileAction(profile);
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
        <ProfileForm
          profile={props.profile}
          onPreview={goToPreview}
          onSave={onSaveForm}
          onProductsLinkClick={goToProductsEdit}
        />
      ) : (
        <></>
      )}
      {mode === ProfilePageMode.ProductsForm ? (
        <ProductsForm
          profile={props.profile}
          onBack={goBackToProfileForm}
          onSave={saveProducts}
        />
      ) : (
        <></>
      )}
    </>
  );
}
