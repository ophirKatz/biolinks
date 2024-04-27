import { UserProfileModel } from "@/models/UserProfile";
import { createClient } from "../supabase/server";

export async function saveUserProfile(
  userProfile: Omit<UserProfileModel, "id">
) {
  const supabase = createClient();

  const getUserResult = await supabase.auth.getUser();
  await supabase.from("profiles").upsert<UserProfileModel>(
    {
      id: getUserResult.data.user!.id,
      ...userProfile,
    },
    { ignoreDuplicates: false, onConflict: "username" }
  );
}

export async function fetchUserProfile() {
  const supabase = createClient();

  return await supabase.from("profiles").select().limit(1).single();
}

export async function fetchUserProfileByUsername(username: string) {
  const supabase = createClient();

  return await supabase
    .from("profiles")
    .select()
    .eq("username", username)
    .limit(1)
    .single();
}
