// Locale UI strings — Persian (Farsi)
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'جست‌وجو...';
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
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'پشت‌وندها به این صفحه';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
