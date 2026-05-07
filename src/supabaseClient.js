import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cpixkfaodsvkazejqwrg.supabase.co";
const supabaseAnonKey = "sb_publishable_FdaMf9xusN9LLVIuAB81pg_vIuHJovg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);