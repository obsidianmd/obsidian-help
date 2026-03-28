// Locale UI strings — Thai
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (\!el) return false;
    el.placeholder = 'ค้นหา...';
    el = document.querySelector('.site-footer a');
    if (el) { el.textContent = 'สร้างด้วย Obsidian Publish'; el.href = 'https://obsidian.md/th/publish'; }
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = 'กราฟเชิงโต้ตอบ';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', 'ขยาย');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', 'กราฟทั้งหมด');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = 'ในหน้านี้';
    return true;
  }
  function poll() { if (\!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = 'ลิงก์ไปยังหน้านี้';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { if (e.textContent \!== blText) e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
