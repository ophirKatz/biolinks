"use server";

import React from "react";
import { SubmitButton } from "./SubmitButton";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function SignInForm() {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/join?message=Could not authenticate user");
    }

    return redirect("/profile");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/join?message=Could not authenticate user");
    }

    return redirect("/join?message=Check email to continue sign in process");
  };

  return (
    <form className="flex flex-col w-full justify-center text-foreground">
      <div className="w-full flex flex-col gap-4 px-8 pb-[12rem]">
        <input
          className="bg-white/10 rounded-lg flex items-center justify-center h-16 px-2 text-center"
          type="text"
          autoComplete="false"
          spellCheck="false"
          name="email"
          placeholder="Email address"
          required
        />
        <input
          className="bg-white/10 rounded-lg flex items-center justify-center h-16 px-2 text-center"
          type="password"
          autoComplete="false"
          spellCheck="false"
          name="password"
          placeholder="Password"
          required
        />
      </div>

      <div className="border-t h-16 w-full flex">
        <SubmitButton
          formAction={signIn}
          className="flex-1 w-full h-full flex justify-center items-center text-lg font-bold bg-white/10"
          pendingText="Signing In..."
        >
          Sign In
        </SubmitButton>
        <SubmitButton
          formAction={signUp}
          className="flex-1 w-full h-full flex justify-center items-center text-lg font-bold bg-white/30"
          pendingText="Signing In..."
        >
          Sign Up
        </SubmitButton>
      </div>
    </form>
  );
}
