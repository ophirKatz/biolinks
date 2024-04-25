import { UserProfile } from "@/app/models/UserProfile";
import { createClient } from "../supabase/server";

export async function saveUserProfile(userProfile: Omit<UserProfile, "id">) {
  const supabase = createClient();

  const getUserResult = await supabase.auth.getUser();
  await supabase.from("profiles").upsert<UserProfile>(
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
