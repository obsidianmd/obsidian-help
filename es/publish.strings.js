// Locale UI strings — Spanish
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Buscar páginas o encabezados...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Desarrollado con Obsidian Publish'; el.href = 'https://obsidian.md/es/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Gráfico interactivo';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Expandir');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Gráfico global');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'En esta página';
    el = document.querySelector('.backlinks span:last-child');
    if (el) el.textContent = 'Páginas que enlazan aquí';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
})();
