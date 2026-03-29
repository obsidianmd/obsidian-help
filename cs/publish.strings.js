// Locale UI strings — Czech
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Hledat...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Provozováno pomocí Obsidian Publish'; el.href = 'https://obsidian.md/cs/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Interaktivní graf';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Zobrazit');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Globální graf');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Na této stránce';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Zpětné odkazy';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
