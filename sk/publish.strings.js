// Locale UI strings — Slovak
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Hľadať...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Powered by Obsidian Publish'; el.href = 'https://obsidian.md/sk/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Interaktívny graf';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Rozbaliť');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Globálny graf');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Na tejto stránke';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Spätné odkazy';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
