import { generateId } from "../random";
import { createClient } from "../supabase/server";

export async function uploadCoverPhoto(f: File) {
  const supabase = createClient();

  const user = await supabase.auth.getUser();

  if (user.error) {
    throw new Error("Failed to upload cover photo for the current user");
  }

  const fileName = `${user.data.user!.id}/cover/${generateId(32)}.png`;
  const { data, error } = await supabase.storage
    .from("cover_photos")
    .upload(fileName, f, {
      cacheControl: "3600",
      upsert: false,
    });

  const publicUrl = supabase.storage
    .from("cover_photos")
    .getPublicUrl(fileName);

  if (error) {
    console.error(error);
    throw new Error(`Failed to upload cover photo because ${error}`);
  }

  console.log("successfully uploaded file", publicUrl.data.publicUrl);

  return publicUrl.data.publicUrl;
}
