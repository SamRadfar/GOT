'use strict';

// ========== HELPERS ==========
function debounce(fn, ms) {
  let t;
  return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}
function normalizeKey(k) { return cardAliases[k] || k; }
function getCharImage(key) { const k = normalizeKey(key); return galleryImages[k]?.[0] || null; }
function escHtml(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
function escRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function getDisplayName(key) {
  const ch = characters[key] || characters[cardAliases[key]] || _cardFallbacks[key];
  return ch?.name?.split('/')[0]?.split('(')[0]?.trim() || key;
}
function delegateCharClick(containerId, selector) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const handler = target => {
    const key = target.dataset.char;
    const card = document.querySelector('.char-card[data-char="' + key + '"]');
    if (card) card.click();
  };
  el.addEventListener('click', e => { const t = e.target.closest(selector); if (t) handler(t); });
  el.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const t = e.target.closest(selector); if (!t) return;
    e.preventDefault(); handler(t);
  });
}

// Fallback names/titles for characters not in the database (e.g. jonA, lancel)
const _cardFallbacks = {
  jonA:   { name: 'Jon Arryn',          title: 'Lord of the Eyrie \u00B7 Hand of the King', house: 'Arryn', status: 'Deceased', actor: 'John Standing', color: 'var(--arryn)' },
  lancel: { name: 'Lancel Lannister',    title: "Kevan's Son",          house: 'Lannister', status: 'Deceased', actor: 'Eugene Simon', color: 'var(--lannister)' }
};

// ========== CACHED DOM REFS (populated after render) ==========
let $navBtns, $navBtnMap, $charCards, $locCards, $houseSections, $searchBar,
    $overviewPanel, $overviewFab, $backToTop, $modalOverlay;

function initDomCache() {
  $navBtns = document.querySelectorAll('.nav-btn');
  $navBtnMap = {};
  $navBtns.forEach(b => { if (b.dataset.house) $navBtnMap[b.dataset.house] = b; });
  $charCards = document.querySelectorAll('.char-card');
  $locCards = document.querySelectorAll('.loc-card');
  $houseSections = document.querySelectorAll('.house-section');
  $searchBar = document.querySelector('.search-bar');
  $overviewPanel = document.getElementById('overviewPanel');
  $overviewFab = document.getElementById('overviewFab');
  $backToTop = document.getElementById('backToTop');
  $modalOverlay = document.getElementById('modalOverlay');
}

// ========== NAVIGATION ==========
let currentHouse = 'all';

function setActiveNav(house) {
  $navBtns.forEach(b => b.classList.remove('active'));
  const btn = $navBtnMap[house];
  if (btn) { btn.classList.add('active'); btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }
}

function closeOverview() {
  overviewActive = false;
  $overviewPanel.style.display = 'none';
  $searchBar.style.display = '';
  $overviewFab.classList.remove('active');
}

function clearSearchState() {
  const input = document.getElementById('searchInput');
  input.value = '';
  const bar = document.getElementById('searchBar');
  bar.classList.remove('has-query');
  const countEl = document.getElementById('searchCount');
  countEl.textContent = '';
  countEl.classList.remove('empty');
  document.querySelectorAll('mark.search-hl').forEach(m => m.replaceWith(m.textContent));
  document.querySelectorAll('.search-dim,.search-hit').forEach(el => el.classList.remove('search-dim', 'search-hit'));
}

function showSection(house) {
  closeOverview(); closeConnections(); closeSnapshot();
  currentHouse = house;
  setActiveNav(house);
  clearSearchState();
  $houseSections.forEach(s => {
    s.style.display = (house === 'all' || s.dataset.house === house) ? '' : 'none';
  });
  $searchBar.style.display = '';
}

// ========== DATA-DRIVEN RENDERING ==========

function _getChar(memberId) {
  return characters[memberId] || characters[cardAliases[memberId]] || _cardFallbacks[memberId] || null;
}

function renderCard(member, house) {
  const ch = _getChar(member.id);
  // Use deathSeason for deceased class (spoiler-safe) instead of raw status
  const ds = deathSeason[member.id];
  const isDeceased = ds !== undefined && ds <= currentSpoilerSeason;
  const name = ch ? getDisplayName(member.id) : member.id;
  const title = ch ? ch.title : '';

  let cardClass = 'char-card';
  if (isDeceased) cardClass += ' deceased';

  let cardStyleAttr = member.cardStyle ? ' style="' + member.cardStyle + '"' : '';
  let avatarStyleAttr = member.avatarStyle ? ' style="' + member.avatarStyle + '"' : '';

  let tagHtml = member.tag ? '<div class="relation-tag">' + member.tag + '</div>' : '';

  return '<div class="' + cardClass + '" data-char="' + member.id + '" tabindex="0" role="button" aria-label="' + escHtml(name) + '"' + cardStyleAttr + '>' +
    '<div class="avatar"' + avatarStyleAttr + '>' + member.initials + '</div>' +
    '<div class="name">' + name + '</div>' +
    '<div class="title">' + title + '</div>' +
    tagHtml +
    '</div>';
}

function renderNote(note) {
  if (note.spoiler) {
    return '<div data-spoiler-text-min="' + note.spoiler.min + '" data-safe-text="' + escHtml(note.spoiler.safe) + '" style="color:var(--text-muted);font-size:.85rem;padding:.5rem;background:var(--surface);border-radius:var(--radius-sm);margin-bottom:1rem">' + note.text + '</div>';
  }
  return '<div style="text-align:center;color:var(--text-muted);font-size:.8rem;margin-bottom:1rem">' + note.text + '</div>';
}

