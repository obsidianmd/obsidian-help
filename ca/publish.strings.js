// Locale UI strings — Catalan
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Cerca...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Impulsat per Obsidian Publish'; el.href = 'https://obsidian.md/ca/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Graf interactiu';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Amplia');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Graf global');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'En aquesta pàgina';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Retroenllaços';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
