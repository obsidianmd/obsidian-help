// Locale UI strings — French
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Rechercher...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Propulsé par Obsidian Publish'; el.href = 'https://obsidian.md/fr/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Graphe interactif';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Agrandir');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Graphe global');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Sur cette page';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Liens vers cette page';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
