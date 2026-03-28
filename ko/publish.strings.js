// Locale UI strings — Korean
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = '검색...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Obsidian Publish 기반'; el.href = 'https://obsidian.md/ko/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = '인터랙티브 그래프';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', '확장');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', '전체 그래프');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = '이 페이지에서';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = '백링크';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
