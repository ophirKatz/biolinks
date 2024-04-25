"use server";

import { ProfileFormData } from "@/app/profile/(components)/ProfileForm";
import { saveUserProfile } from "@/utils/api/profiles";

export default async function submitProfileFormAction(
  formData: ProfileFormData
) {
  console.log("Submitting profile form", formData);
  await saveUserProfile({
    username: formData.username,
    title: formData.title,
    bio: formData.description,
  });
}
