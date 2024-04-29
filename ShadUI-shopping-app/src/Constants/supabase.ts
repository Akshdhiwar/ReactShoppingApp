import { createClient } from "@supabase/supabase-js";

let url = import.meta.env.VITE_ENVIRONMENT === "Local" ? import.meta.env.VITE_SUPABASE_URL : import.meta.env.VITE_SUPABASE_URL_PROD
let anon = import.meta.env.VITE_ENVIRONMENT === "Local" ? import.meta.env.VITE_SUPABASE_ANON_KEY : import.meta.env.VITE_SUPABASE_ANON_KEY_PROD
console.log(url,anon);
export const supabase = createClient(
  import.meta.env.VITE_ENVIRONMENT === "Local" ? import.meta.env.VITE_SUPABASE_URL : import.meta.env.VITE_SUPABASE_URL_PROD,
  import.meta.env.VITE_ENVIRONMENT === "Local" ? import.meta.env.VITE_SUPABASE_ANON_KEY : import.meta.env.VITE_SUPABASE_ANON_KEY_PROD,
);
