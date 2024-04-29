import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_ENVIRONMENT === "Local" ? import.meta.env.VITE_SUPABASE_URL : import.meta.env.VITE_SUPABASE_URL_PROD,
  import.meta.env.VITE_ENVIRONMENT === "Local" ? import.meta.env.VITE_SUPABASE_ANON_KEY : import.meta.env.VITE_SUPABASE_ANON_KEY_PROD,
);
