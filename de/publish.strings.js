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
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Rückverweise';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
