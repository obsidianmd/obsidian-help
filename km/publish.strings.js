// Locale UI strings — Khmer
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'ស្វែងរកទំព័រ ឬក្បាលរឿង...';
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
    document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { e.textContent = 'តំណភ្ជាប់ខាងក្រោយ'; });
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  setTimeout(apply, 1000);
  setTimeout(apply, 3000);
})();
