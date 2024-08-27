"use server";
import { createSupbaseServerClient } from "@/lib/supabase";
import { unstable_noStore } from "next/cache";

export async function readParticipants() {
  unstable_noStore();
  const supabase = await createSupbaseServerClient();

  return await supabase.from("participants").select("*");
}
