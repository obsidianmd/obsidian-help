// Locale UI strings — Khmer
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'ស្វែងរក...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'ដំណើរការដោយ Obsidian Publish'; el.href = 'https://obsidian.md/km/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'ក្រាហ្វអន្តរកម្ម';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'ពង្រីក');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'ក្រាហ្វសកល');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'នៅលើទំព័រនេះ';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'តំណភ្ជាប់ខាងក្រោយ';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
