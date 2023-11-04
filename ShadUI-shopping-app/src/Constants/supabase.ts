import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ecjbxrvyuuadxuhgzyzg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjamJ4cnZ5dXVhZHh1aGd6eXpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MjkwODcsImV4cCI6MjAxMzQwNTA4N30.Q_y7Rj6gZa6Xs0gtHaIO_5grAmMvNLAovAGMoY6pVf8"
);
