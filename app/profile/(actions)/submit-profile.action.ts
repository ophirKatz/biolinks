"use server";

import { UserProfileModel } from "@/models/UserProfile";
import { saveUserProfile } from "@/utils/api/profiles-api";

export default async function submitProfileAction(
  profile: UserProfileModel,
  originalProfile: UserProfileModel
) {
  console.log("Submitting profile", profile);
  await saveUserProfile(profile, originalProfile);
}
