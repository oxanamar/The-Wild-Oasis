import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://obwyddgickaoimmcezju.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9id3lkZGdpY2thb2ltbWNlemp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MTcxODIsImV4cCI6MjA1MDE5MzE4Mn0.8uGLaBXyX2Z-LbhJZKyhI5jykefxqs5SgTR7Mgmnaw4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
