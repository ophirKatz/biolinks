"use server";

import { ProfileFormData } from "@/app/profile/(components)/ProfileForm";
import { saveUserProfile } from "@/utils/api/profiles-api";

export default async function submitProfileFormAction(
  formData: ProfileFormData
) {
  console.log("Submitting profile form", formData);
  await saveUserProfile({
    username: formData.username,
    title: formData.title,
    description: formData.description,
    cover_photo1_url: formData.coverPhoto1Url,
    cover_photo2_url: formData.coverPhoto2Url,
    cover_photo3_url: formData.coverPhoto3Url,
    active_tabs: [],
    channels: [],
    coupons: [],
    products: [],
  });
}
