(() => {
  const dialog = document.getElementById('team-profile');
  if (!dialog) return;
  let opener;
  document.querySelectorAll('[data-person]').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.team-card');
      document.getElementById('profile-name').textContent = card.querySelector('h3').textContent;
      document.getElementById('profile-role').textContent = card.querySelector('.team-role').textContent;
      opener = button;
      dialog.showModal();
      dialog.scrollTop = 0;
    });
  });
  dialog.querySelector('.profile-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => opener?.focus({preventScroll:true}));
})();

(() => {
  const dialog = document.getElementById('contact-dialog');
  const button = document.querySelector('.contact-open');
  if (!dialog || !button) return;
  button.addEventListener('click', () => dialog.showModal());
  dialog.querySelector('.contact-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => button.focus({preventScroll:true}));
})();
