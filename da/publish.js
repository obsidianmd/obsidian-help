// Language switcher
(function () {
  const LOCALES = [
    { code: 'en',    label: 'English',            base: 'https://obsidian.md/help' },
    { code: 'ar',    label: 'العربية',            base: 'https://obsidian.md/ar/help' },
    { code: 'de',    label: 'Deutsch',            base: 'https://obsidian.md/de/help' },
    { code: 'es',    label: 'Español',            base: 'https://obsidian.md/es/help' },
    { code: 'fr',    label: 'Français',           base: 'https://obsidian.md/fr/help' },
    { code: 'id',    label: 'Bahasa Indonesia',   base: 'https://obsidian.md/id/help' },
    { code: 'it',    label: 'Italiano',           base: 'https://obsidian.md/it/help' },
    { code: 'ja',    label: '日本語',                base: 'https://obsidian.md/ja/help' },
    { code: 'ko',    label: '한국어',                base: 'https://obsidian.md/ko/help' },
    { code: 'pt-BR', label: 'Português (Brasil)', base: 'https://obsidian.md/pt-BR/help' },
    { code: 'ru',    label: 'Русский',            base: 'https://obsidian.md/ru/help' },
    { code: 'vi',    label: 'Tiếng Việt',         base: 'https://obsidian.md/vi/help' },
    { code: 'zh',    label: '中文',                 base: 'https://obsidian.md/zh/help' },
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

  function updateMenuLinks(menu) {
    const { cleanPath } = detectLocale();
    const hash = window.location.hash;
    menu.querySelectorAll('a[data-locale]').forEach(function (a) {
      const loc = LOCALES.find(l => l.code === a.dataset.locale);
      if (loc) a.href = loc.base + cleanPath + hash;
    });
  }

  function buildMenu() {
    const menu = document.createElement('ul');
    menu.className = 'lang-switcher-menu';
    menu.style.display = 'none';
    for (const locale of LOCALES) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.dataset.locale = locale.code;
      a.textContent = locale.label;
      if (locale.code === currentLocale) a.className = 'is-active';
      li.appendChild(a);
      menu.appendChild(li);
    }
    updateMenuLinks(menu);
    return menu;
  }

  function attachToggle(btn, menu) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (menu.style.display === 'none') {
        updateMenuLinks(menu);
        menu.style.display = 'flex';
      } else {
        menu.style.display = 'none';
      }
    });
    document.addEventListener('click', function () {
      menu.style.display = 'none';
    });
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
    btn.innerHTML = GLOBE_SVG + '<span>' + currentLocale.toUpperCase() + '</span>' + CHEVRON_SVG;
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

// Locale UI strings — Danish
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Søg efter sider eller overskrifter...';
    el = document.querySelector('.site-footer a');
    if (el) el.textContent = 'Drevet af Obsidian Publish';
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Interaktiv graf';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Udvid');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Global graf');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'På denne side';
    el = document.querySelector('.backlinks span:last-child');
    if (el) el.textContent = 'Links til denne side';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
})();
