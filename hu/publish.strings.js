// Locale UI strings — Hungarian
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Keresés...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Az Obsidian Publish üzemelteti'; el.href = 'https://obsidian.md/hu/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Interaktív gráf';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Kibontás');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Globális gráf');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Ezen az oldalon';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Visszahivatkozások';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
