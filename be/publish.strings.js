// Locale UI strings — Belarusian
window.LANG_SWITCHER_STRINGS = { search: "Змяніць мову...", noResults: "Вынікаў не знойдзена" };
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Шукаць...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Створана з дапамогай Obsidian Publish'; el.href = 'https://obsidian.md/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Інтэрактыўны граф';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Разгарнуць');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Глабальны граф');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'На гэтай старонцы';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Зваротныя спасылкі';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
