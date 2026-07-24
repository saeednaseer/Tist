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
  // featured: true → يظهر في "شاهد أعمالي" بالصفحة الرئيسية (الصفحة الرئيسية تعرض أول 8 فقط، بحد أقصى)
  // تنبيه: راجع رسالتي — كل الأعمال حاليًا featured:true، ما يخلي تنوع الأقسام يظهر بالرئيسية
  // كل عمل يظهر دائمًا في صفحة قسمه بـ works.html بغض النظر عن featured
  // videoLink: يدعم روابط الفيديو العادية، وأيضًا روابط قوائم التشغيل (playlist)
  work: [
    { category: "drone",           featured: true, title: "تصوير عقاري بالدرون",  desc: "توثيق جوي لمشروع مستودعات.",              gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://youtu.be/CDRoJKS6KUc" },
    { category: "drone",           featured: false, title: "تصوير عقاري بالدرون",  desc: "توثيق اعلان لإستراحة للبيع.",              gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://youtu.be/pBSVYD4oJXM" },
    { category: "drone",           featured: true, title: "برنامج خريف حوف | تصوير جوي بالدرون",  desc: "برنامج خريف حوف، يوثق المشاهد الطبيعية الخلابة من منظور جوي يبرز جمال المكان وتفاصيله.",              gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://youtu.be/f0BMxUHZ3rg?si=FzWi1cXwEDX_tXbs" },
    { category: "drone",           featured: false, title: "على خطى المحضار | تصوير جوي بالدرون",  desc: "عمل يوثق المسيرة الفنية للفنان حسين أبو بكر المحضار، من خلال لقطات جوية استعرضت أبرز المناطق التي تغنى بها وألهمت أعماله.",              gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=4D01Br4q8ZY&list=PLZz0Fdf56G7RMz39OW8DYBDI7e0ew5cSy&index=8" },
    { category: "drone",           featured: false, title: "برنامج نجم البدلة | تصوير جوي بالدرون",  desc: "عمل يوثق سواحل حضرموت بلقطات جوية احترافية، ويستعرض التجارب السياحية والحياة اليومية للسكان.",              gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://youtu.be/pBSVYD4oJXM" },
    { category: "drone",           featured: false, title: "إعلان قاعة أفراح | التصوير السينمائي",  desc: "تنفيذ تصوير احترافي لإعلان ترويجي يبرز هوية القاعة، تفاصيلها، والأجواء المميزة للمناسبات.",              gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=jRrol528fCQ" },

    { category: "montage",         featured: true, title: "الذاكرة الحضرمية | مونتاج",         desc: "مونتاج برنامج يوثق العادات والتقاليد الحضرمية في رمضان، ويبرز الموروث الثقافي بأسلوب بصري متناسق وجذاب.",      gradient: "linear-gradient(135deg,#D91B5C,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=4Tg4lNx5Fi0" },
    { category: "montage",         featured: true, title: "قصة نجاح | براند حواج",         desc: "مونتاج تقرير يوثق قصة نجاح براند حواج، بأسلوب بصري يبرز رحلة العلامة التجارية، وإنجازاتها، وتأثيرها في السوق.",      gradient: "linear-gradient(135deg,#D91B5C,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=iq0DZSrf1vo" },

    { category: "real-estate",     featured: true, title: "جولة عقارية كاملة",    desc: "تغطية شاملة لوحدة سكنية من الداخل والخارج.", gradient: "linear-gradient(135deg,#7A1F4F,#0E0E10)", videoLink: "https://youtu.be/vWaPPHRjxgg" },
    { category: "real-estate",     featured: true, title: "إعلان للإيجار | تصوير ومونتاج",    desc: "تصوير ومونتاج إعلان احترافي يبرز مميزات المستودعات وجاهزيتها للإيجار.", gradient: "linear-gradient(135deg,#7A1F4F,#0E0E10)", videoLink: "https://youtu.be/xrvaOONTjOg" },

    { category: "logo-animation",  featured: true, title: "تحريك شعار | أستديو مسهور (الإصدار الأول)",          desc: "تنفيذ موشن جرافيك لشعار أستديو مسهور بأسلوب احترافي يعكس هوية البرنامج ويمنحه حضورًا بصريًا مميزًا.",        gradient: "linear-gradient(135deg,#7A1750,#0E0E10)", videoLink: "https://youtu.be/l5TJtVsIVoI" },
    { category: "logo-animation",  featured: true, title: "تحريك شعار | برنامج أستديو (الإصدار الثاني)",          desc: "نسخة حديثة لتحريك شعار أستديو مسهور، بتصميم حركي مختلف يواكب هوية البرنامج ويضيف لمسة بصرية متجددة.",        gradient: "linear-gradient(135deg,#7A1750,#0E0E10)", videoLink: "https://youtu.be/T0qjO2n1MD4" },
    { category: "logo-animation",  featured: true, title: "تحريك شعار | تلفزيون حضرموت",          desc: "تصميم وتنفيذ موشن جرافيك لشعار تلفزيون حضرموت، بأسلوب احترافي يعزز الهوية البصرية ويمنح الشعار حركة عصرية وجذابة.",        gradient: "linear-gradient(135deg,#7A1750,#0E0E10)", videoLink: "https://youtu.be/gzU9MwPhWoI" },

    { category: "tv-programs",     featured: true, title: "برنامج أرياف | تصوير", desc: "تصوير سلسلة وثائقية من 10 حلقات تستعرض أرياف ساحل حضرموت، وتبرز جمال الطبيعة والحياة الريفية.",       gradient: "linear-gradient(135deg,#B0195C,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=MVmPv1dS6no&list=PLV8U2ls1d3amibuUTwOtYJuw2pX3722V9" },
    { category: "tv-programs",     featured: true, title: "أنشودة ميزنا الله | تصوير", desc: "تنفيذ التصوير لأنشودة «ميزنا الله» بأسلوب بصري يعزز الرسالة ويبرز المشاهد بإخراج متناسق وجودة احترافية.",       gradient: "linear-gradient(135deg,#B0195C,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=MKKHxBMYhO8" }
  ],

  // -------- العملاء --------
  // تنبيه: تأكد من رفع 35 ملف بنفس هذه الأسماء بالظبط (1.png إلى 35.png) داخل images/clients/
  clients: [
    { name: "عميل 01", logo: "images/clients/1.png" },
    { name: "عميل 02", logo: "images/clients/2.png" },
    { name: "عميل 03", logo: "images/clients/3.png" },
    { name: "عميل 04", logo: "images/clients/4.png" },
    { name: "عميل 05", logo: "images/clients/5.png" },
    { name: "عميل 06", logo: "images/clients/6.png" },
    { name: "عميل 07", logo: "images/clients/7.png" },
    { name: "عميل 08", logo: "images/clients/8.png" },
    { name: "عميل 09", logo: "images/clients/9.png" },
    { name: "عميل 10", logo: "images/clients/10.png" },
    { name: "عميل 11", logo: "images/clients/11.png" },
    { name: "عميل 12", logo: "images/clients/12.png" },
    { name: "عميل 13", logo: "images/clients/13.png" },
    { name: "عميل 14", logo: "images/clients/14.png" },
    { name: "عميل 15", logo: "images/clients/15.png" },
    { name: "عميل 16", logo: "images/clients/16.png" },
    { name: "عميل 17", logo: "images/clients/17.png" },
    { name: "عميل 18", logo: "images/clients/18.png" },
    { name: "عميل 19", logo: "images/clients/19.png" },
    { name: "عميل 20", logo: "images/clients/20.png" },
    { name: "عميل 21", logo: "images/clients/21.png" },
    { name: "عميل 22", logo: "images/clients/22.png" },
    { name: "عميل 23", logo: "images/clients/23.png" },
    { name: "عميل 24", logo: "images/clients/24.png" },
    { name: "عميل 25", logo: "images/clients/25.png" },
    { name: "عميل 26", logo: "images/clients/26.png" },
    { name: "عميل 27", logo: "images/clients/27.png" },
    { name: "عميل 28", logo: "images/clients/28.png" },
    { name: "عميل 29", logo: "images/clients/29.png" },
    { name: "عميل 30", logo: "images/clients/30.png" },
    { name: "عميل 31", logo: "images/clients/31.png" },
    { name: "عميل 32", logo: "images/clients/32.png" },
    { name: "عميل 33", logo: "images/clients/33.png" },
    { name: "عميل 34", logo: "images/clients/34.png" },
    { name: "عميل 35", logo: "images/clients/35.png" }
  ],

  // -------- تواصل --------
  contactTitle: "لنبدأ مشروعك القادم",
  contactText: "عندك عقار، حدث، أو فكرة تحتاج محتوى مرئي احترافي؟ تواصل معي لنحوّلها إلى عمل جاهز للنشر.",
  whatsappLink: "https://wa.me/966510798388",

  // -------- الفوتر --------
  // تنبيه: صححت الصفر الزائد هنا ليطابق رقم واتساب أعلاه بالظبط — راجع رسالتي
  footerTagline: "مصور درون ومونتير، متخصص في الإنتاج العقاري والتصميم الجرافيكي.",
  phoneDisplay: "+966 51 079 8388",
  email: "snb135@hotmail.com",
  emailLink: "mailto:snb135@hotmail.com",

  // روابط السوشيال ميديا — اترك أي رابط فارغًا "" إن لم ترغب بظهور أيقونته
  // تنبيه: linkedin و facebook لسه placeholder — راجع رسالتي
  socials: {
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/s.n.b1",
    tiktok: "https://tiktok.com/@s.n.b135",
    youtube: "https://youtube.com/@SNBMontage",
    behance: "https://behance.net/snb_135",
    facebook: "https://facebook.com/username"
  },

  // -------- صفحة "تصميم جرافيك" — أسلوب تحريري مستقل (مستوحى من vanschneider.com) --------
  graphicDesignPage: {
    eyebrow: "استوديو التصميم",
    statement: "أصمم؛ إذن أنا موجود",
    subStatement: "تصميم جرافيك — منذ 2015",
    intro: "أنا سعيد ناصر، إلى جانب الفيديو والدرون، أصمم هويات بصرية ومطبوعات ومحتوى جرافيكي يحمل بصمة واضحة. هذا النص Placeholder — عدّله من content.js ليحكي أسلوبك الخاص في التصميم.",
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
          "url('images/clients/1.png')",
          "linear-gradient(135deg,#9F1F63,#1a0d14)",
          "linear-gradient(135deg,#D91B5C,#1a0d14)"
        ]
      }
    ],
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
