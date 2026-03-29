// Locale UI strings — Greek
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = 'Αναζήτηση...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'Με την υποστήριξη του Obsidian Publish'; el.href = 'https://obsidian.md/el/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'Διαδραστικό γράφο';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'Επεκτείνετε');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'Παγκόσμιο γράφο');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'Σε αυτή τη σελίδα';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'Οπισθοσύνδεσμοι';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent !== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
