# موقع بورتفوليو شخصي — قالب قابل للتعديل

موقع ثابت (Static Site) بسيط، بدون أي عملية بناء (Build) مطلوبة — مباشرة HTML + CSS + JS. مبني على نفس هيكلة وتصميم موقع مصطفى رزق التعريفي، لكن بمحتوى Placeholder تقدر تستبدله بمحتواك الخاص بسهولة.

## هيكل الملفات

```
index.html          → هيكل الصفحة (نادرًا ما تحتاج تعدّل هنا)
css/style.css        → التصميم والألوان والخطوط
js/content.js         → ⭐ كل النصوص والبيانات القابلة للتعديل (ابدأ من هنا)
js/main.js            → منطق العرض والحركات (لا تحتاج تعدّله عادةً)
images/               → الصور (ضيف صورك هنا)
```

## كيف تعدّل المحتوى

كل حاجة تقريبًا (اسمك، وصفك، الخدمات، الأعمال، العملاء، أرقام التواصل، روابط السوشيال ميديا) موجودة في ملف واحد:

```
js/content.js
```

افتحه بأي محرر نصوص (VS Code مثلاً)، وغيّر القيم بين علامات التنصيص `" "`. مش محتاج تلمس HTML أو CSS خالص.

### لإضافة صورتك الشخصية
ضيف الصورة في مجلد `images/` وغيّر السطر ده في `content.js`:
```js
avatarSrc: "images/صورتك.jpg",
```

### لتغيير الألوان
كل الألوان معرّفة في أول ملف `css/style.css` تحت `:root`. غيّر قيمة `--accent` إن رغبت بلون مميز غير الذهبي.

## الرفع على GitHub

```bash
cd portfolio-template
git init
git add .
git commit -m "أول نسخة من الموقع"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```
(غيّر `USERNAME` و`REPO_NAME` باسم حسابك واسم المستودع اللي هتعمله على GitHub)

## الربط بـ Cloudflare Pages

1. ادخل على [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. اختر المستودع اللي رفعته على GitHub.
3. إعدادات البناء (Build settings):
   - **Framework preset:** None
   - **Build command:** (سيبه فاضي)
   - **Build output directory:** `/`
4. اضغط **Save and Deploy**. سيعمل الموقع على رابط مؤقت من نوع `xxxx.pages.dev`.

## ربط دومين خاص لاحقًا

لما تشتري الدومين، من نفس مشروع Cloudflare Pages:
**Custom domains** → **Set up a custom domain** → اكتب الدومين واتبع التعليمات (إذا كان الدومين نفسه مسجلاً لدى Cloudflare سيُربط تلقائيًا، وإذا كان لدى شركة أخرى ستحصل على DNS records تضيفها هناك).

## ملاحظات

- الخطوط (Tajawal, IBM Plex Sans Arabic, JetBrains Mono) بتتحمّل من Google Fonts، فلازم يكون فيه اتصال إنترنت عند فتح الموقع (وده الوضع الطبيعي لأي موقع منشور).
- التصميم متجاوب بالكامل (Mobile / Tablet / Desktop).
- شعارات العملاء وصور الأعمال حاليًا Placeholder نصي/تدرّج لوني — استبدلها بصور حقيقية في `images/` وحدّث المسارات في `content.js` وقتما تحب.
