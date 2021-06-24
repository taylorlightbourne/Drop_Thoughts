import { createClient } from "@supabase/supabase-js";

export const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY
export const url = "https://bmfrpwptdmmebjwjsfcj.supabase.co";

export const supabase = createClient(url, SUPABASE_KEY);
