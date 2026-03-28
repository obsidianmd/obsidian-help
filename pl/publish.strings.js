// Locale UI strings — Polish
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Szukaj stron lub nagłówków...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Zasilane przez Obsidian Publish'; el.href = 'https://obsidian.md/pl/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Interaktywny graf';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Rozwiń');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Globalny graf');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Na tej stronie';
    el = document.querySelector('.backlinks span:last-child');
    if (el) el.textContent = 'Linki zwrotne';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
})();