function renderGroup(group, house) {
  // Connector (no label, just text between groups)
  if (group.connector) {
    return '<div class="connector-row" style="text-align:center;padding:.5rem 0 1.5rem;color:var(--text-muted);font-size:.8rem">' + group.connector + '</div>';
  }

  let html = '<div class="tree-group">';

  // Group label
  if (group.label) {
    let labelAttrs = '';
    if (group.spoilerMin) labelAttrs += ' data-spoiler-min="' + group.spoilerMin + '"';
    if (group.spoilerLabel) {
      labelAttrs += ' data-safe-label="' + escHtml(group.spoilerLabel.safe) + '" data-spoiler-label-min="' + group.spoilerLabel.min + '"';
      html += '<div class="group-label"' + labelAttrs + '>' + escHtml(group.spoilerLabel.full) + '</div>';
    } else {
      html += '<div class="group-label"' + labelAttrs + '>' + group.label + '</div>';
    }
  }

  // Note above members (for grid/couple layouts, not single)
  if (group.note && group.layout !== 'single') {
    html += renderNote(group.note);
  }

  // Layout-specific rendering
  switch (group.layout) {
    case 'couple':
      html += '<div class="couple">';
      html += renderCard(group.members[0], house);
      html += '<div class="bond" aria-hidden="true">\u2665</div>';
      html += renderCard(group.members[1], house);
      html += '</div>';
      break;

    case 'children':
      html += '<div class="children-bracket" aria-hidden="true"><div class="vert-line"></div><div class="horiz-line"></div></div>';
      html += '<div class="members">';
      group.members.forEach(m => html += renderCard(m, house));
      html += '</div>';
      break;

    case 'grid':
      html += '<div class="members">';
      group.members.forEach(m => html += renderCard(m, house));
      html += '</div>';
      break;

    case 'single':
      html += '<div style="display:flex;justify-content:center">';
      html += renderCard(group.members[0], house);
      html += '</div>';
      break;

    case 'couple-children':
      // Couple
      html += '<div class="couple">';
      html += renderCard(group.members[0], house);
      html += '<div class="bond" aria-hidden="true">\u2665</div>';
      html += renderCard(group.members[1], house);
      html += '</div>';
      // Note between couple and children
      if (group.note) html += renderNote(group.note);
      // Children bracket
      if (group.children && group.children.length > 0) {
        if (group.childrenLayout === 'couple') {
          html += '<div class="children-bracket" aria-hidden="true"><div class="vert-line"></div><div class="horiz-line"></div></div>';
          html += '<div class="couple">';
          html += renderCard(group.children[0], house);
          html += '<div class="bond" aria-hidden="true">\u2665</div>';
          html += renderCard(group.children[1], house);
          html += '</div>';
        } else if (group.children.length === 1) {
          html += '<div class="children-bracket" aria-hidden="true"><div class="vert-line"></div></div>';
          html += '<div style="display:flex;justify-content:center">';
          html += renderCard(group.children[0], house);
          html += '</div>';
        } else {
          html += '<div class="children-bracket" aria-hidden="true"><div class="vert-line"></div><div class="horiz-line"></div></div>';
          let childStyle = group.childrenStyle ? ' style="' + group.childrenStyle + '"' : '';
          html += '<div class="members"' + childStyle + '>';
          group.children.forEach(m => html += renderCard(m, house));
          html += '</div>';
        }
      }
      break;
  }

  // Note after members for 'single' layout
  if (group.note && group.layout === 'single') {
    html += renderNote(group.note);
  }

  html += '</div>';
  return html;
}

function renderSection(house) {
  const sectionStyle = house.sectionStyle ? ' style="' + house.sectionStyle + '"' : '';
  let html = '<section id="sec-' + house.id + '" class="house-section ' + house.cssClass + ' fade-in" data-house="' + house.id + '"' + sectionStyle + '>';
  html += '<div class="section-head">';
  html += '<div class="sigil" style="' + house.sigilStyle + '">' + house.sigil + '</div>';
  html += '<h2>' + house.name + '</h2>';
  if (house.seat && house.badgeStyle) {
    html += '<span class="house-badge" style="' + house.badgeStyle + '">' + house.seat + '</span>';
  }
  html += '<div class="motto">' + house.motto + '</div>';
  html += '</div>';
  house.groups.forEach(g => html += renderGroup(g, house));
  html += '</section>';
  return html;
}

function renderLocations() {
  let html = '<section id="sec-locations" class="house-section fade-in" data-house="locations">';
  html += '<div class="section-head"><div class="sigil" style="background:#5a5a6a">\uD83D\uDDFA</div><h2>Key Locations</h2></div>';
  locations.forEach(cat => {
    html += '<h3 style="color:var(--gold);font-size:1.1rem;margin:2rem 0 1rem;padding-left:.5rem;border-left:3px solid var(--gold)">' + cat.category + '</h3>';
    html += '<div class="locations-grid">';
    cat.places.forEach(p => {
      html += '<div class="loc-card"><h4>' + p.name + '</h4><div class="region">' + p.region + '</div><p>' + p.description + '</p>';
      if (p.ruler) html += '<div class="ruler">Ruler: <strong>' + p.ruler + '</strong></div>';
      html += '</div>';
    });
    html += '</div>';
  });
  html += '</section>';
  return html;
}

function renderAllSections() {
  const container = document.getElementById('sectionsContainer');
  let html = '';
  houses.forEach(h => html += renderSection(h));
  html += renderLocations();
  container.innerHTML = html;
}

// ========== SPOILER SYSTEM ==========
let currentSpoilerSeason = 0;

function showSpoilerToast(season) {
  let toast = document.getElementById('spoilerToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'spoilerToast';
    toast.className = 'spoiler-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  const labels = ["Haven't started", 'Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6', 'Season 7', 'All seasons'];
  toast.textContent = 'Spoiler shield: ' + (labels[season] || 'Season ' + season);
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 1500);
  // Flash spoiler bar
  const bar = document.querySelector('.spoiler-bar');
  if (bar) { bar.classList.add('spoiler-flash'); setTimeout(() => bar.classList.remove('spoiler-flash'), 600); }
}

