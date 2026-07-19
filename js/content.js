/* =========================================================
   محتوى الموقع — عدّل هنا فقط
   كل النصوص، الأرقام، الروابط، والصور تُدار من هذا الملف
   لن تحتاج تلمس index.html أو style.css من أجل تغيير المحتوى
========================================================= */
const siteContent = {

  // -------- بيانات عامة --------
  pageTitle: "سعيد ناصر | مصور درون ومونتاج ومنتج عقاري",
  pageDescription: "تصوير درون، مونتاج، إنتاج عقاري، موشن جرافيك، تحريك شعارات، وتصوير برامج تلفزيونية.",
  fullName: "سعيد ناصر",
  experienceBadge: "+10 سنوات خبرة",

  // العناوين الوظيفية اللي تتبدّل بأنيميشن الكتابة في الهيرو
  roles: ["مصور درون", "مونتير فيديو", "منتج عقاري", "مصمم موشن جرافيك"],

  bio: "أوثّق العقارات والمشاريع والبرامج التلفزيونية بعدسة الدرون وأدوات المونتاج والموشن جرافيك، وأحوّل الفكرة الخام إلى محتوى بصري جاهز للنشر.",

  // -------- الإحصائيات (شريط التايم كود) --------
  stats: [
    { num: "+600", label: "مشروع منجز" },
    { num: "+10",  label: "سنوات خبرة" },
    { num: "8",    label: "أسواق" },
    { num: "+150", label: "ساعة تصوير جوي" }
  ],

  // -------- الأسواق / الدول --------
  markets: ["مصر", "السعودية", "الإمارات", "الأردن", "عُمان", "الكويت"],

  // -------- نبذة --------
  aboutText: "أعمل في مجال الإنتاج المرئي منذ أكثر من 10 سنوات، بدأت بالمونتاج وتطوّرت لأشمل التصوير الجوي بالدرون والإنتاج العقاري والموشن جرافيك. أتعامل مع كل مشروع كقصة بصرية كاملة، من اللقطة الأولى إلى الإخراج النهائي، بأسلوب يحافظ على جودة المحتوى وسرعة التسليم.",

  // -------- الخدمات --------
  // slug: يُستخدم للربط بصفحة أعمال هذا القسم تحديدًا (works.html?cat=slug)
  // لازم يطابق حقل "category" في عناصر مصفوفة work بالأسفل
  servicesIntro: "خدمات إنتاج مرئي متكاملة، من التصوير الجوي إلى المونتاج والإخراج النهائي.",
  services: [
    { slug: "drone",          tag: "01", icon: "🛸", title: "تصوير درون",            desc: "زوايا جوية سينمائية توثّق العقار أو الموقع من منظور مختلف تمامًا." },
    { slug: "montage",        tag: "02", icon: "✂️", title: "المونتاج",               desc: "تنظيم اللقطات وضبط الإيقاع لتخرج القصة بصورتها النهائية الاحترافية." },
    { slug: "real-estate",    tag: "03", icon: "🏠", title: "الإنتاج العقاري",         desc: "تغطية متكاملة للوحدات العقارية بأسلوب بصري يسهّل على العميل اتخاذ القرار." },
    { slug: "motion-graphics",tag: "04", icon: "🎨", title: "موشن جرافيك",             desc: "تحويل المعلومات والأفكار إلى رسائل بصرية بسيطة تصل بسرعة ووضوح." },
    { slug: "logo-animation", tag: "05", icon: "⚡", title: "تحريك الشعارات",          desc: "إعطاء الهوية البصرية حياة وحركة تترك انطباعًا أول قويًا واحترافيًا." },
    { slug: "tv-programs",    tag: "06", icon: "📺", title: "تصوير البرامج التلفزيونية", desc: "تغطية كاملة للحلقات والبرامج التلفزيونية بجودة تصوير احترافية." }
  ],

  // -------- الأعمال / المعرض --------
  // category: لازم تطابق أحد قيم slug في مصفوفة services بالأعلى — بيها يتحدد في أي صفحة قسم يظهر هذا العمل
  // لون التدرّج يتحكم في خلفية الصورة المصغّرة (يُستخدم فقط إن لم تتوفر صورة مصغّرة حقيقية من رابط يوتيوب صالح)
  // videoLink: ضع هنا رابط فيديو يوتيوب — الفيديو يشتغل مباشرة داخل الكرت نفسه عند الضغط عليه، بدون نافذة منبثقة
  work: [
    { category: "drone",           title: "تصوير عقاري بالدرون",  desc: "توثيق جوي لمشروع سكني.",              gradient: "linear-gradient(135deg,#9F1F63,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    { category: "montage",         title: "مونتاج فيديو",         desc: "إعادة قص وتوليف لمقابلة تلفزيونية.",      gradient: "linear-gradient(135deg,#D91B5C,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    { category: "real-estate",     title: "جولة عقارية كاملة",    desc: "تغطية شاملة لوحدة سكنية من الداخل والخارج.", gradient: "linear-gradient(135deg,#7A1F4F,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    { category: "motion-graphics", title: "موشن جرافيك",         desc: "فيديو تعريفي بخدمات شركة.",              gradient: "linear-gradient(135deg,#F7941E,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    { category: "logo-animation",  title: "تحريك شعار",          desc: "هوية بصرية متحركة لعلامة تجارية.",        gradient: "linear-gradient(135deg,#7A1750,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    { category: "tv-programs",     title: "تغطية برنامج تلفزيوني", desc: "تصوير ومونتاج حلقة برنامج كامل.",       gradient: "linear-gradient(135deg,#B0195C,#0E0E10)", videoLink: "https://www.youtube.com/watch?v=XXXXXXXXXXX" }
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
  footerTagline: "مصور درون ومونتير، متخصص في الإنتاج العقاري والموشن جرافيك.",
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
  }
};
