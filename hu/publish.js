// Language switcher
(function () {
  const LOCALES = [
    { code: 'en',    label: 'English',            english: 'English',                     base: 'https://obsidian.md/help' },
    { code: 'ar',    label: 'العربية',            english: 'Arabic',                      base: 'https://obsidian.md/ar/help' },
    { code: 'bn',    label: 'বাংলা',              english: 'Bengali Bangla',              base: 'https://obsidian.md/bn/help' },
    { code: 'ca',    label: 'Català',             english: 'Catalan',                     base: 'https://obsidian.md/ca/help' },
    { code: 'cs',    label: 'Čeština',            english: 'Czech',                       base: 'https://obsidian.md/cs/help' },
    { code: 'da',    label: 'Dansk',              english: 'Danish',                      base: 'https://obsidian.md/da/help' },
    { code: 'de',    label: 'Deutsch',            english: 'German',                      base: 'https://obsidian.md/de/help' },
    { code: 'el',    label: 'Ελληνικά',           english: 'Greek',                       base: 'https://obsidian.md/el/help' },
    { code: 'es',    label: 'Español',            english: 'Spanish Castilian',           base: 'https://obsidian.md/es/help' },
    { code: 'fa',    label: 'فارسی',              english: 'Persian Farsi',               base: 'https://obsidian.md/fa/help' },
    { code: 'fi',    label: 'Suomi',              english: 'Finnish',                     base: 'https://obsidian.md/fi/help' },
    { code: 'fr',    label: 'Français',           english: 'French',                      base: 'https://obsidian.md/fr/help' },
    { code: 'he',    label: 'עברית',              english: 'Hebrew',                      base: 'https://obsidian.md/he/help' },
    { code: 'hu',    label: 'Magyar',             english: 'Hungarian',                   base: 'https://obsidian.md/hu/help' },
    { code: 'id',    label: 'Bahasa Indonesia',   english: 'Indonesian',                  base: 'https://obsidian.md/id/help' },
    { code: 'it',    label: 'Italiano',           english: 'Italian',                     base: 'https://obsidian.md/it/help' },
    { code: 'ja',    label: '日本語',                english: 'Japanese',                    base: 'https://obsidian.md/ja/help' },
    { code: 'km',    label: 'ខ្មែរ',              english: 'Khmer Cambodian',             base: 'https://obsidian.md/km/help' },
    { code: 'ko',    label: '한국어',                english: 'Korean',                      base: 'https://obsidian.md/ko/help' },
    { code: 'no',    label: 'Norsk',              english: 'Norwegian',                   base: 'https://obsidian.md/no/help' },
    { code: 'nl',    label: 'Nederlands',         english: 'Dutch',                       base: 'https://obsidian.md/nl/help' },
    { code: 'pl',    label: 'Polski',             english: 'Polish',                      base: 'https://obsidian.md/pl/help' },
    { code: 'pt',    label: 'Português',          english: 'Portuguese',                  base: 'https://obsidian.md/pt/help' },
    { code: 'pt-BR', label: 'Português (Brasil)', english: 'Portuguese Brazilian',        base: 'https://obsidian.md/pt-BR/help' },
    { code: 'sk',    label: 'Slovenčina',         english: 'Slovak',                      base: 'https://obsidian.md/sk/help' },
    { code: 'ro',    label: 'Română',             english: 'Romanian',                    base: 'https://obsidian.md/ro/help' },
    { code: 'ru',    label: 'Русский',            english: 'Russian',                     base: 'https://obsidian.md/ru/help' },
    { code: 'sv',    label: 'Svenska',            english: 'Swedish',                     base: 'https://obsidian.md/sv/help' },
    { code: 'th',    label: 'ภาษาไทย',            english: 'Thai',                        base: 'https://obsidian.md/th/help' },
    { code: 'tr',    label: 'Türkçe',             english: 'Turkish',                     base: 'https://obsidian.md/tr/help' },
    { code: 'uk',    label: 'Українська',         english: 'Ukrainian',                   base: 'https://obsidian.md/uk/help' },
    { code: 'vi',    label: 'Tiếng Việt',         english: 'Vietnamese',                  base: 'https://obsidian.md/vi/help' },
    { code: 'zh-TW', label: '繁體中文',               english: 'Chinese Traditional',         base: 'https://obsidian.md/zh-TW/help' },
    { code: 'zh',    label: '中文',                 english: 'Chinese Simplified Mandarin', base: 'https://obsidian.md/zh/help' },
  ];

  function detectLocale() {
    const p = window.location.pathname;
    for (const loc of LOCALES) {
      if (loc.code === 'en') continue;
      const prefix = '/' + loc.code + '/help';
      if (p.startsWith(prefix)) {
        return { currentLocale: loc.code, cleanPath: p.slice(prefix.length) || '/' };
      }
    }
    return { currentLocale: 'en', cleanPath: p.slice('/help'.length) || '/' };
  }

  const { currentLocale } = detectLocale();
  const current = LOCALES.find(l => l.code === currentLocale);

  const GLOBE_SVG = '<svg class="lang-switcher-globe" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>';
  const CHEVRON_SVG = '<svg class="lang-switcher-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  const SEARCH_SVG = '<svg class="lang-switcher-search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';

  // Set by <locale>/publish.strings.js, which is appended after this block and
  // so has run by the time the menu is built during polling. English is the
  // fallback for locales with no strings file.
  function strings() {
    return window.LANG_SWITCHER_STRINGS || {};
  }

  // Lowercase and strip diacritics so "francais" matches "Français".
  function normalize(s) {
    return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // Scroll an option into view within the list, without moving the page.
  function revealIn(container, el) {
    const er = el.getBoundingClientRect();
    const cr = container.getBoundingClientRect();
    if (er.top < cr.top) container.scrollTop += er.top - cr.top;
    else if (er.bottom > cr.bottom) container.scrollTop += er.bottom - cr.bottom;
  }

  function updateMenuLinks(menu) {
    const { cleanPath } = detectLocale();
    const hash = window.location.hash;
    menu.querySelectorAll('a[data-locale]').forEach(function (a) {
      const loc = LOCALES.find(l => l.code === a.dataset.locale);
      if (loc) a.href = loc.base + cleanPath + hash;
    });
  }

  function detectSystemLocale() {
    const langs = navigator.languages || [navigator.language || ''];
    for (const lang of langs) {
      const exact = LOCALES.find(l => l.code.toLowerCase() === lang.toLowerCase());
      if (exact) return exact.code;
      const base = lang.toLowerCase().split('-')[0];
      const match = LOCALES.find(l => l.code.toLowerCase().split('-')[0] === base);
      if (match) return match.code;
    }
    return null;
  }

  let menuCount = 0;

  function buildMenu() {
    const id = ++menuCount;
    const menu = document.createElement('div');
    menu.className = 'lang-switcher-menu';
    menu.style.display = 'none';

    const search = document.createElement('input');
    search.type = 'text';
    search.className = 'lang-switcher-search';
    search.placeholder = strings().search || 'Switch language...';
    search.autocomplete = 'off';
    search.spellcheck = false;
    search.setAttribute('aria-label', search.placeholder);
    search.setAttribute('role', 'combobox');
    search.setAttribute('aria-expanded', 'false');
    search.setAttribute('aria-autocomplete', 'list');
    search.setAttribute('aria-controls', 'lang-switcher-list-' + id);

    const searchRow = document.createElement('div');
    searchRow.className = 'lang-switcher-search-row';
    searchRow.innerHTML = SEARCH_SVG;
    searchRow.appendChild(search);
    menu.appendChild(searchRow);

    const list = document.createElement('ul');
    list.className = 'lang-switcher-list';
    list.id = 'lang-switcher-list-' + id;
    list.setAttribute('role', 'listbox');
    menu.appendChild(list);

    const systemCode = detectSystemLocale();
    const systemLocale = systemCode ? LOCALES.find(l => l.code === systemCode) : null;
    const enLocale = LOCALES.find(l => l.code === 'en');
    const rest = LOCALES
      .filter(l => l !== systemLocale && l !== enLocale)
      .sort((a, b) => a.code.localeCompare(b.code));

    // System locale first, then English, then the rest by code. Filtering and
    // arrow keys walk this order rather than reordering it.
    const ordered = [];
    if (systemLocale) ordered.push(systemLocale);
    if (enLocale && enLocale !== systemLocale) ordered.push(enLocale);
    ordered.push(...rest);

    const items = [];
    const haystacks = [];
    let currentIndex = 0;
    ordered.forEach(function (locale, i) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.dataset.locale = locale.code;
      a.textContent = locale.label;
      a.id = 'lang-switcher-opt-' + id + '-' + i;
      a.setAttribute('role', 'option');
      if (locale.code === currentLocale) {
        a.className = 'is-active';
        a.setAttribute('aria-selected', 'true');
        currentIndex = i;
      } else {
        a.setAttribute('aria-selected', 'false');
      }
      li.appendChild(a);
      list.appendChild(li);
      items.push(a);
      haystacks.push(normalize(locale.label + ' ' + (locale.english || '') + ' ' + locale.code));
    });

    const empty = document.createElement('li');
    empty.className = 'lang-switcher-empty';
    empty.textContent = strings().noResults || 'No results';
    empty.style.display = 'none';
    list.appendChild(empty);

    let active = currentIndex;

    function isHidden(i) {
      return items[i].parentElement.style.display === 'none';
    }

    function visibleIndexes() {
      const out = [];
      for (let i = 0; i < items.length; i++) if (!isHidden(i)) out.push(i);
      return out;
    }

    function setActive(index) {
      active = index;
      items.forEach(function (a, i) {
        a.classList.toggle('is-highlighted', i === index);
      });
      const el = items[index];
      if (el) {
        search.setAttribute('aria-activedescendant', el.id);
        revealIn(list, el.parentElement);
      } else {
        search.removeAttribute('aria-activedescendant');
      }
    }

    function move(delta) {
      const visible = visibleIndexes();
      if (!visible.length) return;
      const at = visible.indexOf(active);
      if (at === -1) setActive(delta > 0 ? visible[0] : visible[visible.length - 1]);
      else setActive(visible[(at + delta + visible.length) % visible.length]);
    }

    function filter(query) {
      const q = normalize(query.trim());
      let matches = 0;
      items.forEach(function (a, i) {
        const hit = !q || haystacks[i].indexOf(q) !== -1;
        a.parentElement.style.display = hit ? '' : 'none';
        if (hit) matches++;
      });
      empty.style.display = matches ? 'none' : '';
      const visible = visibleIndexes();
      setActive(visible.indexOf(active) !== -1 ? active : (visible.length ? visible[0] : -1));
    }

    search.addEventListener('input', function () { filter(search.value); });

    menu.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Home') {
        const v = visibleIndexes();
        if (v.length) { e.preventDefault(); setActive(v[0]); }
      } else if (e.key === 'End') {
        const v = visibleIndexes();
        if (v.length) { e.preventDefault(); setActive(v[v.length - 1]); }
      } else if (e.key === 'Enter') {
        if (items[active] && !isHidden(active)) { e.preventDefault(); items[active].click(); }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        menu.close();
      } else if (e.key === 'Tab') {
        menu.close();
      }
    });

    // Keep mouse and keyboard from disagreeing about which row is selected.
    list.addEventListener('mousemove', function (e) {
      const a = e.target.closest('a');
      const i = a ? items.indexOf(a) : -1;
      if (i !== -1 && i !== active) setActive(i);
    });

    // Re-read on every open. inject() runs synchronously first, so on a page
    // that is already rendered the menu can be built before the locale's
    // strings file has executed — applying them here removes that race.
    function applyStrings() {
      const s = strings();
      search.placeholder = s.search || 'Switch language...';
      search.setAttribute('aria-label', search.placeholder);
      empty.textContent = s.noResults || 'No results';
    }

    menu.setOpen = function (open) {
      menu.style.display = open ? 'flex' : 'none';
      search.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (!open) return;
      applyStrings();
      search.value = '';
      filter('');
      list.scrollTop = 0;
      setActive(currentIndex);
      // Focusing on touch would raise the keyboard over most of the list.
      if (window.matchMedia('(pointer: fine)').matches) search.focus();
    };
    menu.close = function () { menu.setOpen(false); };
    menu.isOpen = function () { return menu.style.display !== 'none'; };

    updateMenuLinks(menu);
    return menu;
  }

  function attachToggle(btn, menu) {
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');

    const baseClose = menu.close;
    menu.close = function (returnFocus) {
      if (!menu.isOpen()) return;
      baseClose();
      btn.setAttribute('aria-expanded', 'false');
      if (returnFocus !== false) btn.focus();
    };

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (menu.isOpen()) {
        menu.close();
        return;
      }
      // Publish is a single-page app: rebuild hrefs against the current path.
      updateMenuLinks(menu);
      menu.setOpen(true);
      btn.setAttribute('aria-expanded', 'true');
    });
    btn.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      e.preventDefault();
      if (!menu.isOpen()) btn.click();
    });
    menu.addEventListener('click', function (e) { e.stopPropagation(); });
    document.addEventListener('click', function () { menu.close(false); });
  }

  function buildSidebarSwitcher() {
    const div = document.createElement('div');
    div.className = 'lang-switcher';
    const btn = document.createElement('button');
    btn.className = 'lang-switcher-btn';
    btn.type = 'button';
    btn.innerHTML = GLOBE_SVG + '<span>' + current.label + '</span>' + CHEVRON_SVG;
    const menu = buildMenu();
    attachToggle(btn, menu);
    div.appendChild(btn);
    div.appendChild(menu);
    return div;
  }

  function buildHeaderSwitcher() {
    const div = document.createElement('div');
    div.className = 'lang-switcher lang-switcher-header';
    const btn = document.createElement('button');
    btn.className = 'lang-switcher-btn';
    btn.type = 'button';
    btn.innerHTML = GLOBE_SVG + '<span>' + currentLocale.toUpperCase() + '</span>';
    const menu = buildMenu();
    attachToggle(btn, menu);
    div.appendChild(btn);
    div.appendChild(menu);
    return div;
  }

  // Skip switcher injection for locales not in the dropdown
  let sidebarDone = !current;
  let headerDone = !current;

  function inject() {
    if (!sidebarDone) {
      const col = document.querySelector('.site-body-left-column-inner');
      if (col && !col.querySelector('.lang-switcher')) {
        const search = col.querySelector('.search-view-outer');
        const switcher = buildSidebarSwitcher();
        if (search) col.insertBefore(switcher, search);
        else col.appendChild(switcher);
        sidebarDone = true;
      }
    }
    if (!headerDone) {
      const header = document.querySelector('.site-header');
      if (header && !header.querySelector('.lang-switcher-header')) {
        header.appendChild(buildHeaderSwitcher());
        headerDone = true;
      }
    }
    return sidebarDone && headerDone;
  }

  function poll() {
    if (!inject()) {
      requestAnimationFrame(poll);
    }
  }

  poll();
})();

// Locale UI strings — Hungarian
window.LANG_SWITCHER_STRINGS = { search: "Nyelv váltása...", noResults: "Nincs találat" };
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Keresés...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Az Obsidian Publish üzemelteti'; el.href = 'https://obsidian.md/hu/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Interaktív gráf';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Kibontás');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Globális gráf');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Ezen az oldalon';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Visszahivatkozások';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
