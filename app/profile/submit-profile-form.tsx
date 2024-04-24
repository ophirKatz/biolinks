"use server";

import { ProfileFormData } from "@/app/profile/(components)/ProfileForm";
import { createClient } from "@/utils/supabase/server";
import { UserProfile } from "../models/UserProfile";

export default async function submitProfileForm(formData: ProfileFormData) {
  console.log("Submitting profile form", formData);
  const supabase = createClient();

  const getUserResult = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("profiles")
    .upsert<UserProfile>(
      {
        id: getUserResult.data.user!.id,
        username: formData.username,
        title: formData.title,
        bio: formData.description,
      },
      { ignoreDuplicates: false, onConflict: "username" }
    )
    .select();

  console.log("upsert result", data, error);

  const selectResult = await supabase.from("profiles").select();

  console.log("Result from select:", selectResult);
}
