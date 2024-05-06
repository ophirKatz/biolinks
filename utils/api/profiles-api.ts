import { UserProfileModel } from "@/models/UserProfile";
import { createClient } from "../supabase/server";

export async function saveUserProfile(
  userProfile: Omit<UserProfileModel, "id">
) {
  const supabase = createClient();

  const { tabs, channels, coupons, products, ...profile } = userProfile;

  const getUserResult = await supabase.auth.getUser();
  const userId = getUserResult.data.user!.id;
  const { error: profileUpdateError } = await supabase
    .from("profiles")
    .update({
      ...profile,
    })
    .eq("id", userId)
    .select();

  if (profileUpdateError) {
    console.error(profileUpdateError);
    return;
  }

  console.log("updating tabs", tabs);
  const { error: tabsUpdateError } = await supabase
    .from("tabs")
    .upsert(tabs)
    .select();

  if (tabsUpdateError) {
    console.error(tabsUpdateError);
    return;
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
    cover_photo1_url,
    cover_photo2_url,
    cover_photo3_url,
    tabs (
      id,
      type,
      is_active
    ),
    channels (
      id,
      type,
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
    .select(
      `
      id,
      username,
      title,
      description,
      cover_photo1_url,
      cover_photo2_url,
      cover_photo3_url,
      tabs (
        id,
        type,
        is_active
      ),
      channels (
        id,
        type,
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
    .eq("username", username)
    .single();
}