function applySpoilerFilter(season) {
  currentSpoilerSeason = season;
  localStorage.setItem('got-spoiler-season', season);
  showSpoilerToast(season);

  // Single pass: toggle deceased markers + season-aware titles/tags
  document.querySelectorAll('.char-card[data-char],.ov-card[data-char]').forEach(card => {
    const key = card.dataset.char;
    const ds = deathSeason[key];
    card.classList.toggle('spoiler-alive', ds !== undefined && ds > season);

    // Jon Snow spoiler swap
    if (key === 'jon' || key === 'jon2') {
      const nameEl = card.querySelector('.name');
      const titleEl = card.querySelector('.title');
      const tagEl = card.querySelector('.relation-tag');
      if (nameEl && titleEl) {
        if (!card._origName) {
          card._origName = nameEl.textContent;
          card._origTitle = titleEl.textContent;
          card._origTag = tagEl ? tagEl.textContent : '';
        }
        if (season < 7) {
          nameEl.textContent = 'Jon Snow';
          titleEl.textContent = "Bastard of Winterfell \u00B7 Night's Watch";
          if (tagEl) tagEl.textContent = "Ned's Bastard";
        } else {
          nameEl.textContent = card._origName;
          titleEl.textContent = card._origTitle;
          if (tagEl) tagEl.textContent = card._origTag;
        }
      }
    }

    // Season-aware titles and tags
    const nKey = normalizeKey(key);
    const data = cardSpoilerData[nKey];
    if (data) {
      const titleEl = card.querySelector('.title');
      const tagEl = card.querySelector('.relation-tag');
      if (titleEl) {
        if (!card._origTitle) card._origTitle = titleEl.textContent;
        const entry = data.find(d => season >= d.min);
        titleEl.textContent = entry?.title || card._origTitle;
      }
      if (tagEl) {
        if (!card._origTag) card._origTag = tagEl.textContent;
        const entry = data.find(d => season >= d.min && d.tag !== undefined);
        if (entry) tagEl.textContent = entry.tag;
        else if (card._origTag) tagEl.textContent = card._origTag;
      }
    }
  });

  // Hide sections with data-spoiler-min attribute
  document.querySelectorAll('[data-spoiler-min]').forEach(el => {
    const min = +el.dataset.spoilerMin;
    el.closest('.tree-group').classList.toggle('spoiler-hidden', season < min);
  });

  // Swap group labels with safe versions
  document.querySelectorAll('[data-spoiler-label-min]').forEach(el => {
    const min = +el.dataset.spoilerLabelMin;
    if (!el._origLabel) el._origLabel = el.textContent;
    el.textContent = season < min ? el.dataset.safeLabel : el._origLabel;
  });

  // Swap text blocks with safe versions
  document.querySelectorAll('[data-spoiler-text-min]').forEach(el => {
    const min = +el.dataset.spoilerTextMin;
    if (!el._origText) el._origText = el.innerHTML;
    el.innerHTML = season < min ? el.dataset.safeText : el._origText;
  });

  // Clear & rebuild connections panel on spoiler change
  const cp = document.getElementById('connectionsPanel');
  if (cp) { cp.innerHTML = ''; if (connectionsActive) buildConnections(); }

  // Rebuild overview panel titles on spoiler change
  const op = document.getElementById('overviewPanel');
  if (op && op.children.length > 0) { op.innerHTML = ''; buildOverview(); }

  // Rebuild snapshot if active
  if (snapshotActive) buildSeasonSnapshot();
}

// ========== OVERVIEW ==========
let overviewActive = false;

function buildOverview() {
  const panel = document.getElementById('overviewPanel');
  if (panel.children.length > 0) return;

  const grid = document.createElement('div');
  grid.className = 'overview-grid';

  overviewHouses.forEach(h => {
    const sec = document.getElementById(h.section);
    if (!sec) return;
    const seen = new Set();
    const cards = sec.querySelectorAll('.char-card[data-char]');

    const houseDiv = document.createElement('div');
    houseDiv.className = 'ov-house';
    houseDiv.style.borderTopColor = h.color;
    houseDiv.style.borderTopWidth = '3px';
    houseDiv.innerHTML = '<div class="ov-house-title"><span class="ov-sigil">' + h.sigil + '</span>' + h.name + '</div>';

    const members = document.createElement('div');
    members.className = 'ov-members';

    cards.forEach(card => {
      const key = card.dataset.char;
      const baseKey = normalizeKey(key);
      if (seen.has(baseKey)) return;
      seen.add(baseKey);

      const name = card.querySelector('.name')?.textContent || '';
      const avatar = card.querySelector('.avatar');
      const imgEl = avatar?.querySelector('img');
      const initials = avatar?.childNodes[0]?.textContent?.trim() || '';
      const avatarStyle = avatar?.getAttribute('style') || '';

      const ov = document.createElement('div');
      ov.className = 'ov-card' + (card.classList.contains('deceased') ? ' deceased' : '');
      if (card.classList.contains('spoiler-alive')) ov.classList.add('spoiler-alive');
      ov.dataset.char = key;

      const firstName = name.split(' ')[0];
      ov.innerHTML =
        '<div class="ov-avatar" style="' + avatarStyle + '">' +
        (imgEl ? '<img src="' + imgEl.src + '" alt="' + name + '" loading="lazy">' : '') +
        '<span>' + initials + '</span>' +
        '</div>' +
        '<div class="ov-name">' + firstName + '</div>';
      ov.setAttribute('tabindex', '0');
      ov.setAttribute('role', 'button');
      ov.setAttribute('aria-label', name);
      members.appendChild(ov);
    });

    houseDiv.appendChild(members);
    grid.appendChild(houseDiv);
  });

  panel.appendChild(grid);
}

function toggleOverview() {
  overviewActive = !overviewActive;
  if (overviewActive) {
    closeConnections(); closeSnapshot();
    buildOverview();
    $overviewPanel.style.display = '';
    $houseSections.forEach(s => s.style.display = 'none');
    $searchBar.style.display = 'none';
    setActiveNav('overview');
    $overviewFab.classList.add('active');
  } else {
    closeOverview();
    showSection(currentHouse);
  }
}

// ========== CONNECTIONS PANEL ==========
let connectionsActive = false;

function buildConnections() {
  const panel = document.getElementById('connectionsPanel');
  if (panel.children.length > 0) return;
  const grid = document.createElement('div');
  grid.className = 'connections-grid';
  const filtered = crossHouseLinks.filter(c => !c.spoilerMin || currentSpoilerSeason >= c.spoilerMin);
  filtered.forEach(conn => {
    const card = document.createElement('div');
    card.className = 'connection-card';
    const nameA = getDisplayName(conn.a);
    const nameB = getDisplayName(conn.b);
    card.innerHTML =
      '<div class="conn-pair">' +
      '<span class="conn-char" data-char="' + conn.a + '" tabindex="0" role="button">' + nameA + '</span>' +
      '<span style="color:var(--text-muted)" aria-hidden="true">\u2194</span>' +
      '<span class="conn-char" data-char="' + conn.b + '" tabindex="0" role="button">' + nameB + '</span>' +
      '</div>' +
      '<div class="conn-type">' + conn.type + '</div>' +
      '<div class="conn-houses">' + conn.houses + '</div>';
    grid.appendChild(card);
  });
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:2rem;grid-column:1/-1">No cross-house connections visible at this spoiler level.</div>';
  }
  panel.appendChild(grid);
}

