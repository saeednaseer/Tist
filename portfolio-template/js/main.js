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
      <div class="service-card">
        <div class="service-card__tag">${s.tag}</div>
        <div class="service-card__icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  /* ---------- الأعمال ---------- */
  const workGrid = document.getElementById('workGrid');
  if (workGrid && c.work) {
    workGrid.innerHTML = c.work.map(w => `
      <div class="work-card">
        <div class="work-card__thumb" style="background:${w.gradient}">
          <span class="work-card__code">${w.code}</span>
          <span class="work-card__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M20 4v16l-16-8z"/></svg>
          </span>
        </div>
        <div class="work-card__body">
          <h3>${w.title}</h3>
          <p>${w.desc}</p>
        </div>
      </div>
    `).join('');
  }

  /* ---------- العملاء (ماركيه بتكرار مزدوج للحركة السلسة) ---------- */
  const clientsTrack = document.getElementById('clientsTrack');
  if (clientsTrack && c.clients) {
    const chips = c.clients.map(name => `<span class="client-chip">${name}</span>`).join('');
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
});
