// Módulo de modal: abrir/cerrar
export function setupModal(modalContainer, openBtn, closeBtn) {
  openBtn.addEventListener('click', () => {
    modalContainer.style.display = "block";
    modalContainer.setAttribute('tabindex', '0');
  });
  closeBtn.addEventListener('click', () => {
    modalContainer.style.display = "none";
    modalContainer.setAttribute('tabindex', '-1');
  });
  window.addEventListener('click', (e) => {
    if (e.target == modalContainer) modalContainer.style.display = "none";
  });
}
