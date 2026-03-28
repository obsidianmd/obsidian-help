// Locale UI strings — Indonesian
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Penelusuran...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Dibuat dengan Obsidian Publish'; el.href = 'https://obsidian.md/id/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Grafik interaktif';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Perluas');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Grafik global');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Di halaman ini';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Tautan ke halaman ini';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
