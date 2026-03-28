// Locale UI strings — Vietnamese
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Tìm kiếm...';
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
    document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { e.textContent = 'Liên kết đến trang này'; });
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  setTimeout(apply, 1000);
  setTimeout(apply, 3000);
})();
