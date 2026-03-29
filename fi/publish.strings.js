// Locale UI strings — Finnish
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Hae...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Toimii Obsidian Publishilla'; el.href = 'https://obsidian.md/fi/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Interaktiivinen verkko';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Laajenna');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Koko verkon kaavio');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Tällä sivulla';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Paluulinkit';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
