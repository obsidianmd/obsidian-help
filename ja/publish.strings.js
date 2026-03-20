// Locale UI strings — Japanese
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'ページや見出しを検索...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Obsidian Publish で作成'; el.href = 'https://obsidian.md/ja/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'インタラクティブグラフ';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', '展開');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'グローバルグラフ');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'このページの内容';
    el = document.querySelector('.backlinks span:last-child');
    if (el) el.textContent = 'このページへのリンク';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
})();
