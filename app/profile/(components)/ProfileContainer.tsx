"use client";

import {
  TabType,
  UserProductModel,
  UserProfileModel,
} from "@/models/UserProfile";
import React, { useState } from "react";
import ProfileForm from "./(profile-form)/ProfileForm";
import ProfilePreview from "./(preview)/ProfilePreview";
import ProductsForm from "./(products-form)/ProductsForms";
import submitProfileAction from "../(actions)/submit-profile.action";

// const [isAnimate, setIsAnimate] = useState(false);

//   const previewClassName = useMemo(() => {
//     if (mode === ProfilePageMode.Preview) return " animate-in-ltr";
//     return " animate-out-rtl";
//   }, [mode]);
//   //   const profileFormClassName = useMemo(() => {
//   //     if (!isAnimate) return "";
//   //     if (mode === ProfilePageMode.ProfileForm) return " animate-in-rtl";
//   //     return " animate-out-ltr";
//   //   }, [mode]);

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
  const [profile, setProfile] = useState(props.profile);
  const [originalProfile] = useState(props.profile);
  const [productsToRemove, setProductsToRemove] = useState([]);

  // Navigation
  const goToPreview = () => setMode(ProfilePageMode.Preview);
  const goBackToProfileForm = () => setMode(ProfilePageMode.ProfileForm);
  const goToProductsEdit = () => setMode(ProfilePageMode.ProductsForm);

  // Updates

  const resetChanges = () => setProfile(originalProfile);

  const onProfileFormUpdate = (profile: UserProfileModel) =>
    setProfile(profile);

  const onProductsFormUpdate = (products: UserProductModel[]) =>
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

  const saveProducts = (products: UserProductModel[]) => {
    console.log("saving products...", products);
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
    console.log("profile after save products", profile);
  };

  // Actions
  const onProfileFormSave = () => submitProfileAction(profile, originalProfile);

  return (
    <>
      {mode === ProfilePageMode.Preview ? (
        <ProfilePreview
          className="animate-preview-left"
          profile={profile}
          onBack={goBackToProfileForm}
        />
      ) : (
        <></>
      )}
      {mode === ProfilePageMode.ProfileForm ? (
        <ProfileForm
          profile={profile}
          onUpdate={onProfileFormUpdate}
          onPreview={goToPreview}
          onSave={onProfileFormSave}
          onProductsLinkClick={goToProductsEdit}
        />
      ) : (
        <></>
      )}
      {mode === ProfilePageMode.ProductsForm ? (
        <ProductsForm
          profile={profile}
          onUpdate={onProductsFormUpdate}
          onBack={goBackToProfileForm}
          onSave={saveProducts}
        />
      ) : (
        <></>
      )}
    </>
  );
}
