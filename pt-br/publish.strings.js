// Locale UI strings — Brazilian Portuguese
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Pesquisar páginas ou títulos...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Desenvolvido com Obsidian Publish'; el.href = 'https://obsidian.md/pt-BR/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Gráfico interativo';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Expandir');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Gráfico global');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Nesta página';
    el = document.querySelector('.backlinks span:last-child');
    if (el) el.textContent = 'Links de entrada';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
})();
