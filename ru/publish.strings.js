// Locale UI strings — Russian
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Поиск...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Создано с помощью Obsidian Publish'; el.href = 'https://obsidian.md/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Интерактивный граф';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Развернуть');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Глобальный граф');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'На этой странице';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Обратные ссылки';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
