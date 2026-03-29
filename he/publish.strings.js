// Locale UI strings — Hebrew
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'חפש דפים או כותרות...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'מופעל על ידי Obsidian Publish'; el.href = 'https://obsidian.md/he/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'גרף אינטראקטיבי';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'להרחיב');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'גרף גלובלי');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'בדף זה';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'קישורים נכנסים';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
