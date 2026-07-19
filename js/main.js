/* =========================================================
   منطق الموقع — لا تحتاج تعديل هذا الملف عادةً
   كل التخصيص بيتم من js/content.js
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const c = siteContent;

  /* ---------- نص عام (data-content) ---------- */
  document.querySelectorAll('[data-content]').forEach(el => {
    const key = el.getAttribute('data-content');
    if (c[key] !== undefined) el.textContent = c[key];
  });

  /* ---------- خصائص/روابط (data-content-attr="key:attr") ---------- */
  document.querySelectorAll('[data-content-attr]').forEach(el => {
    const [key, attr] = el.getAttribute('data-content-attr').split(':');
    if (c[key] !== undefined) el.setAttribute(attr, c[key]);
  });

  document.title = c.pageTitle;

  /* ---------- أنيميشن كتابة العناوين الوظيفية ---------- */
  const roleEl = document.getElementById('roleTyper');
  if (roleEl && c.roles && c.roles.length) {
    let roleIndex = 0, charIndex = 0, deleting = false;
    const typeSpeed = 90, deleteSpeed = 45, holdTime = 1400;

    function tick() {
      const word = c.roles[roleIndex];
      if (!deleting) {
        charIndex++;
        roleEl.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          setTimeout(tick, holdTime);
          return;
        }
      } else {
        charIndex--;
        roleEl.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % c.roles.length;
        }
      }
      setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    }
    tick();
  }

  /* ---------- الإحصائيات ---------- */
  const statsGrid = document.getElementById('statsGrid');
  if (statsGrid && c.stats) {
    statsGrid.innerHTML = c.stats.map(s => `
      <div class="stat">
        <div class="stat__num">${s.num}</div>
        <div class="stat__label">${s.label}</div>
      </div>
    `).join('');
  }

  /* ---------- الأسواق ---------- */
  const marketsRow = document.getElementById('marketsRow');
  if (marketsRow && c.markets) {
    marketsRow.innerHTML = c.markets.map(m => `<span class="market-chip">${m}</span>`).join('');
  }

  /* ---------- الخدمات ---------- */
  const servicesGrid = document.getElementById('servicesGrid');
  if (servicesGrid && c.services) {
    servicesGrid.innerHTML = c.services.map(s => `
      <a href="works.html?cat=${encodeURIComponent(s.slug)}" class="service-card reveal">
        <div class="service-card__tag">${s.tag}</div>
        <div class="service-card__icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <span class="service-card__more">شاهد أعمال هذا القسم ←</span>
      </a>
    `).join('');
  }

  /* ---------- استخراج معرّف فيديو يوتيوب (يُستخدم في الصورة المصغّرة وفي المشغّل) ---------- */
  function getYouTubeId(url) {
    if (!url) return null;
    try {
      const u = new URL(url, window.location.href);
      if (u.hostname.includes('youtu.be')) return u.pathname.slice(1) || null;
      if (u.hostname.includes('youtube.com')) {
        if (u.pathname.startsWith('/embed/')) return u.pathname.split('/').pop();
        return u.searchParams.get('v') || null;
      }
    } catch (e) { /* رابط غير صالح */ }
    return null;
  }

  /* ---------- بناء كرت عمل واحد (يُستخدم في الصفحة الرئيسية وصفحة الأعمال المفلترة) ---------- */
  function renderWorkCard(w) {
    const ytId = getYouTubeId(w.videoLink);
    // إن وُجد رابط يوتيوب صالح، تُستخدم الصورة المصغّرة الحقيقية للفيديو بدل التدرّج اللوني
    const thumbStyle = ytId
      ? `background-image:url('https://img.youtube.com/vi/${ytId}/hqdefault.jpg'); background-size:cover; background-position:center;`
      : `background:${w.gradient}`;
    return `
      <div class="work-card reveal">
        <div class="work-card__thumb" data-video="${w.videoLink || ''}" style="${thumbStyle}" role="button" tabindex="0" aria-label="تشغيل فيديو: ${w.title}">
          <span class="work-card__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M20 4v16l-16-8z"/></svg>
          </span>
        </div>
        <div class="work-card__body">
          <h3>${w.title}</h3>
          <p>${w.desc}</p>
        </div>
      </div>
    `;
  }

  /* ---------- الأعمال (الصفحة الرئيسية) ---------- */
  const workGrid = document.getElementById('workGrid');
  if (workGrid && c.work) {
    workGrid.innerHTML = c.work.map(renderWorkCard).join('');
  }

  /* ---------- صفحة الأعمال المفلترة حسب القسم (works.html?cat=slug) ---------- */
  const categoryGrid = document.getElementById('categoryWorkGrid');
  if (categoryGrid && c.work && c.services) {
    const params = new URLSearchParams(window.location.search);
    const activeSlug = params.get('cat');
    const activeService = c.services.find(s => s.slug === activeSlug);

    // شريط تصفية بكل الأقسام أعلى الصفحة، مع تمييز القسم الحالي
    const chipsEl = document.getElementById('categoryChips');
    if (chipsEl) {
      chipsEl.innerHTML = c.services.map(s => `
        <a href="works.html?cat=${encodeURIComponent(s.slug)}" class="category-chip${s.slug === activeSlug ? ' is-active' : ''}">${s.icon} ${s.title}</a>
      `).join('') + `<a href="works.html" class="category-chip${!activeSlug ? ' is-active' : ''}">🗂️ كل الأعمال</a>`;
    }

    const titleEl = document.getElementById('categoryTitle');
    const descEl = document.getElementById('categoryDesc');
    if (activeService) {
      if (titleEl) titleEl.textContent = activeService.title;
      if (descEl) descEl.textContent = activeService.desc;
    } else {
      if (titleEl) titleEl.textContent = 'كل الأعمال';
      if (descEl) descEl.textContent = 'كل المشاريع المعروضة في المعرض، من كل الأقسام.';
    }

    const filtered = activeSlug ? c.work.filter(w => w.category === activeSlug) : c.work;
    categoryGrid.innerHTML = filtered.length
      ? filtered.map(renderWorkCard).join('')
      : `<p class="category-empty">لا توجد أعمال مضافة في هذا القسم بعد.</p>`;
  }

  /* ---------- العملاء (ماركيه بتكرار مزدوج للحركة السلسة) ---------- */
  const clientsTrack = document.getElementById('clientsTrack');
  if (clientsTrack && c.clients) {
    const chips = c.clients.map(client => `
      <span class="client-chip">
        <img src="${client.logo}" alt="${client.name}" loading="lazy">
      </span>
    `).join('');
    clientsTrack.innerHTML = chips + chips;
  }

  /* ---------- أيقونات السوشيال ميديا ---------- */
  const socialIcons = {
    linkedin: '<svg viewBox="0 0 24 24" width="17" height="17"><path fill="currentColor" d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.67V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.2-1.77 3.43 0 4.06 2.26 4.06 5.2V20z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" width="17" height="17"><path fill="currentColor" d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.2 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5.01-4.74.07-.98.04-1.5.2-1.86.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.36-.3.88-.34 1.86-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.04.98.2 1.5.34 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.14.88.3 1.86.34 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.98-.04 1.5-.2 1.86-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.36.3-.88.34-1.86.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.04-.98-.2-1.5-.34-1.86a3.1 3.1 0 00-.75-1.15 3.1 3.1 0 00-1.15-.75c-.36-.14-.88-.3-1.86-.34-1.24-.06-1.6-.07-4.74-.07zm0 3.7a4.3 4.3 0 110 8.6 4.3 4.3 0 010-8.6zm0 1.8a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5.47-1.99a1 1 0 110 2 1 1 0 010-2z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" width="17" height="17"><path fill="currentColor" d="M16.6 2h-3.1v13.6a2.9 2.9 0 11-2.06-2.78V9.6a6.1 6.1 0 104.16 5.79V8.14a7.6 7.6 0 004.4 1.4V6.4a4.5 4.5 0 01-3.4-4.4z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" width="17" height="17"><path fill="currentColor" d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 00-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 00-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.7.9 1.4 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 002-2c.4-1.5.4-4.7.4-4.7zM10 15.2V8.8L15.5 12 10 15.2z"/></svg>',
    behance: '<svg viewBox="0 0 24 24" width="17" height="17"><path fill="currentColor" d="M7.8 7c1.9 0 3 1.1 3 2.7 0 1-.4 1.7-1.2 2.2 1.1.4 1.7 1.3 1.7 2.6 0 1.9-1.4 3-3.5 3H3V7h4.8zm-.4 4.2c.9 0 1.4-.4 1.4-1.2s-.5-1.2-1.4-1.2H5.4v2.4h2zm.2 4.3c1 0 1.5-.5 1.5-1.3 0-.9-.6-1.3-1.6-1.3H5.4v2.6h2.2zM17.9 9c2.2 0 3.7 1.5 3.8 3.7v.6h-5.9c.1 1.2.9 1.9 2 1.9.8 0 1.4-.3 1.7-.9h2c-.5 1.6-1.9 2.6-3.7 2.6-2.4 0-4-1.6-4-4s1.6-3.9 4.1-3.9zm-2 3.1h3.7c-.1-1-.8-1.7-1.8-1.7-1 0-1.7.6-1.9 1.7zM15.7 7.3h4.6v1.2h-4.6z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="17" height="17"><path fill="currentColor" d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.34C16.2 4.3 15.2 4.2 14 4.2c-2.4 0-4 1.47-4 4.16V10.5H7.5v3H10V21h3.5z"/></svg>'
  };
  const socialsRow = document.getElementById('socialsRow');
  if (socialsRow && c.socials) {
    socialsRow.innerHTML = Object.entries(c.socials)
      .filter(([, url]) => url)
      .map(([key, url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${key}">${socialIcons[key] || ''}</a>`)
      .join('');
  }

  /* ---------- سنة حقوق النشر ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- قائمة الجوال ---------- */
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', false);
    }));
  }

  /* ---------- تشغيل الفيديو داخل الكرت نفسه مباشرة (بدون نافذة منبثقة) ---------- */
  function playInlineVideo(thumb) {
    const link = thumb.getAttribute('data-video');
    const ytId = getYouTubeId(link);
    if (!ytId) {
      // رابط غير صالح كفيديو يوتيوب — نفتحه في تبويب جديد كحل احتياطي
      if (link) window.open(link, '_blank', 'noopener');
      return;
    }
    thumb.innerHTML = `<iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0" title="مشغّل الفيديو" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    thumb.classList.add('is-playing');
  }

  document.querySelectorAll('.work-card__thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      if (thumb.classList.contains('is-playing')) return; // الفيديو شغّال بالفعل
      playInlineVideo(thumb);
    });
    thumb.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!thumb.classList.contains('is-playing')) playInlineVideo(thumb);
      }
    });
  });

  /* ---------- ظهور تدريجي عند التمرير ---------- */
  const revealTargets = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealTargets.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in-view'));
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- عدّاد متحرك للإحصائيات عند ظهورها ---------- */
  if (statsGrid && !prefersReducedMotion) {
    const numEls = statsGrid.querySelectorAll('.stat__num');
    const countUp = (el) => {
      const raw = el.textContent.trim();
      const match = raw.match(/^(\D*)(\d+)(\D*)$/); // بادئة غير رقمية، رقم، لاحقة غير رقمية
      if (!match) return;
      const [, prefix, digits, suffix] = match;
      const target = parseInt(digits, 10);
      const duration = 1200;
      const start = performance.now();
      function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    };
    if ('IntersectionObserver' in window) {
      const statIo = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            countUp(entry.target);
            statIo.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      numEls.forEach(el => statIo.observe(el));
    }
  }

  /* ---------- ميل خفيف للكروت عند تحريك الفأرة (تفاعل معاصر) ---------- */
  if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.service-card, .work-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        if (card.querySelector('.work-card__thumb.is-playing')) return; // لا تميل الكرت أثناء تشغيل الفيديو
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(600px) rotateX(${py * -6}deg) rotateY(${px * 6}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  /* ---------- تمييز رابط القسم الحالي في القائمة أثناء التمرير ---------- */
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  const sections = Array.from(navLinks)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const spyIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(sec => spyIo.observe(sec));
  }

  const hoverCapable = window.matchMedia('(hover: hover)').matches;

  /* ---------- توهّج يتبع الفأرة داخل الهيرو ---------- */
  const heroGlow = document.getElementById('heroGlow');
  const heroSection = document.querySelector('.hero');
  if (heroGlow && heroSection && !prefersReducedMotion && hoverCapable) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      heroGlow.style.setProperty('--gx', `${e.clientX - rect.left}px`);
      heroGlow.style.setProperty('--gy', `${e.clientY - rect.top}px`);
    });
  }

  /* ---------- أزرار "مغناطيسية" تنجذب قليلًا نحو الفأرة ---------- */
  if (!prefersReducedMotion && hoverCapable) {
    document.querySelectorAll('.btn--primary').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const mx = (e.clientX - rect.left - rect.width / 2) * 0.25;
        const my = (e.clientY - rect.top - rect.height / 2) * 0.35;
        btn.style.transform = `translate(${mx}px, ${my}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  /* ---------- شريط التقدّم أثناء التمرير (تُستخدم نفس مساحة شريط التايم كود العلوي) ---------- */
  const timecodeTrack = document.querySelector('.timecode-strip__track');
  if (timecodeTrack) {
    const updateScrollProgress = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      timecodeTrack.style.setProperty('--scroll-progress', `${progress}%`);
    };
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();
  }
});
