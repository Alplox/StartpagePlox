// Módulo de tema: cambio y detección de tema
export function aplicarTema(esTemaOscuro, checkbox) {
    if (esTemaOscuro) {
      checkbox.checked = true;
      document.body.classList.add('dark-mode');
      localStorage.setItem('tema', 'dark')
    } else {
      checkbox.checked = false;
      document.body.classList.remove('dark-mode');
      localStorage.setItem('tema', 'light');
    }
}

export function detectarTemaSistema(checkbox) {
    const TEMA_LOCALSTORAGE = localStorage.getItem('tema');
    const PREFIERE_TEMA_OSCURO = window.matchMedia("(prefers-color-scheme: dark)").matches;
    aplicarTema(TEMA_LOCALSTORAGE === null ? PREFIERE_TEMA_OSCURO : TEMA_LOCALSTORAGE === 'dark', checkbox);
}
