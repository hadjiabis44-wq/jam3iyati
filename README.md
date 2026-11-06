# جمعيتي – نسخة الويب القابلة للتثبيت (PWA)

هذه نسخة أولية تعمل على iPhone وAndroid من المتصفح، ويمكن إضافتها إلى الشاشة الرئيسية.

## النشر المجاني على GitHub Pages
1. ارفع الملفات الأربعة إلى جذر مستودع `jam3iyati`: `index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg`.
2. افتح Settings ثم Pages.
3. في Build and deployment اختر Deploy from a branch.
4. اختر branch `main` والمجلد `/ (root)` ثم Save.
5. انتظر رابط الموقع الذي يظهر في صفحة Pages.

## ملاحظات
- هذه نسخة أولية للعرض وقراءة السجلات المسموح بها حسب صلاحيات Supabase الحالية.
- لا تحتوي بعد على نماذج إضافة/تعديل، تقارير PDF، رفع ملفات أو إدارة حسابات.
- مفتاح Supabase الموجود في index.html هو publishable key وليس service_role. لا تضع أي مفتاح سري في ملفات الويب.
- تسجيل الدخول يعتمد على حسابات Supabase Auth الموجودة مسبقًا وملف profiles.active.
- الملفات الحساسة لا ترفعها إلى bucket عام.
