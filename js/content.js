/* =========================================================
   محتوى الموقع — عدّل هنا فقط
   كل النصوص، الأرقام، الروابط، والصور تُدار من هذا الملف
   لن تحتاج تلمس index.html أو style.css من أجل تغيير المحتوى
========================================================= */
const siteContent = {

  // -------- بيانات عامة --------
  pageTitle: "سعيد ناصر | مصور درون ومونتاج ومنتج عقاري",
  pageDescription: "تصوير درون، مونتاج، إنتاج عقاري، تصميم جرافيك، تحريك شعارات، وتصوير برامج تلفزيونية.",
  fullName: "سعيد ناصر",
  experienceBadge: "+10 سنوات خبرة",

  // العناوين الوظيفية اللي تتبدّل بأنيميشن الكتابة في الهيرو
  roles: ["مصور درون", "مونتير فيديو", "منتج عقاري", "مصمم جرافيك"],

  bio: "أوثّق العقارات والمشاريع والبرامج التلفزيونية بعدسة الدرون، وأحوّل الفكرة الخام إلى محتوى بصري جاهز للنشر عبر المونتاج والتصميم الجرافيكي.",

  // -------- الإحصائيات (شريط التايم كود) --------
  stats: [
    { num: "+600", label: "مشروع منجز" },
    { num: "+10",  label: "سنوات خبرة" },
    { num: "8",    label: "أسواق" },
    { num: "+150", label: "ساعة تصوير جوي" }
  ],

  // -------- الأسواق / الدول --------
  markets: [
    { flag: "images/flags/sa.svg", name: "السعودية" },
    { flag: "images/flags/kw.svg", name: "الكويت" },
    { flag: "images/flags/ye.svg", name: "اليمن" },
    { flag: "images/flags/ly.svg", name: "ليبيا" }
  ],

  // -------- نبذة --------
  aboutText: "بدأت رحلتي في المونتاج قبل أكثر من 10 سنوات، وتوسّع مجالي تدريجيًا مع دخول الدرون كأداة أساسية في التصوير العقاري والتلفزيوني. أؤمن إن أي مشروع مهما كان بسيطًا يستحق نفس الاهتمام بالتفاصيل — من زاوية اللقطة إلى آخر قصّة في المونتاج. هذا ما يميّز أسلوبي: سرعة في التسليم دون التنازل عن الجودة.",

  // -------- الخدمات --------
  // slug: يُستخدم للربط بصفحة أعمال هذا القسم تحديدًا (works.html?cat=slug)
  // لازم يطابق حقل "category" في عناصر مصفوفة work بالأسفل
  servicesIntro: "خدمات إنتاج مرئي متكاملة، من التصوير الجوي إلى المونتاج والإخراج النهائي.",
  services: [
    { slug: "drone",          tag: "01", icon: "🛸", title: "تصوير درون",            desc: "زوايا جوية سينمائية توثّق العقار أو الموقع من منظور مختلف تمامًا." },
    { slug: "montage",        tag: "02", icon: "✂️", title: "المونتاج",               desc: "تنظيم اللقطات وضبط الإيقاع لتخرج القصة بصورتها النهائية الاحترافية." },
    { slug: "real-estate",    tag: "03", icon: "🏠", title: "الإنتاج العقاري",         desc: "تغطية متكاملة للوحدات العقارية بأسلوب بصري يسهّل على العميل اتخاذ القرار." },
    { slug: "graphic-design", tag: "04", icon: "🎨", title: "تصميم جرافيك",             desc: "هويات بصرية ومطبوعات وتصاميم تحمل بصمة واضحة، من الفكرة إلى التنفيذ النهائي." },
    { slug: "logo-animation", tag: "05", icon: "⚡", title: "تحريك الشعارات",          desc: "إعطاء الهوية البصرية حياة وحركة تترك انطباعًا أول قويًا واحترافيًا." },
    { slug: "tv-programs",    tag: "06", icon: "📺", title: "تصوير البرامج التلفزيونية", desc: "تغطية كاملة للحلقات والبرامج التلفزيونية بجودة تصوير احترافية." }
  ],

  // -------- الأعمال / المعرض --------
  // category: لازم تطابق أحد قيم slug في مصفوفة services بالأعلى — بيها يتحدد في أي صفحة قسم يظهر هذا العمل
  // لون التدرّج يتحكم في خلفية الصورة المصغّرة (يُستخدم فقط إن لم تتوفر صورة مصغّرة حقيقية من رابط يوتيوب صالح)
  // videoLink: ضع هنا رابط فيديو يوتيوب — الفيديو يشتغل مباشرة داخل الكرت نفسه عند الضغط عليه، بدون نافذة منبثقة
  // -------- الأعمال / المعرض --------
  // category: لازم تطابق أحد قيم slug في مصفوفة services بالأعلى — بيها يتحدد في أي صفحة قسم يظهر هذا العمل
  // featured: true → يظهر في "شاهد أعمالي" بالصفحة الرئيسية (اجعلها true لأفضل 6-8 أعمال فقط، كواجهة مختارة)
  // كل عمل يظهر دائمًا في صفحة قسمه بـ works.html بغض النظر عن featured — القيمة دي فقط تتحكم بالصفحة الرئيسية
  // لون التدرّج يتحكم في خلفية الصورة المصغّرة (يُستخدم فقط إن لم تتوفر صورة مصغّرة حقيقية من رابط يوتيوب صالح)
  // videoLink: ضع هنا رابط فيديو يوتيوب — الفيديو يشتغل مباشرة داخل نافذة منبثقة عند الضغط على الكرت
  work: [
    { category: "drone",           featured: true, title: "تصوير عقاري بالدرون",  desc: "توثيق جوي لمشروع سكني.",              gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    { category: "montage",         featured: true, title: "مونتاج فيديو",         desc: "إعادة قص وتوليف لمقابلة تلفزيونية.",      gradient: "linear-gradient(135deg,#D91B5C,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    { category: "real-estate",     featured: true, title: "جولة عقارية كاملة",    desc: "تغطية شاملة لوحدة سكنية من الداخل والخارج.", gradient: "linear-gradient(135deg,#7A1F4F,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    { category: "logo-animation",  featured: true, title: "تحريك شعار",          desc: "هوية بصرية متحركة لعلامة تجارية.",        gradient: "linear-gradient(135deg,#7A1750,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    { category: "tv-programs",     featured: true, title: "تغطية برنامج تلفزيوني", desc: "تصوير ومونتاج حلقة برنامج كامل.",       gradient: "linear-gradient(135deg,#B0195C,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=XXXXXXXXXXX" }
  ],

  // -------- العملاء --------
  // ضع اسم العميل الحقيقي وشعاره في مجلد images/clients/ ثم عدّل مسار logo هنا
  // الشعارات تظهر بتدرج رمادي وتتحول لألوانها الحقيقية عند تمرير الفأرة (تأثير معاصر شائع)
  clients: [
    { name: "عميل 01", logo: "images/clients/client-01.png" },
    { name: "عميل 02", logo: "images/clients/client-02.png" },
    { name: "عميل 03", logo: "images/clients/client-03.png" },
    { name: "عميل 04", logo: "images/clients/client-04.png" },
    { name: "عميل 05", logo: "images/clients/client-05.png" },
    { name: "عميل 06", logo: "images/clients/client-06.png" },
    { name: "عميل 07", logo: "images/clients/client-07.png" },
    { name: "عميل 08", logo: "images/clients/client-08.png" }
  ],

  // -------- تواصل --------
  contactTitle: "لنبدأ مشروعك القادم",
  contactText: "عندك عقار، حدث، أو فكرة تحتاج محتوى مرئي احترافي؟ تواصل معي لنحوّلها إلى عمل جاهز للنشر.",
  whatsappLink: "https://wa.me/200000000000",

  // -------- الفوتر --------
  footerTagline: "مصور درون ومونتير، متخصص في الإنتاج العقاري والتصميم الجرافيكي.",
  phoneDisplay: "+20 000 000 0000",
  email: "example@email.com",
  emailLink: "mailto:example@email.com",

  // روابط السوشيال ميديا — اترك أي رابط فارغًا "" إن لم ترغب بظهور أيقونته
  socials: {
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
    tiktok: "https://tiktok.com/@username",
    youtube: "https://youtube.com/@username",
    behance: "https://behance.net/username",
    facebook: "https://facebook.com/username"
  },

  // -------- صفحة "تصميم جرافيك" — أسلوب تحريري مستقل (مستوحى من vanschneider.com) --------
  // هذه الصفحة (graphic-design.html) مختلفة عن باقي صفحات الأقسام، ومخصّصة لعرض أعمال التصميم
  // الجرافيكي بأسلوب مجلة/معرض بدل شبكة الفيديوهات المعتادة
  graphicDesignPage: {
    eyebrow: "استوديو التصميم",
    statement: "أصمم؛ إذن أنا موجود",
    subStatement: "تصميم جرافيك — منذ 2015",
    intro: "أنا سعيد ناصر، إلى جانب الفيديو والدرون، أصمم هويات بصرية ومطبوعات ومحتوى جرافيكي يحمل بصمة واضحة. هذا النص Placeholder — عدّله من content.js ليحكي أسلوبك الخاص في التصميم.",

    // كل مشروع = قسم كامل بمعرض أفقي قابل للتمرير، يشبه أسلوب دراسات الحالة في المواقع العالمية
    projects: [
      {
        title: "هوية بصرية — مشروع 01",
        tags: "هوية بصرية، تصميم مطبوعات",
        desc: "وصف مختصر يشرح فكرة المشروع والحل البصري الذي قدّمته. عدّل هذا النص والصور من content.js.",
        gallery: [
          "linear-gradient(135deg,#9F1F63,#1a0d14)",
          "linear-gradient(135deg,#D91B5C,#1a0d14)",
          "linear-gradient(135deg,#F7941E,#1a0d14)",
          "linear-gradient(135deg,#7A1750,#1a0d14)"
        ]
      },
      {
        title: "حملة مطبوعة — مشروع 02",
        tags: "تصميم إعلانات، طباعة",
        desc: "وصف مختصر يشرح فكرة المشروع والحل البصري الذي قدّمته. عدّل هذا النص والصور من content.js.",
        gallery: [
          "linear-gradient(135deg,#F7941E,#1a0d14)",
          "linear-gradient(135deg,#9F1F63,#1a0d14)",
          "linear-gradient(135deg,#D91B5C,#1a0d14)"
        ]
      }
    ],

    // شذرات/أعمال سريعة بأسلوب "القطع الفنية" — شبكة صغيرة متنوعة أسفل الصفحة
    artifacts: [
      { icon: "🎨", caption: "شعار مطبوع بأسلوب تجريبي." },
      { icon: "📐", caption: "استكشاف بصري لهوية غير منشورة." },
      { icon: "🖋️", caption: "خط يد مخصّص لمشروع شخصي." },
      { icon: "🗞️", caption: "تصميم غلاف مطبوعة." },
      { icon: "🏷️", caption: "بطاقة عمل مصمَّمة يدويًا." },
      { icon: "🖼️", caption: "ملصق لأحد الفعاليات." }
    ],

    closing: "شكرًا لزيارة هذا الجزء من أعمالي."
  }
};
