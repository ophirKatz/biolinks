import {
  UserChannelModel,
  UserCouponModel,
  UserProductModel,
  UserProfileModel,
  UserTabModel,
} from "@/models/UserProfile";
import { createClient } from "../supabase/server";

export type SaveUserProfileModel = {
  username: string;
  title: string;
  description: string;
  cover_photo1_url?: string;
  cover_photo2_url?: string;
  cover_photo3_url?: string;
  tabs: UserTabModel[];
  channels: UserChannelModel[];
  coupons: UserCouponModel[];
  products: UserProductModel[];
  productsToRemove: UserProductModel[];
};

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

  await saveUserProducts(products);
}

export async function saveUserProducts(products: UserProductModel[]) {
  const supabase = createClient();

  const productsToUpdate = products.filter((p) => p.id !== "");
  const productsToAdd = products
    .filter((p) => p.id === "")
    .map((p) => {
      const { id, user_id, ...p_t } = p;
      return p_t;
    });

  const { error: productsInsertError } = await supabase
    .from("products")
    .insert(productsToAdd);

  if (productsInsertError) {
    console.error("product insert error", productsInsertError, productsToAdd);
    return;
  }

  const { error: productsUpdateError } = await supabase
    .from("products")
    .upsert(productsToUpdate);

  if (productsUpdateError) {
    console.error(
      "product update error",
      productsUpdateError,
      productsToUpdate
    );
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
      is_active,
      count
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
        is_active,
        count
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
