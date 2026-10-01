/* Run before rendering to restore a visitor's palette without a flash. */
(() => {
  const themes = [{"id":"original","bg":"#f4f2eb"},{"id":"crimson","bg":"#1A1A1A"},{"id":"blue","bg":"#F5F3F3"},{"id":"graphite","bg":"#23262F"},{"id":"apricot","bg":"#FFD6A5"},{"id":"dragonfruit","bg":"#1E1033"},{"id":"neon","bg":"#2D1B69"},{"id":"iris","bg":"#3A0CA3"},{"id":"emerald","bg":"#F8E7C9"}];
  const root = document.documentElement;
  let current = 'original';
  try { const saved = localStorage.getItem('ajmal-theme'); if (themes.some(t => t.id === saved)) current = saved; } catch {}
  function apply(id) {
    const theme = themes.find(t => t.id === id);
    if (!theme) return;
    current = id;
    root.dataset.theme = id;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme.bg;
  }
  apply(current);
  document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('theme-dialog');
    const trigger = document.getElementById('theme-trigger');
    if (!dialog || !trigger) return;
    const options = [...dialog.querySelectorAll('[data-palette]')];
    function sync() { options.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.palette === current))); }
    sync();
    trigger.addEventListener('click', () => {
      dialog.showModal();
      document.body.classList.add('theme-open');
      trigger.setAttribute('aria-expanded', 'true');
      options.find(button => button.dataset.palette === current)?.focus();
    });
    dialog.querySelector('.theme-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => {
      const box = dialog.getBoundingClientRect();
      if (e.target === dialog && (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('theme-open');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus({preventScroll:true});
    });
    options.forEach(button => button.addEventListener('click', () => {
      apply(button.dataset.palette);
      sync();
      try { localStorage.setItem('ajmal-theme', current); } catch {}
      document.getElementById('theme-status').textContent = button.querySelector('.theme-name').textContent + ' theme selected.';
    }));
    window.addEventListener('storage', e => {
      if (e.key === 'ajmal-theme') { apply(themes.some(t=>t.id===e.newValue) ? e.newValue : 'original'); sync(); }
    });
  });
})();
