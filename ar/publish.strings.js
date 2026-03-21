// Locale UI strings — Arabic
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'ابحث عن صفحات أو عناوين...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'مدعوم بواسطة Obsidian Publish'; el.href = 'https://obsidian.md/ar/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'رسم بياني تفاعلي';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'توسيع');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'رسم بياني شامل');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'في هذه الصفحة';
    el = document.querySelector('.backlinks span:last-child');
    if (el) el.textContent = 'روابط تؤدي لهذه الصفحة';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
})();
