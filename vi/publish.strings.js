// Locale UI strings — Vietnamese
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Tìm kiếm trang hoặc tiêu đề...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Được tạo bởi Obsidian Publish'; el.href = 'https://obsidian.md/vi/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Biểu đồ tương tác';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Mở rộng');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Biểu đồ toàn cục');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Trên trang này';
    el = document.querySelector('.backlinks span:last-child');
    if (el) el.textContent = 'Liên kết đến trang này';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
})();
