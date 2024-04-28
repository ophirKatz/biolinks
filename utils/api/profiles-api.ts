import { UserProfileModel } from "@/models/UserProfile";
import { createClient } from "../supabase/server";

export async function saveUserProfile(
  userProfile: Omit<UserProfileModel, "id">
) {
  const supabase = createClient();

  const { channels, coupons, products, ...profile } = userProfile;

  const getUserResult = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("profiles")
    .update({
      ...profile,
    })
    .eq("id", getUserResult.data.user!.id)
    .select();

  if (error) {
    console.error(error);
  }
}

export async function fetchUserProfile() {
  const supabase = createClient();

  return await supabase
    .from("profiles")
    .select(
      `
    id,
    username,
    title,
    description,
    active_tabs,
    cover_photo1_url,
    cover_photo2_url,
    cover_photo3_url,
    channels (
      id,
      type,
      follower_count,
      url
    ),
    coupons (
      id,
      title,
      description,
      url,
      coupon_code
    ),
    products (
      id,
      title,
      description,
      url,
      image_url
    )
  `
    )
    .limit(1)
    .single();
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
