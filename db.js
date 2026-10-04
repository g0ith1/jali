// إعدادات الاتصال بـ Supabase
const SUPABASE_URL = 'ضع_رابط_المشروع_هنا';
const SUPABASE_ANON_KEY = 'ضع_مفتاح_الانن_هنا';

// تهيئة عميل Supabase
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
