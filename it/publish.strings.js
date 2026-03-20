// Locale UI strings — Italian
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Cerca pagine o intestazioni...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Realizzato con Obsidian Publish'; el.href = 'https://obsidian.md/it/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Grafo interattivo';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Espandi');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Grafo globale');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'In questa pagina';
    el = document.querySelector('.backlinks span:last-child');
    if (el) el.textContent = 'Riferimenti';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
})();
