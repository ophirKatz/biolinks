import React from "react";
import { fetchUserProfileByUsernameAction } from "./(actions)/fetch-user-profile-by-username.action";

export default async function BioLinksPage({
  params,
}: {
  params: { username: string };
}) {
  const userProfile = await fetchUserProfileByUsernameAction(params.username);

  console.log("Found user profile", userProfile);
  return <div>BioLinksPage</div>;
}
