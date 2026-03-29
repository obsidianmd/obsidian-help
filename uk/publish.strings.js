// Locale UI strings — Ukrainian
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Пошук...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Працює на Obsidian Publish'; el.href = 'https://obsidian.md/uk/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Інтерактивний граф';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Розгорнути');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Глобальний граф');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'На цій сторінці';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Зворотні посилання';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
