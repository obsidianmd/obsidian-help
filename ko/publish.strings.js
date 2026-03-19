// Locale UI strings — Korean
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = '페이지 또는 제목 검색...';
    el = document.querySelector('.site-footer a');
    if (el) el.textContent = 'Obsidian Publish로 제작';
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = '인터랙티브 그래프';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', '확장');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', '전체 그래프');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = '이 페이지에서';
    el = document.querySelector('.backlinks span:last-child');
    if (el) el.textContent = '이 페이지로의 링크';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
})();
