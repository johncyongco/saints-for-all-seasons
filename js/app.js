/* ========================================
   Saints for All Seasons — Application
   ======================================== */

// ---- Utility Functions ---- //
function getSaint(id) { return SAINTS.find(s => s.id === id); }
function getSeason(id) { return SEASONS.find(s => s.id === id); }
function getBook(id) { return BOOKS.find(b => b.id === id); }
function getJournal(id) { return JOURNAL.find(j => j.id === id); }

function getRelatedSaints(seasonId) {
  return SAINTS.filter(s => s.relatedSeasons.includes(seasonId));
}

function getRelatedBooks(seasonId) {
  return BOOKS.filter(b => b.relatedSeasons.includes(seasonId));
}

function getRelatedJournal(seasonId) {
  return JOURNAL.filter(j => j.relatedSeasons.includes(seasonId));
}

function getBooksBySaint(saintId) {
  return BOOKS.filter(b => b.authorId === saintId);
}

function getSaintInitials(name) {
  return name.replace(/^St\.\s*/, '').split(' ').map(w => w[0]).join('').slice(0, 2);
}

function getAllSeasonsForPage() {
  return SEASONS;
}

// ---- Router ---- //
const router = {
  currentPage: 'home',
  currentDetail: null,

  navigate(page, detail = null) {
    this.currentPage = page;
    this.currentDetail = detail;
    window.scrollTo(0, 0);
    this.render();
    this.updateNav();
    closeMobileNav();
    // Update URL hash
    if (detail) {
      window.location.hash = `${page}/${detail}`;
    } else {
      window.location.hash = page;
    }
  },

  render() {
    const app = document.getElementById('app');
    switch (this.currentPage) {
      case 'home': app.innerHTML = renderHome(); break;
      case 'seasons': app.innerHTML = this.currentDetail ? renderSeasonDetail(this.currentDetail) : renderSeasons(); break;
      case 'saints': app.innerHTML = this.currentDetail ? renderSaintDetail(this.currentDetail) : renderSaints(); break;
      case 'library': app.innerHTML = this.currentDetail ? renderBookDetail(this.currentDetail) : renderLibrary(); break;
      case 'journal': app.innerHTML = this.currentDetail ? renderJournalArticle(this.currentDetail) : renderJournal(); break;
      case 'about': app.innerHTML = renderAbout(); break;
      default: app.innerHTML = renderHome();
    }
  },

  updateNav() {
    document.querySelectorAll('.nav__link').forEach(link => {
      link.classList.toggle('nav__link--active', link.dataset.page === this.currentPage);
    });
  }
};

function toggleMobileNav() {
  document.getElementById('navLinks').classList.toggle('nav__links--open');
}

function closeMobileNav() {
  document.getElementById('navLinks').classList.remove('nav__links--open');
}

// ---- Hash Routing ---- //
function handleHash() {
  const hash = window.location.hash.slice(1) || 'home';
  const parts = hash.split('/');
  router.navigate(parts[0], parts[1] || null);
}

window.addEventListener('hashchange', handleHash);

