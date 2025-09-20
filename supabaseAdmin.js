import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('URL:', supabaseUrl);
console.log('KEY:', supabaseServiceRoleKey?.substring(0, 5) + '...');

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
