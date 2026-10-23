// Locale UI strings — Arabic
window.LANG_SWITCHER_STRINGS = { search: "بدّل اللغة...", noResults: "لا توجد نتائج" };
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'البحث...';
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
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'روابط تؤدي لهذه الصفحة';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
