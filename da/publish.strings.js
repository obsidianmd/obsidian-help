// Locale UI strings — Danish
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Søg efter sider eller overskrifter...';
    el = document.querySelector('.site-footer a');
    if (el) el.textContent = 'Drevet af Obsidian Publish';
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Interaktiv graf';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Udvid');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Global graf');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'På denne side';
    el = document.querySelector('.backlinks span:last-child');
    if (el) el.textContent = 'Links til denne side';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
})();