function closeConnections() {
  connectionsActive = false;
  const panel = document.getElementById('connectionsPanel');
  if (panel) panel.style.display = 'none';
  const fab = document.getElementById('connectionsFab');
  if (fab) fab.classList.remove('active');
}

function toggleConnections() {
  connectionsActive = !connectionsActive;
  if (connectionsActive) {
    closeOverview(); closeSnapshot();
    buildConnections();
    document.getElementById('connectionsPanel').style.display = '';
    $houseSections.forEach(s => s.style.display = 'none');
    $searchBar.style.display = 'none';
    setActiveNav('connections');
    document.getElementById('connectionsFab').classList.add('active');
  } else {
    closeConnections();
    showSection(currentHouse);
  }
}

// ========== SEASON SNAPSHOT ==========
let snapshotActive = false;

function buildSeasonSnapshot() {
  const panel = document.getElementById('snapshotPanel');
  if (!panel) return;
  panel.innerHTML = '';
  if (currentSpoilerSeason === 0) {
    panel.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:2rem">Select a season to see key events</div>';
    return;
  }

  let html = '<div class="snapshot-grid">';
  for (let s = 1; s <= currentSpoilerSeason; s++) {
    const se = seasonEvents.find(e => e.season === s);
    if (!se) continue;
    html += '<div class="snapshot-season">';
    html += '<div class="snapshot-season-title">Season ' + s + '</div>';
    se.events.forEach(ev => {
      const icon = ev.type === 'death' ? '\uD83D\uDC80' :
                   ev.type === 'battle' ? '\u2694\uFE0F' :
                   ev.type === 'reveal' ? '\uD83D\uDC41' :
                   ev.type === 'milestone' ? '\uD83C\uDFC6' :
                   ev.type === 'betrayal' ? '\uD83D\uDDE1' : '\uD83D\uDCCC';
      const charLinks = ev.characters.map(c => {
        const name = getDisplayName(c).split(' ')[0];
        return '<span class="snapshot-char" data-char="' + c + '">' + name + '</span>';
      }).join(', ');
      html += '<div class="snapshot-event"><span class="snapshot-icon">' + icon + '</span><span class="snapshot-text">' + ev.text + '</span><div class="snapshot-chars">' + charLinks + '</div></div>';
    });
    html += '</div>';
  }
  html += '</div>';
  panel.innerHTML = html;
}

function closeSnapshot() {
  snapshotActive = false;
  const panel = document.getElementById('snapshotPanel');
  if (panel) panel.style.display = 'none';
  const fab = document.getElementById('snapshotFab');
  if (fab) fab.classList.remove('active');
}

function toggleSnapshot() {
  snapshotActive = !snapshotActive;
  if (snapshotActive) {
    closeOverview(); closeConnections();
    buildSeasonSnapshot();
    const panel = document.getElementById('snapshotPanel');
    if (panel) panel.style.display = '';
    $houseSections.forEach(s => s.style.display = 'none');
    $searchBar.style.display = 'none';
    setActiveNav('snapshot');
    const fab = document.getElementById('snapshotFab');
    if (fab) fab.classList.add('active');
  } else {
    closeSnapshot();
    showSection(currentHouse);
  }
}

// ========== SEARCH ==========
function clearSearch() {
  const input = document.getElementById('searchInput');
  input.value = '';
  handleSearch('');
  input.focus();
}

