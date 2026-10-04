// بيانات الاتصال بقاعدة بيانات Supabase الخاصة بمشروعك
const SUPABASE_URL = 'https://lldgzyfqoolpfolqhxdq.supabase.co';
const SUPABASE_KEY = 'sb_publishable_DnGTqp9Ylcs6ikwV4Dp3zw_u-HjGYoA';

// إنشاء كائن الاتصال وتثبيته في نافذة الصفحة
window.db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const db = window.db;
