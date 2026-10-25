/* ============================================================
   js/main.js — Dzemal Crnkic

   TABLE OF CONTENTS:
   1. Tab Navigation
   2. Mobile Menu
   3. YouTube Video Grid
   4. Contact Form Success State
   5. data-tab Link Handler
   6. Photo Error Handler
   7. Render Services
   8. Init
   ============================================================ */


/* ── 1. TAB NAVIGATION ── */
function initTabs() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.tab-section');

  function switchTab(tabName) {
    sections.forEach(s => s.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));

    const target = document.getElementById('tab-' + tabName);
    if (target) target.classList.add('active');

    const activeLink = document.querySelector(`.nav-link[data-tab="${tabName}"]`);
    if (activeLink) activeLink.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '#' + tabName);
    closeMobileMenu();
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      switchTab(this.dataset.tab);
    });
  });

  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById('tab-' + hash)) {
    switchTab(hash);
  }

  window.switchTab = switchTab;
}


/* ── 2. MOBILE MENU ── */
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('siteNav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
}

function closeMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('siteNav');
  if (nav) nav.classList.remove('open');
  if (btn) { btn.classList.remove('open'); btn.setAttribute('aria-label', 'Open menu'); }
}


/* ── 3. YOUTUBE VIDEO GRID ── */
function renderYouTubeGrid() {
  const container = document.getElementById('ytGrid');
  if (!container || typeof SONGS === 'undefined') return;

  const withVideo = SONGS.filter(s => s.youtubeId);

  if (withVideo.length === 0) {
    container.innerHTML = `
      <p style="color:var(--muted);font-size:0.88rem;grid-column:1/-1;padding:1.5rem 0;">
        Videos will appear here once you add YouTube IDs to data/songs.js
      </p>`;
    return;
  }

  container.innerHTML = withVideo.map(song => {
    const thumb = `https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg`;
    return `
      <a href="https://www.youtube.com/watch?v=${song.youtubeId}"
         target="_blank" rel="noopener"
         class="yt-card" aria-label="Watch ${song.title} on YouTube">
        <div class="yt-thumb">
          <img src="${thumb}" alt="${song.title}" loading="lazy" />
          <div class="yt-play-overlay">
            <div class="yt-play-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="yt-card-info">
          <p class="yt-card-title">${song.title}</p>
          <p class="yt-card-sub">Dzemal Crnkic · Watch on YouTube</p>
        </div>
      </a>`;
  }).join('');
}


/* ── 4. CONTACT FORM ── */
function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('contactSuccess');
  if (!form || !success) return;

  form.addEventListener('submit', function () {
    setTimeout(function () {
      form.style.display    = 'none';
      success.style.display = 'block';
    }, 600);
  });
}


/* ── 5. DATA-TAB LINK HANDLER ── */
function initTabLinks() {
  document.addEventListener('click', function (e) {
    const el = e.target.closest('[data-tab]');
    if (!el) return;
    if (el.classList.contains('nav-link')) return;

    if (el.classList.contains('site-logo')) {
      e.preventDefault();
      window.switchTab('home');
      return;
    }

    const tab = el.dataset.tab;
    if (tab && window.switchTab) {
      e.preventDefault();
      window.switchTab(tab);
    }
  });
}


/* ── 6. PHOTO ERROR HANDLER ── */
function initPhotoFallback() {
  const photo = document.getElementById('aboutPhoto');
  const wrap  = document.getElementById('aboutPhotoWrap');
  if (!photo || !wrap) return;

  photo.addEventListener('error', function () { wrap.classList.add('no-photo'); });
  if (photo.complete && photo.naturalWidth === 0) { wrap.classList.add('no-photo'); }
}

/* ── 7. RENDER SERVICES ── */
function renderServices() {
  const el = document.getElementById('servicesGrid');
  if (!el || typeof SERVICES === 'undefined') return;
  el.innerHTML = SERVICES.map(s => `
    <div class="svc-card">
      <div class="svc-icon">${s.icon}</div>
      <h3 class="svc-name">${s.name}</h3>
      <p class="svc-desc">${s.desc}</p>
    </div>
  `).join('');
}


/* ── 8. INIT ── */
document.addEventListener('DOMContentLoaded', function () {
  initTabs();
  initMobileMenu();
  initTabLinks();
  renderYouTubeGrid();
  initContactForm();
  initPhotoFallback();
});
  