/* ============================================================
   js/store.js — Dzemal Crnkic
   Renders the featured album card (Dino Merlin style),
   the releases grid, and the store tab products.
   All data comes from data/songs.js — edit that file only.
   ============================================================ */


/* ── FEATURED ALBUM CARD ── */
function renderFeaturedAlbum() {
  const container = document.getElementById('featuredAlbum');
  if (!container || typeof ALBUMS === 'undefined' || !ALBUMS.length) return;

  const album = ALBUMS[0]; // Always feature the first (latest) album

  /* Artwork */
  const artHTML = `
    <div class="fa-art-col">
      <img
        src="${album.artwork}"
        alt="${album.title}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
      />
      <div class="fa-art-placeholder" style="display:none">
        <span>🎵</span>
        <p>Save album art as<br><strong>${album.artwork}</strong></p>
      </div>
      <span class="fa-year-badge">${album.year}</span>
    </div>`;

  /* Streaming / listen-on links */
  const linksHTML = album.streamLinks && album.streamLinks.length
    ? album.streamLinks.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener" class="fa-link">
          ${link.icon ? `<span>${link.icon}</span>` : ''}
          ${link.label}
        </a>`).join('')
    : '';

  /* Buy buttons */
  const buyHTML = album.formats.map(f => `
    <a href="${f.stripeLink}" target="_blank" rel="noopener" class="fa-buy-btn">
      <span class="fa-buy-format">${f.type}</span>
      <span class="fa-buy-price"><sup>$</sup>${f.price}</span>
      <span class="fa-buy-desc">${f.description}</span>
    </a>`).join('');

  /* Songs tab content */
  const songsHTML = album.trackList.map((track, i) => {
    const song    = (typeof SONGS !== 'undefined')
      ? SONGS.find(s => s.title === track)
      : null;
    const ytBtn   = song && song.youtubeId
      ? `<a href="https://www.youtube.com/watch?v=${song.youtubeId}"
            target="_blank" rel="noopener" class="fa-song-yt"
            onclick="event.stopPropagation()" aria-label="Watch on YouTube">
           ▶
         </a>`
      : '';
    return `
      <li class="fa-song-item">
        <span class="fa-song-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="fa-song-title">${track}</span>
        ${ytBtn}
      </li>`;
  }).join('');

  /* Lyrics tab content */
  const lyricsHTML = album.trackList.map((track, i) => {
    const song = (typeof SONGS !== 'undefined')
      ? SONGS.find(s => s.title === track)
      : null;
    const lyrics = song ? song.lyrics : 'Lyrics coming soon.';
    const songId = song ? song.id : i;
    return `
      <li class="fa-lyric-item" id="fa-lyric-${songId}">
        <div class="fa-lyric-header" data-fid="${songId}">
          <span class="fa-lyric-num">${String(i + 1).padStart(2, '0')}</span>
          <span class="fa-lyric-title">${track}</span>
          <span class="fa-lyric-chevron">▼</span>
        </div>
        <div class="fa-lyric-text-wrap">
          <div class="fa-lyric-text">${lyrics}</div>
        </div>
      </li>`;
  }).join('');

  container.innerHTML = `
    ${artHTML}
    <div class="fa-info-col">
      <h2 class="fa-title">${album.title}</h2>
      <p class="fa-artist">${album.artist}</p>

      ${linksHTML ? `
      <div class="fa-links">
        <span class="fa-links-label">Listen on</span>
        ${linksHTML}
      </div>` : ''}

      <div class="fa-buy-row">
        ${buyHTML}
      </div>

      <div class="fa-tabs" role="tablist">
        <button class="fa-tab active" data-fatab="songs"  role="tab" aria-selected="true">Songs</button>
        <button class="fa-tab"         data-fatab="lyrics" role="tab" aria-selected="false">Lyrics</button>
      </div>

      <div class="fa-tab-content active" id="fa-content-songs">
        <ul class="fa-song-list">${songsHTML}</ul>
      </div>
      <div class="fa-tab-content" id="fa-content-lyrics">
        <ul class="fa-lyrics-list">${lyricsHTML}</ul>
      </div>
    </div>`;

  /* Attach inner tab handlers */
  container.querySelectorAll('.fa-tab').forEach(btn => {
    btn.addEventListener('click', function () {
      container.querySelectorAll('.fa-tab').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      container.querySelectorAll('.fa-tab-content').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      document.getElementById('fa-content-' + this.dataset.fatab).classList.add('active');
    });
  });

  /* Attach lyric expand handlers */
  container.querySelectorAll('.fa-lyric-header').forEach(header => {
    header.addEventListener('click', function () {
      const item = document.getElementById('fa-lyric-' + this.dataset.fid);
      if (item) item.classList.toggle('open');
    });
  });
}


/* ── RELEASES GRID ── */
function renderReleasesGrid() {
  const container = document.getElementById('releasesGrid');
  if (!container || typeof ALBUMS === 'undefined') return;

  container.innerHTML = ALBUMS.map(album => `
    <div class="release-card" title="${album.title}">
      <div class="release-card-art">
        <img
          src="${album.artwork}"
          alt="${album.title}"
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        />
        <div class="release-card-art-placeholder" style="display:none">🎵</div>
      </div>
      <p class="release-card-year">${album.year}</p>
      <p class="release-card-title">${album.title}</p>
    </div>
  `).join('');
}


/* ── STORE PRODUCTS GRID ── */
function renderStore() {
  const container = document.getElementById('storeGrid');
  if (!container || typeof STORE_PRODUCTS === 'undefined') return;

  container.innerHTML = STORE_PRODUCTS.map(product => `
    <div class="store-card">
      <div class="store-card-img">${product.emoji}</div>
      <div class="store-card-body">
        <h3 class="store-card-name">${product.name}</h3>
        <p class="store-card-desc">${product.description}</p>
        <p class="store-card-price"><sup>$</sup>${product.price}</p>
        <a
          href="${product.stripeLink}"
          target="_blank"
          rel="noopener"
          class="btn-gold"
          style="width:100%;text-align:center;display:block;"
        >Buy Now — $${product.price}</a>
      </div>
    </div>
  `).join('');
}


/* ── INIT ── */
document.addEventListener('DOMContentLoaded', function () {
  renderFeaturedAlbum();
  renderReleasesGrid();
  renderStore();
});