function handleSearch(query) {
  const bar = document.getElementById('searchBar');
  const countEl = document.getElementById('searchCount');
  const q = query.toLowerCase().trim();

  bar.classList.toggle('has-query', q.length > 0);

  // Remove old highlights and search classes
  document.querySelectorAll('mark.search-hl').forEach(m => m.replaceWith(m.textContent));
  document.querySelectorAll('.search-dim,.search-hit').forEach(el => el.classList.remove('search-dim', 'search-hit'));

  if (!q) {
    $houseSections.forEach(s => s.style.display = '');
    $charCards.forEach(c => c.style.display = '');
    $locCards.forEach(c => c.style.display = '');
    setActiveNav('all');
    countEl.textContent = '';
    countEl.classList.remove('empty');
    applySpoilerFilter(currentSpoilerSeason);
    return;
  }

  // Check if query matches a house name
  let matchedHouse = null;
  for (const [house, aliases] of Object.entries(houseAliases)) {
    if (aliases.some(a => a.includes(q) || q.includes(a))) {
      matchedHouse = house; break;
    }
  }

  const tokens = q.split(/\s+/).filter(t => t.length > 0);
  let charMatches = 0;
  let locMatches = 0;
  let firstHit = null;

  // Search characters
  $charCards.forEach(c => {
    const nameEl = c.querySelector('.name');
    const titleEl = c.querySelector('.title');
    const tagEl = c.querySelector('.relation-tag');
    const charKey = c.dataset.char;
    const charData = characters[charKey] || _cardFallbacks[charKey];

    const fullText = [
      nameEl?.textContent || '', titleEl?.textContent || '',
      tagEl?.textContent || '', charData?.actor || '', charData?.house || ''
    ].join(' ').toLowerCase();

    const match = tokens.every(t => fullText.includes(t));
    c.style.display = '';

    if (match) {
      c.classList.add('search-hit');
      c.classList.remove('search-dim');
      charMatches++;
      if (!firstHit) firstHit = c;
      if (nameEl) highlightText(nameEl, tokens);
      if (titleEl) highlightText(titleEl, tokens);
    } else {
      c.classList.remove('search-hit');
    }
  });

  // Search locations
  $locCards.forEach(c => {
    const text = c.textContent.toLowerCase();
    const match = tokens.every(t => text.includes(t));
    c.style.display = '';

    if (match) {
      c.classList.add('search-hit');
      c.classList.remove('search-dim');
      locMatches++;
      if (!firstHit) firstHit = c;
      const h4 = c.querySelector('h4');
      if (h4) highlightText(h4, tokens);
    } else {
      c.classList.remove('search-hit');
    }
  });

  // Per section: if it has matches, show and dim non-matches; else hide
  $houseSections.forEach(sec => {
    const hits = sec.querySelectorAll('.char-card.search-hit,.loc-card.search-hit');
    const isHouseMatch = matchedHouse && sec.dataset.house === matchedHouse;

    if (hits.length > 0) {
      sec.style.display = '';
      sec.querySelectorAll('.char-card:not(.search-hit)').forEach(c => c.classList.add('search-dim'));
      sec.querySelectorAll('.loc-card:not(.search-hit)').forEach(c => c.classList.add('search-dim'));
    } else if (isHouseMatch) {
      sec.style.display = '';
      sec.querySelectorAll('.char-card').forEach(c => {
        c.classList.add('search-hit');
        c.style.display = '';
        charMatches++;
      });
    } else {
      sec.style.display = 'none';
    }
  });

  if (firstHit) {
    firstHit.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const total = charMatches + locMatches;
  if (total > 0) {
    const parts = [];
    if (charMatches) parts.push('<span>' + charMatches + '</span> character' + (charMatches !== 1 ? 's' : ''));
    if (locMatches) parts.push('<span>' + locMatches + '</span> location' + (locMatches !== 1 ? 's' : ''));
    countEl.innerHTML = parts.join(', ') + ' found';
    countEl.classList.remove('empty');
  } else {
    countEl.innerHTML = 'No results for "' + escHtml(query) + '"';
    countEl.classList.add('empty');
  }
}

function highlightText(el, tokens) {
  const original = el.textContent;
  let html = escHtml(original);
  tokens.forEach(t => {
    const regex = new RegExp('(' + escRegex(t) + ')', 'gi');
    html = html.replace(regex, '<mark class="search-hl">$1</mark>');
  });
  el.innerHTML = html;
}

const debouncedSearch = debounce(handleSearch, 150);

// ========== GALLERY ==========
let galleryIdx = 0;
let galleryImgs = [];

function renderGallery(key) {
  const norm = key in cardAliases ? cardAliases[key] : key;
  const imgs = galleryImages[norm] || [];
  if (!imgs.length) { const fb = getCharImage(key); if (fb) imgs.push(fb); }
  galleryImgs = imgs;
  galleryIdx = 0;

  const track = document.getElementById('galleryTrack');
  const dots = document.getElementById('galleryDots');
  const gallery = document.getElementById('modalGallery');

  const initials = document.querySelector('.char-card[data-char="' + key + '"]')?.querySelector('.avatar')?.childNodes[0]?.textContent?.trim() || '';
  const ch = characters[key] || _cardFallbacks[key];

  let html = '<div class="gallery-initials">' + initials + '</div>';
  imgs.forEach((src, i) => {
    html += '<img src="' + src + '" alt="' + (ch?.name || '') + '" ' + (i === 0 ? 'loading="eager"' : 'loading="lazy"') + ' class="' + (i === 0 ? 'active' : '') + '" onerror="this.remove()">';
  });
  track.innerHTML = html;
  track.style.background = ch?.color || 'var(--surface2)';

  dots.innerHTML = imgs.length > 1 ? imgs.map((_, i) => '<button class="dot' + (i === 0 ? ' active' : '') + '" onclick="galleryGo(' + i + ')" role="tab" aria-label="Image ' + (i + 1) + '" aria-selected="' + (i === 0) + '"></button>').join('') : '';
  gallery.classList.toggle('single', imgs.length <= 1);

  const counter = document.getElementById('galleryCounter');
  if (counter) counter.textContent = imgs.length > 1 ? '1 / ' + imgs.length : '';
}

function gallerySlide(dir) {
  if (galleryImgs.length <= 1) return;
  galleryIdx = (galleryIdx + dir + galleryImgs.length) % galleryImgs.length;
  galleryGo(galleryIdx);
}

function galleryGo(idx) {
  galleryIdx = idx;
  const track = document.getElementById('galleryTrack');
  track.querySelectorAll('img').forEach((img, i) => img.classList.toggle('active', i === idx));
  document.getElementById('galleryDots').querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
    d.setAttribute('aria-selected', String(i === idx));
  });
  const counter = document.getElementById('galleryCounter');
  if (counter && galleryImgs.length > 1) counter.textContent = (idx + 1) + ' / ' + galleryImgs.length;
}

// ========== CLICKABLE RELATIONS IN MODAL ==========
const _charNameIndex = {};
(function() {
  const lastNameCount = {};
  Object.keys(characters).forEach(k => {
    if (k in cardAliases) return;
    const name = characters[k]?.name; if (!name) return;
    const words = name.split('/')[0].trim().split(' ');
    if (words.length > 1) { const ln = words[words.length - 1]; lastNameCount[ln] = (lastNameCount[ln] || 0) + 1; }
  });
  Object.keys(characters).forEach(k => {
    if (k in cardAliases) return;
    const name = characters[k]?.name; if (!name) return;
    const parts = name.split('/')[0].trim();
    _charNameIndex[parts] = k;
    const first = parts.split(' ')[0];
    if (first.length > 3) _charNameIndex[first] = k;
    const words = parts.split(' ');
    if (words.length > 1 && (lastNameCount[words[words.length - 1]] || 0) <= 1) {
      _charNameIndex[words[words.length - 1]] = k;
    }
  });
})();
const _charNamesSorted = Object.keys(_charNameIndex).sort((a, b) => b.length - a.length);

function makeRelationsClickable(relHTML) {
  _charNamesSorted.forEach(name => {
    const key = _charNameIndex[name];
    const regex = new RegExp('\\b(' + escRegex(name) + ')\\b(?![^<]*>)', 'g');
    relHTML = relHTML.replace(regex, '<span class="rel-link" data-goto="' + key + '">$1</span>');
  });
  return relHTML;
}

