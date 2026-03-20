// Locale UI strings — German
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Seiten oder Überschriften suchen...';
    el = document.querySelector('.site-footer a');
    if (el) el.textContent = 'Erstellt mit Obsidian Publish';
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Interaktiver Graph';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Ausklappen');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Globaler Graph');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Auf dieser Seite';
    el = document.querySelector('.backlinks span:last-child');
    if (el) el.textContent = 'Rückverweise';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
})();
