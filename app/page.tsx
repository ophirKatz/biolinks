import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <Link
            href="/profile"
            className="py-2 px-3 min-w-16 flex items-center justify-center rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Profile
          </Link>
          <Link
            href="/login"
            className="py-2 px-3 min-w-16 flex items-center justify-center rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Join
          </Link>
          <Link
            href="/outt"
            className="py-2 px-3 min-w-16 flex items-center justify-center rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Outt
          </Link>
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>
    </div>
  );
}
