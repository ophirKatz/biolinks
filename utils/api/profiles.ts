import { UserProfileModel } from "@/models/UserProfile";
import { createClient } from "../supabase/server";

export async function saveTempUserProfile(
  userProfile: Omit<UserProfileModel, "id">
) {
  const supabase = createClient();

  const getUserResult = await supabase.auth.getUser();
  await supabase.from("temporary_profiles").upsert<UserProfileModel>(
    {
      id: getUserResult.data.user!.id,
      ...userProfile,
    },
    { ignoreDuplicates: false, onConflict: "username" }
  );
}

export async function saveUserProfile(
  userProfile: Omit<UserProfileModel, "id">
) {
  const supabase = createClient();

  const getUserResult = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("published_profiles")
    .upsert<UserProfileModel>(
      {
        id: getUserResult.data.user!.id,
        ...userProfile,
      },
      { ignoreDuplicates: false, onConflict: "username" }
    )
    .select();

  if (error) {
    console.error(error);
  }
}

export async function fetchUserProfile() {
  const supabase = createClient();

  return await supabase.from("temporary_profiles").select().limit(1).single();
}

export async function fetchUserProfileByUsername(username: string) {
  const supabase = createClient();

  return await supabase
    .from("published_profiles")
    .select()
    .eq("username", username)
    .limit(1)
    .single();
}
