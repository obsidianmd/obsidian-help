// Locale UI strings — Portuguese
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Pesquisar...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Desenvolvido pelo Obsidian Publish'; el.href = 'https://obsidian.md/pt/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Grafo interativo';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Expandir');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Grafo global');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Nesta página';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Links inversos';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
