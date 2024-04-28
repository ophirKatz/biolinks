"use server";

import { uploadCoverPhoto } from "@/utils/api/files-api";

export async function uploadCoverPhotoAction(formData: FormData) {
  const file = formData.get("file") as File;

  return await uploadCoverPhoto(file);
}
