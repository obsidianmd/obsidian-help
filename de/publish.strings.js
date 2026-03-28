// Locale UI strings — German
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Suchen...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Erstellt mit Obsidian Publish'; el.href = 'https://obsidian.md/de/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Interaktiver Graph';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Ausklappen');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Globaler Graph');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Auf dieser Seite';
    document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { e.textContent = 'Rückverweise'; });
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  setTimeout(apply, 1000);
  setTimeout(apply, 3000);
})();
