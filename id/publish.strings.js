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
    document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { e.textContent = 'Tautan ke halaman ini'; });
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  setTimeout(apply, 1000);
  setTimeout(apply, 3000);
})();
