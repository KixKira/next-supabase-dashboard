import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://shvtdxhjirptecxntawe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNodnRkeGhqaXJwdGVjeG50YXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5Nzc4NzgsImV4cCI6MjAzNjU1Mzg3OH0.eUVnFEUvRNCpeJninF8bbyV7A5glibf9hDJ5S70UJxw";

export const supabase = createClient(supabaseUrl, supabaseKey);
