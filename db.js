// إعدادات الاتصال بـ Supabase
const SUPABASE_URL = 'https://lldgzyfqoolpfolqhxdq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_DnGTqp9Ylcs6ikwV4Dp3zw_u-HjGYoA';

// تهيئة عميل Supabase
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
