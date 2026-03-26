// Locale UI strings — Persian (Farsi)
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'جست‌وجوی صفحه‌ها یا عنوان‌ها...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'ساخته‌شده با Obsidian Publish'; el.href = 'https://obsidian.md/fa/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'نمودار تعاملی';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'گستردن');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'نمودار کلی');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'در این صفحه';
    el = document.querySelector('.backlinks span:last-child');
    if (el) el.textContent = 'پشت‌وندها به این صفحه';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
})();
