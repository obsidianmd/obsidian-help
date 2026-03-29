// Locale UI strings — Dutch
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = "Pagina's of koppen zoeken...";
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Aangedreven door Obsidian Publish'; el.href = 'https://obsidian.md/nl/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Interactieve grafiek';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Uitbreiden');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Globale grafiek');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Op deze pagina';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Terugverwijzing';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
