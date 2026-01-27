import { createClient } from '@supabase/supabase-js';

// These are public keys meant for the frontend.
// We include them here as fallbacks because some Windows terminals 
// have issues reading .env.local files correctly.
const fallbackUrl = 'https://nrduzprfjhzcqfxqhncv.supabase.co';
const fallbackKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yZHV6cHJmamh6Y3FmeHFobmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MTQ2OTMsImV4cCI6MjA4NTA5MDY5M30.qkAp1hsByFSXuxcYkyUS_nLb18oqOl1SMExeHo5G6-8';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || fallbackUrl;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || fallbackKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
