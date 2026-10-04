// بيانات الاتصال بقاعدة بيانات Supabase
const SUPABASE_URL = 'ضع_رابط_مشروعك_هنا';
const SUPABASE_KEY = 'ضع_مفتاح_الكين_هنا';

// إنشاء كائن الاتصال وتثبيته في نافذة الصفحة
window.db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const db = window.db;
