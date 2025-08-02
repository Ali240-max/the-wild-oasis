import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://icldwokdpctaqyoqyuzg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljbGR3b2tkcGN0YXF5b3F5dXpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3ODU0NzksImV4cCI6MjA2OTM2MTQ3OX0.iy53-vHfvgnDguvHEzZKZf6d1-MfAiKj8ApdhWbC4AQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