// ---- HOME PAGE ---- //
function renderHome() {
  const featuredSaints = SAINTS.slice(0, 4);
  const featuredBooks = BOOKS.slice(0, 4);
  const quoteOfTheWeek = SAINTS[0].quotes[0];

  return `
    <!-- Hero -->
    <section class="hero">
      <img class="hero__image" src="assets/images/hero.jpg" alt="Hero image">
      <div class="hero__overlay"></div>
      <div class="hero__content">
        <h1 style="color: #CBB794;">Saints for All Seasons</h1>
        <p class="hero__subtitle">Companions for every season of the spiritual life.</p>
        <p style="font-size:0.9rem; color: #fff; margin-bottom: 2rem; line-height: 1.7; max-width: 550px; margin-left:auto; margin-right:auto;">The saints did not merely leave us beautiful words. They left us maps through joy, suffering, temptation, prayer, and union with God. This archive seeks to preserve their wisdom in its original context so every soul may find guidance for every season of life.</p>
        <button class="btn" onclick="router.navigate('seasons')">Explore the Seasons →</button>
      </div>
    </section>

    <!-- Why This Archive Exists -->
    <section class="section">
      <div class="container">
        <div class="editorial">
          <img class="editorial__image" src="assets/images/vatican-library.jpg" alt="Renaissance painting of the Vatican Library">
          <div class="editorial__content">
            <h5>Why This Archive Exists</h5>
            <h2>Context, Not Just Quotes</h2>
            <p>In an age of decontextualized quotations, the wisdom of the saints is too often reduced to Instagram captions and inspirational posters. A single line from St. Augustine, stripped from the theological landscape that gives it meaning, becomes a greeting card rather than a transformative encounter with truth.</p>
            <p>The writings of the saints cannot be understood apart from Sacred Scripture, the Catechism of the Catholic Church, and the living Tradition that sustains them. Every quote in this archive is rooted in its historical context, its theological framework, and its practical application to the spiritual life.</p>
            <p>Every saint walked a different road to holiness. Their wisdom becomes our companion.</p>
            <button class="btn btn--gold" onclick="router.navigate('about')">Learn Our Methodology →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Browse by Season -->
    <section class="section" style="background: var(--paper); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
      <div class="container">
        <div class="section-header">
          <h5>Explore</h5>
          <h2>Browse by Season</h2>
          <p>Where are you on the journey? Find companions for your present season.</p>
        </div>
        <div class="grid-4">
          ${SEASONS.slice(0, 12).map(s => `
            <div class="season-card" onclick="router.navigate('seasons', '${s.id}')">
              <div class="season-card__title">${s.name}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Featured Saints -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h5>Companions</h5>
          <h2>Featured Saints</h2>
        </div>
        <div class="grid-4">
          ${featuredSaints.map(s => `
            <div class="image-card" onclick="router.navigate('saints', '${s.id}')">
              <img class="image-card__img" src="${s.portrait}" alt="${s.name}" loading="lazy">
              <div class="image-card__body">
                <div class="image-card__label">${s.century} Century</div>
                <div class="image-card__title">${s.name}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align:center; margin-top:2.5rem;">
          <button class="btn" onclick="router.navigate('saints')">View All Saints →</button>
        </div>
      </div>
    </section>

    <!-- Featured Spiritual Classics -->
    <section class="section" style="background: var(--paper); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
      <div class="container">
        <div class="section-header">
          <h5>The Library</h5>
          <h2>Featured Spiritual Classics</h2>
          <p>Works that have shaped the spiritual life of the Church for centuries.</p>
        </div>
        <div class="grid-3">
          ${featuredBooks.map(b => `
            <div class="book-card" onclick="router.navigate('library', '${b.id}')">
              <div class="book-card__century">${b.century} Century</div>
              <div class="book-card__title">${b.title}</div>
              <div class="book-card__author">${b.author}</div>
              <p class="card__text">${b.summary.slice(0, 150)}...</p>
              <div class="book-card__themes">
                ${b.themes.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align:center; margin-top:2.5rem;">
          <button class="btn" onclick="router.navigate('library')">Browse the Library →</button>
        </div>
      </div>
    </section>

    <!-- Quote of the Week -->
    <section class="section">
      <div class="container">
        <div class="quote-block">
          <h5 style="margin-bottom: 2rem;">Quote of the Week</h5>
          <p class="quote-block__text">"${quoteOfTheWeek.text}"</p>
          <p class="quote-block__context">${quoteOfTheWeek.context}</p>
          <p class="quote-block__source" style="margin-top: 1rem;">— ${SAINTS[0].name}, ${quoteOfTheWeek.source}</p>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;
}

// ---- SEASONS PAGE ---- //
function renderSeasons() {
  const categories = [
    { name: 'Interior Life', seasons: ['prayer', 'silence', 'contemplation', 'dark-night', 'consolation', 'desolation', 'dry-prayer', 'trust', 'union-with-god'] },
    { name: 'Virtues', seasons: ['humility', 'purity', 'discernment', 'vocation'] },
    { name: 'Suffering', seasons: ['suffering'] },
    { name: 'Joy', seasons: ['joy'] }
  ];

  return `
    <section class="hero hero--text">
      <h5 style="margin-bottom: 1rem;">Seasons of the Soul</h5>
      <h1>Every soul has its seasons.</h1>
      <p class="hero__subtitle">Spiritual desolation, consolation, growth, purification, union, temptation, mission — the spiritual life moves through patterns as reliable as the natural seasons.</p>
    </section>

    <section class="section">
      <div class="container">
        ${categories.map(cat => `
          <div style="margin-bottom: 4rem;">
            <h3 style="margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border);">${cat.name}</h3>
            <div class="grid-4">
              ${cat.seasons.map(id => {
                const s = getSeason(id);
                if (!s) return '';
                return `
                  <div class="card" onclick="router.navigate('seasons', '${s.id}')" style="cursor:pointer;">
                    <div class="card__title">${s.name}</div>
                    <p class="card__text">${s.definition.slice(0, 120)}...</p>
                    <span class="card__link">Explore</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    ${renderFooter()}
  `;
}

// ---- SEASON DETAIL ---- //
function renderSeasonDetail(id) {
  const s = getSeason(id);
  if (!s) return renderNotFound();

  const relatedSaints = SAINTS.filter(saint => saint.relatedSeasons.includes(id)).slice(0, 6);
  const relatedBooks = BOOKS.filter(book => book.relatedSeasons.includes(id)).slice(0, 4);
  const relatedJournal = JOURNAL.filter(j => j.relatedSeasons.includes(id)).slice(0, 3);

  return `
    <section class="hero hero--small">
      <img class="hero__image" src="${s.heroImage}" alt="${s.name}">
      <div class="hero__overlay"></div>
    </section>

    <section class="section season-content">
      <div class="container">
        <span class="back-link" onclick="router.navigate('seasons')">Back to Seasons</span>

        <div class="season-content__intro">
          <h1>${s.name}</h1>
          <p>${s.definition}</p>
        </div>

        <!-- Common Misconceptions -->
        <div class="season-section">
          <h3>Common Misconceptions</h3>
          <ul>
            ${s.commonMisconceptions.map(m => `<li>${m}</li>`).join('')}
          </ul>
        </div>

        <!-- Signs & Symptoms -->
        <div class="season-section">
          <h3>Signs You May Be in This Season</h3>
          <ul>
            ${s.symptoms.map(sym => `<li>${sym}</li>`).join('')}
          </ul>
        </div>

        <!-- Scripture -->
        <div class="season-section">
          <h3>Sacred Scripture</h3>
          ${s.scripture.map(sc => `
            <div class="scripture-ref">
              <p class="scripture-ref__text">"${sc.text}"</p>
              <p class="scripture-ref__ref">${sc.reference}</p>
            </div>
          `).join('')}
        </div>

        <!-- Catechism -->
        ${s.catechism.length > 0 ? `
          <div class="season-section">
            <h3>Catechism of the Catholic Church</h3>
            ${s.catechism.map(cc => `
              <div class="scripture-ref">
                <p class="scripture-ref__text">${cc.text}</p>
                <p class="scripture-ref__ref">${cc.reference}</p>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Teachings -->
        <div class="season-section">
          <h3>Teachings of the Saints</h3>
          ${s.teachings.map(t => `
            <h4>${t.title}</h4>
            <p>${t.content}</p>
            <p style="font-size:0.8rem; color: var(--gold); margin-top:0.5rem;">— ${t.source}</p>
          `).join('')}
        </div>

        <!-- Prayers -->
        <div class="season-section">
          <h3>Recommended Prayers</h3>
          <ul>
            ${s.prayers.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>

        <!-- Journal Prompts -->
        <div class="season-section">
          <h3>Reflection Questions</h3>
          <ul>
            ${s.journalPrompts.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>

        <!-- Rule of Life -->
        <div class="season-section">
          <h3>Rule of Life for This Season</h3>
          <p>${s.ruleOfLife}</p>
        </div>

        <!-- Related Saints -->
        ${relatedSaints.length > 0 ? `
          <div class="related-section">
            <h4>Saints Who Experienced This Season</h4>
            <div class="grid-4" style="margin-top:1.5rem;">
              ${relatedSaints.map(saint => `
                <div class="image-card" onclick="router.navigate('saints', '${saint.id}')">
                  <img class="image-card__img" src="${saint.portrait}" alt="${saint.name}" loading="lazy">
                  <div class="image-card__body">
                    <div class="image-card__title" style="font-size:1rem;">${saint.name}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Related Books -->
        ${relatedBooks.length > 0 ? `
          <div class="related-section">
            <h4>Recommended Reading</h4>
            <div class="grid-3" style="margin-top:1.5rem;">
              ${relatedBooks.map(b => `
                <div class="book-card" onclick="router.navigate('library', '${b.id}')">
                  <div class="book-card__century">${b.century} Century</div>
                  <div class="book-card__title">${b.title}</div>
                  <div class="book-card__author">${b.author}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Related Seasons -->
        <div class="related-section">
          <h4>Related Seasons</h4>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1rem;">
            ${s.relatedSeasons.map(rid => {
              const rs = getSeason(rid);
              if (!rs) return '';
              return `<span class="tag" style="cursor:pointer;" onclick="router.navigate('seasons', '${rid}')">${rs.name}</span>`;
            }).join('')}
          </div>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;
}

// ---- SAINTS PAGE ---- //
function renderSaints() {
  const centuries = [...new Set(SAINTS.map(s => s.century))].sort();
  const orders = [...new Set(SAINTS.map(s => s.religigiousOrder).filter(Boolean))].sort();
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return `
    <section class="hero hero--text">
      <h5 style="margin-bottom: 1rem;">The Communion of Saints</h5>
      <h1>Meet your companions.</h1>
      <p class="hero__subtitle">Browse the saints who have walked before us and left maps for every season of the soul.</p>
    </section>

    <section class="section">
      <div class="container">
        <!-- Alphabet Navigation -->
        <div class="alphabet-nav">
          ${letters.map(l => {
            return `<span class="alphabet-nav__letter" onclick="filterSaintsByLetter('${l}')">${l}</span>`;
          }).join('')}
        </div>

        <!-- Filters -->
        <div class="filter-bar">
          <input type="text" class="filter-bar__search" id="saintSearch" placeholder="Search saints..." oninput="filterSaints()">
          <div class="filter-bar__group">
            <button class="filter-btn filter-btn--active" data-filter="all" onclick="filterSaintsByFilter(this, 'all')">All</button>
            ${centuries.map(c => `<button class="filter-btn" data-filter="century:${c}" onclick="filterSaintsByFilter(this, 'century:${c}')">${c}</button>`).join('')}
            <button class="filter-btn" data-filter="doctor" onclick="filterSaintsByFilter(this, 'doctor')">Doctors</button>
            <button class="filter-btn" data-filter="mystic" onclick="filterSaintsByFilter(this, 'mystic')">Mystics</button>
          </div>
        </div>

        <!-- Saints Grid -->
        <div class="grid-4" id="saintsGrid" style="margin-top: 2rem;">
          ${renderSaintsList(SAINTS)}
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;
}

function renderSaintsList(saints) {
  if (saints.length === 0) {
    return `<div class="empty-state"><p>No saints found matching your criteria.</p></div>`;
  }
  return saints.map(s => `
    <div class="image-card" onclick="router.navigate('saints', '${s.id}')" data-saint="${s.id}">
      <img class="image-card__img" src="${s.portrait}" alt="${s.name}" loading="lazy">
      <div class="image-card__body">
        <div class="image-card__label">${s.century} Century · ${s.religiousOrder || s.stateOfLife}</div>
        <div class="image-card__title">${s.name}</div>
      </div>
    </div>
  `).join('');
}

function getSaintFirstName(saintName) {
  var name = saintName.replace(/^St\.\s+/, '');
  var parts = name.split(' ');
  if (parts[0].toUpperCase() === 'PADRE') return parts[1].toUpperCase();
  return parts[0].toUpperCase();
}

function filterSaints() {
  var query = document.getElementById('saintSearch').value.toLowerCase();
  var filtered = SAINTS.filter(function(s) { return s.name.toLowerCase().indexOf(query) !== -1 || s.virtues.some(function(v) { return v.toLowerCase().indexOf(query) !== -1; }) || s.themes.some(function(t) { return t.toLowerCase().indexOf(query) !== -1; }); });
  document.getElementById('saintsGrid').innerHTML = renderSaintsList(filtered);
}

function filterSaintsByFilter(btn, filter) {
  document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('filter-btn--active'); });
  btn.classList.add('filter-btn--active');
  var filtered = SAINTS;
  if (filter === 'doctor') {
    filtered = SAINTS.filter(function(s) { return ['st-augustine','st-thomas-aquinas','st-teresa-avila','st-john-cross','st-edith-stein'].indexOf(s.id) !== -1; });
  } else if (filter === 'mystic') {
    filtered = SAINTS.filter(function(s) { return ['st-teresa-avila','st-john-cross','st-edith-stein','st-pio','st-thomas-aquinas'].indexOf(s.id) !== -1; });
  } else if (filter !== 'all') {
    var parts = filter.split(':');
    var key = parts[0], val = parts[1];
    filtered = SAINTS.filter(function(s) { return s[key] === val || (key === 'century' && s.century.indexOf(val) !== -1); });
  }
  document.getElementById('saintsGrid').innerHTML = renderSaintsList(filtered);
}

function filterSaintsByLetter(letter) {
  var filtered = SAINTS.filter(function(s) {
    var name = s.name.replace(/^St\.\s+/, '');
    var firstName = name.split(' ')[0].toUpperCase();
    if (firstName === 'PADRE') firstName = name.split(' ')[1].toUpperCase();
    return firstName.charAt(0) === letter;
  });
  var grid = document.getElementById('saintsGrid');
  if (grid) grid.innerHTML = renderSaintsList(filtered);
  var search = document.getElementById('saintSearch');
  if (search) search.value = '';
  document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('filter-btn--active'); });
  var allBtn = document.querySelector('.filter-btn[data-filter="all"]');
  if (allBtn) allBtn.classList.add('filter-btn--active');
}

// ---- SAINT DETAIL ---- //
function renderSaintDetail(id) {
  const s = getSaint(id);
  if (!s) return renderNotFound();

  const relatedSaints = SAINTS.filter(saint => saint.id !== id && saint.relatedSeasons.some(rs => s.relatedSeasons.includes(rs))).slice(0, 4);
  const booksByAuthor = getBooksBySaint(id);
  const relatedBooks = [...new Set([...booksByAuthor, ...BOOKS.filter(b => b.relatedSaints && b.relatedSaints.includes(id))])].slice(0, 4);
  const relatedJournal = JOURNAL.filter(j => j.saintsMentioned && j.saintsMentioned.includes(id)).slice(0, 3);

  return `
    <section class="section saint-detail">
      <div class="container">
        <span class="back-link" onclick="router.navigate('saints')">Back to Saints</span>

        <div class="saint-detail__header">
          <img class="saint-detail__portrait" src="${s.portrait}" alt="${s.name}">
          <div>
            <h1>${s.name}</h1>
            <div class="saint-detail__meta">
              <span>${s.century} Century</span>
              <span>Feast Day: ${s.feastDay}</span>
              <span>${s.stateOfLife}</span>
              <span>${s.religiousOrder || 'Diocesan'}</span>
              <span>${s.country}</span>
            </div>
            <p style="font-size:0.95rem; line-height:1.8; color: var(--muted); margin-bottom:1.5rem;">${s.biography}</p>
            <div class="saint-detail__tags">
              ${s.virtues.map(v => `<span class="tag">${v}</span>`).join('')}
            </div>
            <div class="saint-detail__tags" style="margin-top:0.5rem;">
              ${s.themes.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>

        <!-- Major Works -->
        ${s.majorWorks.length > 0 ? `
          <div class="season-section">
            <h3>Major Works</h3>
            <ul>
              ${s.majorWorks.map(w => `<li>${w}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- Key Quotes with Context -->
        <div class="season-section">
          <h3>Selected Teachings</h3>
          ${s.quotes.map(q => `
            <div class="quote-block" style="text-align:left; padding: 2rem 0; border: none;">
              <p class="quote-block__text" style="font-size:1.3rem;">"${q.text}"</p>
              <p class="quote-block__context">${q.context}</p>
              <p class="quote-block__source" style="margin-top: 0.5rem;">— ${s.name}, ${q.source}</p>
            </div>
          `).join('')}
        </div>

        <!-- Patronages -->
        ${s.patronages.length > 0 ? `
          <div class="season-section">
            <h3>Patronages</h3>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
              ${s.patronages.map(p => `<span class="tag">${p}</span>`).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Related Books -->
        ${relatedBooks.length > 0 ? `
          <div class="related-section">
            <h4>Works by or about ${s.name.split(' ').pop()}</h4>
            <div class="grid-3" style="margin-top:1.5rem;">
              ${relatedBooks.map(b => `
                <div class="book-card" onclick="router.navigate('library', '${b.id}')">
                  <div class="book-card__century">${b.century} Century</div>
                  <div class="book-card__title">${b.title}</div>
                  <div class="book-card__author">${b.author}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Related Seasons -->
        <div class="related-section">
          <h4>Related Seasons</h4>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1rem;">
            ${s.relatedSeasons.map(rid => {
              const rs = getSeason(rid);
              if (!rs) return '';
              return `<span class="tag" style="cursor:pointer;" onclick="router.navigate('seasons', '${rid}')">${rs.name}</span>`;
            }).join('')}
          </div>
        </div>

        <!-- Related Saints -->
        ${relatedSaints.length > 0 ? `
          <div class="related-section">
            <h4>Related Saints</h4>
            <div class="grid-4" style="margin-top:1.5rem;">
              ${relatedSaints.map(saint => `
                <div class="image-card" onclick="router.navigate('saints', '${saint.id}')">
                  <img class="image-card__img" src="${saint.portrait}" alt="${saint.name}" loading="lazy">
                  <div class="image-card__body">
                    <div class="image-card__title" style="font-size:1rem;">${saint.name}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Related Journal -->
        ${relatedJournal.length > 0 ? `
          <div class="related-section">
            <h4>Journal Articles</h4>
            <div class="grid-3" style="margin-top:1.5rem;">
              ${relatedJournal.map(j => `
                <div class="journal-card" onclick="router.navigate('journal', '${j.id}')">
                  <img class="journal-card__img" src="${j.featuredImage}" alt="${j.title}" loading="lazy">
                  <div class="journal-card__body">
                    <div class="journal-card__category">${j.category}</div>
                    <div class="journal-card__title">${j.title}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </section>

    ${renderFooter()}
  `;
}

// ---- LIBRARY PAGE ---- //
function renderLibrary() {
  const collections = [
    { name: 'Doctors of the Church', ids: ['st-augustine', 'st-thomas-aquinas', 'st-teresa-avila', 'st-john-cross', 'st-edith-stein'] },
    { name: 'Mystics', ids: ['st-teresa-avila', 'st-john-cross', 'st-edith-stein', 'st-pio'] },
    { name: 'Monastic', ids: ['st-benedict'] },
    { name: 'Carmelite', ids: ['st-teresa-avila', 'st-john-cross', 'st-edith-stein'] },
    { name: 'Dominican', ids: ['st-thomas-aquinas'] },
    { name: 'Franciscan', ids: ['st-francis-assisi'] },
    { name: 'Jesuit', ids: ['st-ignatius'] }
  ];

  return `
    <section class="hero hero--text">
      <h5 style="margin-bottom: 1rem;">The Spiritual Library</h5>
      <h1>The Spiritual Library</h1>
      <p class="hero__subtitle">Catholic spiritual classics organized as they were meant to be experienced — not as commodity, but as sacred encounter.</p>
    </section>

    <section class="section">
      <div class="container">
        <!-- Collections -->
        ${collections.map(col => {
          const books = col.ids.map(id => {
            const author = getSaint(id);
            return author ? getBooksBySaint(id) : [];
          }).flat().filter(b => b.length > 0).slice(0, 3);
          if (books.length === 0) return '';
          return `
            <div style="margin-bottom: 3rem;">
              <h4 style="margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border);">${col.name}</h4>
              <div class="grid-3">
                ${books.map(b => `
                  <div class="book-card" onclick="router.navigate('library', '${b.id}')">
                    <div class="book-card__century">${b.century} Century</div>
                    <div class="book-card__title">${b.title}</div>
                    <div class="book-card__author">${b.author}</div>
                    <p class="card__text">${b.summary.slice(0, 120)}...</p>
                    <div class="book-card__themes">
                      ${b.themes.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}

        <!-- All Books -->
        <div style="margin-top: 2rem;">
          <h3 style="margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border);">Complete Collection</h3>
          <div class="grid-3">
            ${BOOKS.map(b => `
              <div class="book-card" onclick="router.navigate('library', '${b.id}')">
                <div class="book-card__century">${b.century} Century</div>
                <div class="book-card__title">${b.title}</div>
                <div class="book-card__author">${b.author}</div>
                <p class="card__text">${b.summary.slice(0, 120)}...</p>
                <div class="book-card__themes">
                  ${b.themes.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;
}

// ---- BOOK DETAIL ---- //
function renderBookDetail(id) {
  const b = getBook(id);
  if (!b) return renderNotFound();

  const author = getSaint(b.authorId);
  const relatedBooks = BOOKS.filter(book => book.id !== id && book.relatedSeasons.some(rs => b.relatedSeasons.includes(rs))).slice(0, 3);

  return `
    <section class="section book-detail">
      <div class="container">
        <span class="back-link" onclick="router.navigate('library')">Back to Library</span>

        <div class="book-detail__header">
          <div>
            <h5 style="margin-bottom: 0.5rem;">${b.century} Century</h5>
            <h1 style="margin-bottom: 0.5rem;">${b.title}</h1>
            <p style="font-family: var(--font-quote); font-style:italic; font-size:1.1rem; color: var(--muted);">${b.author}</p>
            ${author ? `
              <button class="btn btn--sm" style="margin-top:1rem;" onclick="router.navigate('saints', '${author.id}')">View Author →</button>
            ` : ''}

            <dl class="book-detail__meta">
              <dt>Difficulty</dt>
              <dd>${b.difficulty}</dd>
              <dt>Reading Time</dt>
              <dd>${b.readingTime}</dd>
              <dt>Themes</dt>
              <dd style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.25rem;">
                ${b.themes.map(t => `<span class="tag">${t}</span>`).join('')}
              </dd>
              <dt>Who Should Read This</dt>
              <dd>${b.whoShouldRead}</dd>
            </dl>
          </div>

          <div>
            <h3>Summary</h3>
            <p style="font-size:0.95rem; line-height:1.8; color: var(--muted); margin-bottom:2rem;">${b.summary}</p>

            <h3>Chapter Guide</h3>
            <ol class="chapter-list">
              ${b.chapterGuide.map(ch => `<li>${ch}</li>`).join('')}
            </ol>

            <h3 style="margin-top:2rem;">Important Passages</h3>
            ${b.importantPassages.map(p => `
              <div class="scripture-ref" style="margin-bottom:0.75rem;">
                <p class="scripture-ref__text" style="font-size:0.95rem;">"${p.text}"</p>
                <p class="scripture-ref__ref">${p.location}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Reading Plan -->
        <div class="season-section">
          <h3>Reading Plan</h3>
          <p style="font-size:0.95rem; color: var(--muted); line-height:1.8;">${b.readingPlan}</p>
        </div>

        <!-- Study Questions -->
        <div class="season-section">
          <h3>Study Questions</h3>
          <ul>
            ${b.studyQuestions.map(q => `<li>${q}</li>`).join('')}
          </ul>
        </div>

        <!-- Journal Prompts -->
        <div class="season-section">
          <h3>Journal Prompts</h3>
          <ul>
            ${b.journalPrompts.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>

        <!-- Related Books -->
        ${relatedBooks.length > 0 ? `
          <div class="related-section">
            <h4>Related Reading</h4>
            <div class="grid-3" style="margin-top:1.5rem;">
              ${relatedBooks.map(rb => `
                <div class="book-card" onclick="router.navigate('library', '${rb.id}')">
                  <div class="book-card__century">${rb.century} Century</div>
                  <div class="book-card__title">${rb.title}</div>
                  <div class="book-card__author">${rb.author}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Related Seasons -->
        <div class="related-section">
          <h4>Related Seasons</h4>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1rem;">
            ${b.relatedSeasons.map(rid => {
              const rs = getSeason(rid);
              if (!rs) return '';
              return `<span class="tag" style="cursor:pointer;" onclick="router.navigate('seasons', '${rid}')">${rs.name}</span>`;
            }).join('')}
          </div>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;
}

// ---- JOURNAL PAGE ---- //
function renderJournal() {
  const categories = [...new Set(JOURNAL.map(j => j.category))];

  return `
    <section class="hero hero--text">
      <h5 style="margin-bottom: 1rem;">Editorial</h5>
      <h1>Journal</h1>
      <p class="hero__subtitle">Reflections on the spiritual life, the wisdom of the saints, and the timeless teachings of the Catholic tradition.</p>
    </section>

    <section class="section">
      <div class="container">
        <!-- Category Filters -->
        <div class="filter-bar">
          <div class="filter-bar__group">
            <button class="filter-btn filter-btn--active" data-filter="all" onclick="filterJournal(this, 'all')">All</button>
            ${categories.map(c => `<button class="filter-btn" data-filter="${c}" onclick="filterJournal(this, '${c}')">${c}</button>`).join('')}
          </div>
        </div>

        <!-- Articles Grid -->
        <div class="grid-3" id="journalGrid" style="margin-top: 2rem;">
          ${renderJournalList(JOURNAL)}
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;
}

function renderJournalList(articles) {
  if (articles.length === 0) {
    return `<div class="empty-state"><p>No articles found.</p></div>`;
  }
  return articles.map(j => `
    <div class="journal-card" onclick="router.navigate('journal', '${j.id}')">
      <img class="journal-card__img" src="${j.featuredImage}" alt="${j.title}" loading="lazy">
      <div class="journal-card__body">
        <div class="journal-card__category">${j.category}</div>
        <div class="journal-card__title">${j.title}</div>
        <p class="journal-card__summary">${j.summary}</p>
      </div>
    </div>
  `).join('');
}

function filterJournal(btn, category) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
  btn.classList.add('filter-btn--active');
  const filtered = category === 'all' ? JOURNAL : JOURNAL.filter(j => j.category === category);
  document.getElementById('journalGrid').innerHTML = renderJournalList(filtered);
}

// ---- JOURNAL ARTICLE DETAIL ---- //
function renderJournalArticle(id) {
  const j = getJournal(id);
  if (!j) return renderNotFound();

  const mentionedSaints = (j.saintsMentioned || []).map(sid => getSaint(sid)).filter(Boolean);
  const mentionedBooks = (j.booksMentioned || []).map(bid => getBook(bid)).filter(Boolean);

  // Convert markdown-like content to HTML
  let lines = j.content.split('\n');
  let html = '';
  let inList = false;
  let listType = '';

  for (let line of lines) {
    const trimmed = line.trim();

    if (trimmed === '') {
      if (inList) {
        html += `</${listType}>`;
        inList = false;
      }
      continue;
    }

    // Bold headers
    if (/^\*\*.*\*\*$/.test(trimmed)) {
      if (inList) { html += `</${listType}>`; inList = false; }
      html += `<h3 style="margin-top:2rem;">${trimmed.replace(/\*\*/g, '')}</h3>`;
      continue;
    }

    // Unordered list
    if (trimmed.startsWith('- ')) {
      if (!inList || listType !== 'ul') {
        if (inList) html += `</${listType}>`;
        html += '<ul>';
        inList = true;
        listType = 'ul';
      }
      html += `<li>${trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`;
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(trimmed)) {
      if (!inList || listType !== 'ol') {
        if (inList) html += `</${listType}>`;
        html += '<ol>';
        inList = true;
        listType = 'ol';
      }
      html += `<li>${trimmed.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`;
      continue;
    }

    // Regular paragraph
    if (inList) { html += `</${listType}>`; inList = false; }
    html += `<p>${trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`;
  }

  if (inList) html += `</${listType}>`;
  const content = html;

  return `
    <section class="section article-detail">
      <div class="container">
        <span class="back-link" onclick="router.navigate('journal')">Back to Journal</span>

        <div class="article-detail__header">
          <div class="article-detail__category">${j.category}</div>
          <h1>${j.title}</h1>
          <p style="font-family: var(--font-quote); font-style:italic; font-size:1rem; color: var(--muted); margin-top:1rem;">${j.summary}</p>
        </div>

        <div class="article-detail__body">
          ${content}
        </div>

        <!-- Mentioned Saints -->
        ${mentionedSaints.length > 0 ? `
          <div class="related-section" style="max-width:700px; margin:4rem auto 0;">
            <h4>Saints Mentioned</h4>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1rem;">
              ${mentionedSaints.map(s => `<span class="tag" style="cursor:pointer;" onclick="router.navigate('saints', '${s.id}')">${s.name}</span>`).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Mentioned Books -->
        ${mentionedBooks.length > 0 ? `
          <div class="related-section" style="max-width:700px; margin:2rem auto 0;">
            <h4>Books Mentioned</h4>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1rem;">
              ${mentionedBooks.map(b => `<span class="tag" style="cursor:pointer;" onclick="router.navigate('library', '${b.id}')">${b.title}</span>`).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Related Seasons -->
        ${j.relatedSeasons.length > 0 ? `
          <div class="related-section" style="max-width:700px; margin:2rem auto 0;">
            <h4>Related Seasons</h4>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1rem;">
              ${j.relatedSeasons.map(rid => {
                const rs = getSeason(rid);
                if (!rs) return '';
                return `<span class="tag" style="cursor:pointer;" onclick="router.navigate('seasons', '${rid}')">${rs.name}</span>`;
              }).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </section>

    ${renderFooter()}
  `;
}

// ---- ABOUT PAGE ---- //
function renderAbout() {
  return `
    <section class="hero hero--text">
      <h5 style="margin-bottom: 1rem;">About the Archive</h5>
      <h1>A Digital Monastery</h1>
      <p class="hero__subtitle">A quiet place for contemplation, rooted in the living Tradition of the Catholic Church.</p>
    </section>

    <section class="section">
      <div class="container" style="max-width:800px;">

        <div class="about-section">
          <h2>Our Mission</h2>
          <p>Saints for All Seasons exists to preserve and share the spiritual wisdom of the Catholic saints in its full context — historical, theological, and practical. In an age of decontextualized quotations and spiritual consumerism, we seek to present the writings of the saints as they were intended: as companions for the journey of faith.</p>
        </div>

        <div class="about-section">
          <h2>Our Vision</h2>
          <p>We envision a digital space that feels like a monastery library, a museum archive, and a spiritual companion — all at once. Every page is designed to invite slow reading, reflection, and contemplation rather than rapid consumption. This is not a blog, not a quote collection, and not a traditional encyclopedia. It is a quiet place for the soul.</p>
        </div>

        <div class="about-section">
          <h2>Our Methodology</h2>
          <p>Every piece of content in this archive is rooted in the authentic sources of Catholic faith and spirituality:</p>
          <ul style="list-style:none; padding:0; margin: 1.5rem 0;">
            <li style="padding:0.75rem 0; border-bottom:1px solid var(--border); font-size:0.95rem; color:var(--muted); padding-left:1.2rem; position:relative;"><span style="position:absolute;left:0;color:var(--gold);">—</span><strong style="color:var(--text);">Sacred Scripture</strong> — The Word of God as the foundation of all spiritual teaching</li>
            <li style="padding:0.75rem 0; border-bottom:1px solid var(--border); font-size:0.95rem; color:var(--muted); padding-left:1.2rem; position:relative;"><span style="position:absolute;left:0;color:var(--gold);">—</span><strong style="color:var(--text);">Catechism of the Catholic Church</strong> — The authoritative summary of Catholic faith and morals</li>
            <li style="padding:0.75rem 0; border-bottom:1px solid var(--border); font-size:0.95rem; color:var(--muted); padding-left:1.2rem; position:relative;"><span style="position:absolute;left:0;color:var(--gold);">—</span><strong style="color:var(--text);">Doctors of the Church</strong> — The theological masters who have illuminated the faith</li>
            <li style="padding:0.75rem 0; border-bottom:1px solid var(--border); font-size:0.95rem; color:var(--muted); padding-left:1.2rem; position:relative;"><span style="position:absolute;left:0;color:var(--gold);">—</span><strong style="color:var(--text);">Original Writings</strong> — The authentic texts of the saints in their historical context</li>
            <li style="padding:0.75rem 0; border-bottom:1px solid var(--border); font-size:0.95rem; color:var(--muted); padding-left:1.2rem; position:relative;"><span style="position:absolute;left:0;color:var(--gold);">—</span><strong style="color:var(--text);">Catholic Tradition</strong> — The living transmission of faith from the apostles to the present</li>
          </ul>
        </div>

        <div class="about-section">
          <h2>Editorial Standards</h2>
          <p>Every quote in this archive includes its historical context, theological framework, and practical application. We never present the words of the saints in isolation. Each quotation is accompanied by:</p>
          <ul style="list-style:none; padding:0; margin: 1.5rem 0;">
            <li style="padding:0.5rem 0; font-size:0.95rem; color:var(--muted); padding-left:1.2rem; position:relative;"><span style="position:absolute;left:0;color:var(--gold);">—</span>The source text and chapter</li>
            <li style="padding:0.5rem 0; font-size:0.95rem; color:var(--muted); padding-left:1.2rem; position:relative;"><span style="position:absolute;left:0;color:var(--gold);">—</span>The historical circumstances of its writing</li>
            <li style="padding:0.5rem 0; font-size:0.95rem; color:var(--muted); padding-left:1.2rem; position:relative;"><span style="position:absolute;left:0;color:var(--gold);">—</span>Its theological significance</li>
            <li style="padding:0.5rem 0; font-size:0.95rem; color:var(--muted); padding-left:1.2rem; position:relative;"><span style="position:absolute;left:0;color:var(--gold);">—</span>Practical application rooted in Catholic teaching</li>
          </ul>
        </div>

        <div class="about-section">
          <h2>What This Is Not</h2>
          <p>This archive is not a blog, a social media feed, or a productivity tool. It is not designed for rapid consumption or algorithmic engagement. It is a digital monastery — a place where the soul can slow down, listen, and encounter the wisdom that has sustained the Church for two millennia.</p>
          <p>We do not chase trends. We do not optimize for clicks. We do not reduce the wisdom of the saints to inspirational memes. We present their words with the reverence and context they deserve.</p>
        </div>

        <div class="about-section" style="border-bottom:none;">
          <h2>A Prayer for This Work</h2>
          <p style="font-family: var(--font-quote); font-style:italic; font-size:1.05rem; line-height:1.8;">Lord Jesus Christ, Son of the living God, have mercy on us and on this work. May every soul who visits this archive encounter Your love through the wisdom of Your saints. May the words of the saints, rooted in Your Word, bear fruit in holiness. May this digital monastery be a place of silence, beauty, and reverence where hearts are drawn closer to You. Amen.</p>
        </div>

      </div>
    </section>

    ${renderFooter()}
  `;
}

// ---- FOOTER ---- //
function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div>
            <div class="footer__brand">Saints for All Seasons</div>
            <p class="footer__desc">A digital Catholic spiritual formation library. Companions for every season of the spiritual life.</p>
          </div>
          <div>
            <div class="footer__heading">Navigate</div>
            <span class="footer__link" onclick="router.navigate('home')">Home</span>
            <span class="footer__link" onclick="router.navigate('seasons')">Seasons</span>
            <span class="footer__link" onclick="router.navigate('saints')">Saints</span>
            <span class="footer__link" onclick="router.navigate('library')">Library</span>
            <span class="footer__link" onclick="router.navigate('journal')">Journal</span>
            <span class="footer__link" onclick="router.navigate('about')">About</span>
          </div>
          <div>
            <div class="footer__heading">Seasons</div>
            ${SEASONS.slice(0, 6).map(s => `<span class="footer__link" onclick="router.navigate('seasons', '${s.id}')">${s.name}</span>`).join('')}
          </div>
          <div>
            <div class="footer__heading">Library</div>
            ${BOOKS.slice(0, 5).map(b => `<span class="footer__link" onclick="router.navigate('library', '${b.id}')">${b.title}</span>`).join('')}
          </div>
        </div>
        <div class="footer__bottom">
          <p>Saints for All Seasons · A Digital Catholic Spiritual Formation Library</p>
          <p style="margin-top:0.5rem;">Rooted in Sacred Scripture, the Catechism, and the Living Tradition of the Church</p>
        </div>
      </div>
    </footer>
  `;
}

// ---- NOT FOUND ---- //
function renderNotFound() {
  return `
    <section class="section" style="padding-top: calc(56px + 6rem);">
      <div class="empty-state">
        <h2 style="margin-bottom:1rem;">Page Not Found</h2>
        <p>The page you seek does not exist in this archive.</p>
        <button class="btn" style="margin-top:2rem;" onclick="router.navigate('home')">Return Home</button>
      </div>
    </section>
    ${renderFooter()}
  `;
}

// ---- Initialize ---- //
document.addEventListener('DOMContentLoaded', () => {
  handleHash();
});
