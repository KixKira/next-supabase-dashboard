"use server";

import { createSupbaseServerClient } from "@/lib/supabase";
import { unstable_noStore } from "next/cache";

export async function createContest() {
  console.log("Crear promoción");
}

export async function updateContestById(id: string) {
  console.log("Actualizar promoción");
}

export async function deleteContestById(id: string) {}

export async function readContests() {
  unstable_noStore();
  const supabase = await createSupbaseServerClient();

  return await supabase.from("contest").select("*");
}
