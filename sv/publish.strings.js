// Locale UI strings — Swedish
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Sök...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Drivs av Obsidian Publish'; el.href = 'https://obsidian.md/sv/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Interaktiv graf';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Expandera');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Global graf');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'På den här sidan';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Bakåtlänkar';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
