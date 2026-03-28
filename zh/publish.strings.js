// Locale UI strings — Chinese
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = '搜索...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = '由 Obsidian Publish 驱动'; el.href = 'https://obsidian.md/zh/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = '关系图谱';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', '展开');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', '全局关系图');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = '本页内容';
    document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { e.textContent = '链接到本页'; });
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  setTimeout(apply, 1000);
  setTimeout(apply, 3000);
})();