// ========== SHARE FUNCTIONALITY ==========
function copyLink(url, e) {
  const u = url || window.location.href;
  const evt = e || window.event;
  navigator.clipboard.writeText(u).then(() => {
    const btn = evt?.target?.closest?.('.share-btn');
    if (btn) { const orig = btn.innerHTML; btn.innerHTML = '\u2713 Copied!'; setTimeout(() => btn.innerHTML = orig, 1500); }
  });
}

function shareCharacter(name, key) {
  const url = 'https://game-of-thrones-tree.vercel.app/#' + key;
  const text = 'Check out ' + name + ' on this interactive Game of Thrones family tree \uD83D\uDC3A\uD83E\uDD81\uD83D\uDC09 Built by @triplethata';
  const shareHTML =
    '<a class="share-btn x-share" href="https://x.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url) + '" target="_blank" rel="noopener">\uD835\uDD4F Share</a>' +
    '<button class="share-btn copy-link" onclick="copyLink(\'' + url + '\',event)">\uD83D\uDCCB Copy Link</button>';
  document.getElementById('modalShare').innerHTML = shareHTML;
}

// ========== MODAL ==========
const _modalHistory = [];

function openModal(card, pushHistory) {
  const key = card.dataset.char;
  // Track navigation history for back button
  if (pushHistory !== false) {
    _modalHistory.push(key);
  }
  // Show/hide back button
  const backBtn = document.getElementById('modalBack');
  if (backBtn) backBtn.classList.toggle('visible', _modalHistory.length > 1);
  const ch = characters[key] || _cardFallbacks[key];
  if (!ch) return;

  renderGallery(key);

  // Spoiler-aware display
  const ds = deathSeason[key];
  const isSpoilerDeath = ds !== undefined && ds > currentSpoilerSeason;
  const reveal = spoilerReveals[key];
  const isSpoilerReveal = reveal && reveal.season > currentSpoilerSeason;
  const bSafe = bioSafeUpTo[key];
  const isBioSpoiler = bSafe !== undefined && currentSpoilerSeason < bSafe;

  const displayName = isSpoilerReveal ? reveal.safeName : ch.name;
  let displayTitle = isSpoilerReveal ? reveal.safeTitle : ch.title;
  if (!isSpoilerReveal) {
    const csd = cardSpoilerData[normalizeKey(key)];
    if (csd) {
      const entry = csd.find(d => currentSpoilerSeason >= d.min);
      if (entry?.title) displayTitle = entry.title;
    }
  }
  // Season-aware status: hide death details, resurrection info, imprisonment, etc.
  let displayStatus;
  if (isSpoilerDeath) {
    displayStatus = 'Alive';
  } else {
    // Strip spoilery parentheticals from status for safety
    let s = ch.status;
    // Jon: only show "(resurrected)" at S6+ (he's resurrected in S6E2)
    if (s && s.includes('resurrected') && currentSpoilerSeason < 6) s = 'Alive';
    // Strip season references from status text when at that exact season
    displayStatus = s;
  }

  // Bio & relations
  let displayBio, displayRelations, bioHidden = false;
  const nKey = normalizeKey(key);
  if (isSpoilerReveal) {
    displayBio = reveal.safeBio;
    displayRelations = reveal.safeRelations;
  } else if (tieredBios[nKey]) {
    const tier = tieredBios[nKey].find(t => currentSpoilerSeason <= t.max);
    if (tier) {
      displayBio = tier.bio;
      displayRelations = tier.relations;
    } else if (isBioSpoiler) {
      // No tier matches AND base bio has future spoilers — hide it
      displayBio = null;
      displayRelations = null;
      bioHidden = true;
    } else {
      displayBio = ch.bio;
      displayRelations = ch.relations;
    }
  } else if (isBioSpoiler) {
    displayBio = null;
    displayRelations = null;
    bioHidden = true;
  } else {
    displayBio = ch.bio;
    displayRelations = ch.relations;
  }

  document.getElementById('modalName').textContent = displayName;
  document.getElementById('modalTitle').textContent = displayTitle;

  // House badge
  const badge = document.getElementById('modalHouseBadge');
  badge.textContent = ch.house;
  badge.style.background = ch.color || 'var(--surface2)';

  // Status dot
  const isAlive = displayStatus.toLowerCase().startsWith('alive');
  const statusDot = '<span class="status-dot ' + (isAlive ? 'alive' : 'deceased') + '"></span>';

  let detailsHTML = '';
  detailsHTML += '<div class="detail-row"><span class="label">Status</span><span class="value">' + statusDot + displayStatus + '</span></div>';
  detailsHTML += '<div class="detail-row"><span class="label">Played by</span><span class="value">' + ch.actor + '</span></div>';
  document.getElementById('modalDetails').innerHTML = detailsHTML;

  // Relations
  const relSection = document.getElementById('modalRelations');
  if (displayRelations) {
    const groups = displayRelations.split('|').map(s => s.trim()).filter(Boolean);
    let relHTML = '<div class="section-label">Relations</div>';
    groups.forEach(group => {
      const colonIdx = group.indexOf(':');
      if (colonIdx > -1) {
        const type = group.substring(0, colonIdx).trim();
        const names = group.substring(colonIdx + 1).trim().split(',').map(n => n.trim()).filter(Boolean);
        relHTML += '<div class="relation-group"><div class="relation-type">' + type + '</div><div class="relation-chips">';
        names.forEach(name => {
          const clickable = makeRelationsClickable(name);
          relHTML += '<span class="relation-chip">' + clickable + '</span>';
        });
        relHTML += '</div></div>';
      } else {
        const clickable = makeRelationsClickable(group);
        relHTML += '<div class="relation-group"><div class="relation-chips"><span class="relation-chip">' + clickable + '</span></div></div>';
      }
    });
    relSection.innerHTML = relHTML;
    relSection.style.display = '';
  } else if (bioHidden) {
    relSection.innerHTML = '<div class="section-label">Relations</div><div style="color:var(--text-muted);font-style:italic;font-size:.8rem">Hidden by spoiler shield</div>';
    relSection.style.display = '';
  } else {
    relSection.innerHTML = '';
    relSection.style.display = 'none';
  }

  // Share button
  shareCharacter(displayName, key);

  // Bio with toggle
  const bioEl = document.getElementById('modalBio');
  const bioToggle = document.getElementById('bioToggle');
  if (bioHidden) {
    bioEl.innerHTML = '<span style="color:var(--text-muted);font-style:italic">Biography hidden \u2014 contains events from Season ' + bSafe + '+. Adjust your spoiler shield to reveal.</span>';
    bioEl.classList.remove('collapsed');
    bioToggle.style.display = 'none';
  } else if (displayBio) {
    bioEl.textContent = displayBio;
    if (displayBio.length > 180) {
      bioEl.classList.add('collapsed');
      bioToggle.style.display = 'block';
      bioToggle.textContent = 'Read more';
    } else {
      bioEl.classList.remove('collapsed');
      bioToggle.style.display = 'none';
    }
  } else {
    bioEl.textContent = '';
    bioToggle.style.display = 'none';
  }

  // Scroll modal to top
  document.querySelector('.modal').scrollTop = 0;
  window._lastFocusedCard = card;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  const closeBtn = document.getElementById('modalOverlay').querySelector('.modal-close');
  if (closeBtn) requestAnimationFrame(() => closeBtn.focus());
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) {
    closeModalDirect();
  }
}
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  _modalHistory.length = 0;
  const backBtn = document.getElementById('modalBack');
  if (backBtn) backBtn.classList.remove('visible');
  if (window._lastFocusedCard) { window._lastFocusedCard.focus(); window._lastFocusedCard = null; }
}
function modalGoBack() {
  if (_modalHistory.length <= 1) return;
  _modalHistory.pop(); // remove current
  const prevKey = _modalHistory[_modalHistory.length - 1];
  const prevCard = document.querySelector('.char-card[data-char="' + prevKey + '"]');
  if (prevCard) {
    _modalHistory.pop(); // will be re-added by openModal
    openModal(prevCard);
  }
}

