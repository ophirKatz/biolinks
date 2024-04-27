"use server";

import { redirect } from "next/navigation";
import { UserProfileModel } from "@/models/UserProfile";
import { fetchUserProfile } from "@/utils/api/profiles";

export const fetchUserProfileAction = async () => {
  const { data, error } = await fetchUserProfile();

  if (error) {
    return redirect("/profile?message=Could not find user profile");
  }

  return data as UserProfileModel;
};
