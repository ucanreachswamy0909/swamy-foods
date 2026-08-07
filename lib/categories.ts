import { supabase } from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    console.log("SUPABASE ERROR:", error);
    return [];
  }

  console.log("CATEGORIES:", data);

  return data ?? [];
}