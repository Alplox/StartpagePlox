// Módulo de modal: abrir/cerrar
export function setupModal(modalContainer, openBtn, closeBtn) {
  openBtn.addEventListener('click', () => {
    modalContainer.classList.add('modal-visible');
    modalContainer.setAttribute('tabindex', '0');
    modalContainer.focus();
  });
  closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('modal-visible');
    modalContainer.setAttribute('tabindex', '-1');
  });
  window.addEventListener('click', (e) => {
    if (e.target == modalContainer) {
      modalContainer.classList.remove('modal-visible');
      modalContainer.setAttribute('tabindex', '-1');
    }
  });
}
