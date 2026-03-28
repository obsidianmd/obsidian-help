// Locale UI strings — Turkish
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Ara...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Obsidian Publish ile oluşturuldu'; el.href = 'https://obsidian.md/tr/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Etkileşimli grafik';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Göster');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Genel grafik');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Bu sayfada';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Geri Bağlantılar';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