function toggleBio() {
  const bio = document.getElementById('modalBio');
  const btn = document.getElementById('bioToggle');
  if (bio.classList.contains('collapsed')) {
    bio.classList.remove('collapsed');
    btn.textContent = 'Show less';
  } else {
    bio.classList.add('collapsed');
    btn.textContent = 'Read more';
  }
}

// ========== RELATIONSHIP GRAPH & PATHFINDER ==========
// Spoiler-sensitive edges: these relationships are only added to the graph at certain seasons
const _edgeSpoilerMin = {
  'jon|rhaegar': 7, 'jon|lyanna': 7, 'daenerys|jon': 7,
  'tommen|margaery': 5, 'sansa|tyrion': 3, 'sansa|ramsay': 5,
  'lysa|littlefinger': 4, 'littlefinger|sansa': 4,
  'jon|davos': 6, 'jon|melisandre': 6,
  'brienne|sansa': 6, 'brienne|jaime': 8,
  'varys|daenerys': 6, 'daenerys|tyrion': 6, 'daenerys|daario': 3,
  'ramsay|sansa': 5, 'ramsay|theon': 3,
  'nightking|arya': 8, 'mountain|oberyn': 4,
};
function _edgeKey(a,b){return [a,b].sort().join('|');}
const graph = {};
familyEdges.forEach(([a, b, rel]) => {
  if (!graph[a]) graph[a] = [];
  if (!graph[b]) graph[b] = [];
  const minSeason = _edgeSpoilerMin[_edgeKey(a,b)] || 0;
  graph[a].push({ to: b, rel, minSeason });
  graph[b].push({ to: a, rel: reverseRel(rel), minSeason });
});

function reverseRel(rel) {
  if (rel === 'parent') return 'child';
  if (rel === 'child') return 'parent';
  if (rel === 'parent (secret)') return 'child (secret)';
  if (rel === 'parent (bastard)') return 'child (bastard)';
  if (rel === 'ancestor') return 'descendant';
  if (rel === 'descendant') return 'ancestor';
  if (rel === 'knight/squire') return 'squire/knight';
  if (rel === 'squire/knight') return 'knight/squire';
  if (rel.includes('queen/')) return rel;
  if (rel.includes('king/')) return rel;
  return rel;
}

function bfsPath(start, end) {
  const s = normalizeKey(start), e = normalizeKey(end);
  if (s === e) return null;
  if (!graph[s] || !graph[e]) return null;
  const visited = new Set([s]);
  const parent = new Map();
  const season = currentSpoilerSeason;
  const queue = [s];
  let head = 0;
  while (head < queue.length) {
    const node = queue[head++];
    const neighbors = graph[node] || [];
    for (const { to, rel, minSeason } of neighbors) {
      if (visited.has(to)) continue;
      if (minSeason && season < minSeason) continue;
      parent.set(to, { from: node, rel });
      if (to === e) {
        const path = [];
        let cur = e;
        while (parent.has(cur)) {
          const p = parent.get(cur);
          path.unshift({ from: p.from, to: cur, rel: p.rel });
          cur = p.from;
        }
        return path;
      }
      visited.add(to);
      queue.push(to);
    }
  }
  return null;
}

function populateRelationDropdowns() {
  const chars = Object.keys(characters).filter(k => !/[0-9]$/.test(k) && k !== 'theon_s');
  chars.sort((a, b) => (characters[a]?.name || '').localeCompare(characters[b]?.name || ''));
  ['rfChar1', 'rfChar2'].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    chars.forEach(k => {
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = characters[k]?.name?.split('/')[0]?.trim() || k;
      sel.appendChild(opt);
    });
  });
}

function toggleRelationFinder() {
  document.getElementById('relationFinder').classList.toggle('open');
}

function findRelation() {
  const a = document.getElementById('rfChar1').value;
  const b = document.getElementById('rfChar2').value;
  const result = document.getElementById('rfResult');
  if (!a || !b) { result.innerHTML = ''; return; }
  if (a === b) { result.innerHTML = '<em>Same character!</em>'; return; }
  const path = bfsPath(a, b);
  if (!path) { result.innerHTML = '<em>No known connection found</em>'; return; }
  let html = '';
  const getName = k => '<span class="rf-path-step" data-char="' + k + '">' + getDisplayName(k).split(' ')[0] + '</span>';
  html += getName(a);
  path.forEach(step => {
    html += ' <span class="rf-path-link">\u2192 ' + step.rel + ' \u2192</span> ' + getName(step.to);
  });
  result.innerHTML = html;
}

