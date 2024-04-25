"use server";

import { redirect } from "next/navigation";
import { UserProfile } from "@/app/models/UserProfile";
import { fetchUserProfileByUsername } from "@/utils/api/profiles";

export const fetchUserProfileByUsernameAction = async (username: string) => {
  const { data, error } = await fetchUserProfileByUsername(username);

  if (error) {
    return redirect("/profile?message=Could not find user profile");
  }

  return data as UserProfile;
};
