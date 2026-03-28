// Locale UI strings — Traditional Chinese
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = '搜尋...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = '由 Obsidian Publish 驅動'; el.href = 'https://obsidian.md/zh-TW/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = '互動式關聯圖';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', '展開');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', '全域關聯圖');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = '本頁內容';
    document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { e.textContent = '反向連結'; });
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  setTimeout(apply, 1000);
  setTimeout(apply, 3000);
})();
