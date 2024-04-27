"use server";

import { redirect } from "next/navigation";
import { UserProfileModel } from "@/models/UserProfile";
import { fetchUserProfileByUsername } from "@/utils/api/profiles";

export const fetchUserProfileByUsernameAction = async (username: string) => {
  const { data, error } = await fetchUserProfileByUsername(username);

  if (error) {
    return redirect("/profile?message=Could not find user profile");
  }

  return data as UserProfileModel;
};
