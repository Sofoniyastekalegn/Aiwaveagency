"use client";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://bunwleyndtrqibaugdtt.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1bndsZXluZHRycWliYXVnZHR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxODU0MzcsImV4cCI6MjA3Mzc2MTQzN30.eVYs39LGUcybpoYTA28jV7p9IWiHQwXjFmakH4kBepY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


