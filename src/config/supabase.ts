import { createClient } from '@supabase/supabase-js';

// Your Supabase project URL and anon key
const supabaseUrl = 'https://raxwsfdgqgdcsajqpbnk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJheHdzZmRncWdkY3NhanFwYm5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMDk1NTAsImV4cCI6MjA0NzY4NTU1MH0.6t8yWwSmv_6RJjblgWIn_4fAYIr4hlnulKU_MFTm6Kk';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);