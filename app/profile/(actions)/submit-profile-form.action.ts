"use server";

import { UserProfileModel } from "@/models/UserProfile";
import { saveUserProfile } from "@/utils/api/profiles-api";

export default async function submitProfileFormAction(
  formData: UserProfileModel
) {
  console.log("Submitting profile form", formData);
  await saveUserProfile(formData);
}
