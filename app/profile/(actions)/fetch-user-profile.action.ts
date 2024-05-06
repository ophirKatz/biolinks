"use server";

import { redirect } from "next/navigation";
import { UserProfileModel } from "@/models/UserProfile";
import { fetchUserProfile } from "@/utils/api/profiles-api";
import { SearchParamsCodes } from "@/utils/search-params-codes";

export const fetchUserProfileAction = async () => {
  const { data, error } = await fetchUserProfile();

  if (error) {
    console.error(error);
    return redirect(`/profile?code=${SearchParamsCodes.UserNotFound}`);
  }

  return data as UserProfileModel;
};