// ========== DEEP LINKS / HASH ROUTING ==========
function handleHash() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;

  const charKey = hash.replace('sec-', '');
  if (characters[charKey] || _cardFallbacks[charKey]) {
    const card = document.querySelector('.char-card[data-char="' + charKey + '"]');
    if (card) {
      showSection('all');
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.click();
      }, 300);
    }
    return;
  }

  const section = document.getElementById('sec-' + hash) || document.getElementById(hash);
  if (section) {
    const house = section.dataset?.house;
    if (house) {
      showSection(house);
      setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }
}

// ========== IMAGE INJECTION ==========
function injectAvatarImages() {
  $charCards.forEach(card => {
    const key = card.dataset.char;
    const url = getCharImage(key);
    if (!url) return;
    const avatar = card.querySelector('.avatar');
    if (!avatar) return;
    const img = document.createElement('img');
    img.src = url;
    img.alt = card.querySelector('.name')?.textContent || '';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.onload = function() { this.style.opacity = '1'; avatar.style.animation = 'none'; };
    img.onerror = function() { this.remove(); avatar.style.animation = 'none'; };
    avatar.appendChild(img);
  });
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
  // Event delegation for character cards
  const container = document.getElementById('sectionsContainer');
  container.addEventListener('click', e => {
    const card = e.target.closest('.char-card');
    if (!card) return;
    openModal(card);
  });

  // Touch swipe support for gallery
  const track = document.getElementById('galleryTrack');
  if (track) {
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { gallerySlide(diff > 0 ? 1 : -1); }
    }, { passive: true });
  }

  // Focus trap + Escape for modal
  document.addEventListener('keydown', e => {
    const overlay = document.getElementById('modalOverlay');
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') {
      closeModalDirect();
      return;
    }
    if (e.key !== 'Tab') return;
    const modal = overlay.querySelector('.modal');
    const focusable = modal.querySelectorAll('button,a,[tabindex]:not([tabindex="-1"]),input,select,textarea');
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Keyboard: Enter/Space activates cards
  document.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('char-card')) {
      e.preventDefault(); e.target.click();
    }
  });

  // Keyboard navigation between cards
  document.addEventListener('keydown', e => {
    const overlay = document.getElementById('modalOverlay');
    if (overlay && overlay.classList.contains('open')) return;

    const active = document.activeElement;
    if (!active || !active.classList.contains('char-card')) return;

    const cards = [...$charCards].filter(c => c.style.display !== 'none');
    const idx = cards.indexOf(active);
    if (idx === -1) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = cards[idx + 1];
      if (next) next.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = cards[idx - 1];
      if (prev) prev.focus();
    }
  });

  // Modal relation links
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.addEventListener('click', e => {
      const link = e.target.closest('.rel-link');
      if (!link) return;
      e.stopPropagation();
      const key = link.dataset.goto;
      if (!key || !characters[key]) return;
      const card = document.querySelector('.char-card[data-char="' + key + '"]');
      if (card) card.click();
    });
  }

  // "How are they related?" path steps
  const rfResult = document.getElementById('rfResult');
  if (rfResult) {
    rfResult.addEventListener('click', e => {
      const step = e.target.closest('.rf-path-step');
      if (!step) return;
      const key = step.dataset.char;
      if (!key || !characters[key]) return;
      const card = document.querySelector('.char-card[data-char="' + key + '"]');
      if (card) card.click();
    });
  }

  // Event delegation for panels (avoids listener leaks on rebuild)
  delegateCharClick('overviewPanel', '.ov-card');
  delegateCharClick('connectionsPanel', '.conn-char');
  delegateCharClick('snapshotPanel', '.snapshot-char');

  // Hash change
  window.addEventListener('hashchange', handleHash);
  window.addEventListener('load', () => setTimeout(handleHash, 500));
}

// ========== SCROLL ANIMATIONS ==========
function setupScrollObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.05 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ========== SCROLL SPY ==========
function setupScrollSpy() {
  let spyTicking = false;
  const cachedNavHeight = document.querySelector('.nav')?.offsetHeight || 50;

  function updateScrollSpy() {
    if (overviewActive || snapshotActive || connectionsActive) return;
    if (currentHouse !== 'all') return;
    const trigger = cachedNavHeight + window.innerHeight * 0.2;
    let current = null;

    $houseSections.forEach(sec => {
      if (!sec.dataset.house) return;
      if (sec.style.display === 'none' || sec.offsetParent === null) return;
      const rect = sec.getBoundingClientRect();
      if (rect.top <= trigger) {
        current = sec;
      }
    });

    if (current) {
      const house = current.dataset.house;
      const activeBtn = document.querySelector('.nav-btn.active');
      if (activeBtn?.dataset.house !== house) {
        setActiveNav(house);
        if (current.id) history.replaceState(null, null, '#' + current.id);
      }
    }
  }

  window.addEventListener('scroll', () => {
    if (!spyTicking) {
      requestAnimationFrame(() => {
        updateScrollSpy();
        if ($backToTop) $backToTop.classList.toggle('visible', window.scrollY > 600);
        spyTicking = false;
      });
      spyTicking = true;
    }
  }, { passive: true });
}

// ========== LOAD SAVED SPOILER PREFERENCE ==========
function loadSpoilerPreference() {
  const saved = localStorage.getItem('got-spoiler-season');
  if (saved !== null) {
    const s = parseInt(saved);
    currentSpoilerSeason = s;
    const picker = document.getElementById('seasonPicker');
    if (picker) picker.value = s;
  }
  applySpoilerFilter(currentSpoilerSeason);
}

// ========== PWA SERVICE WORKER ==========
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

// ========== INITIALIZATION ==========
// 1. Render all sections from data
renderAllSections();

// 2. Cache DOM refs
initDomCache();

// 3. Inject images into avatars
injectAvatarImages();

// 4. Set up event listeners (delegation)
setupEventListeners();

// 5. Scroll animations
setupScrollObserver();

// 6. Scroll spy
setupScrollSpy();

// 7. Load saved spoiler preference
loadSpoilerPreference();

// 8. Populate relation finder dropdowns
populateRelationDropdowns();

// 9. Deep links
handleHash();

// 10. Register service worker
registerSW();
