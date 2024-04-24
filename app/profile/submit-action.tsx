"use server";

import { ProfileFormData } from "@/app/profile/(components)/ProfileForm";

export default async function submitProfileForm(formData: ProfileFormData) {
  console.log("Submitting profile form", formData);
}
