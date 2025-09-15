// Módulo de reloj: fecha y hora
const DIAS_SEMANA = [
  "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
];
const MESES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
const OPCIONES_FORMATO = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
};

export function iniciarReloj(fechaEl, horaEl, periodoEl) {
  function reloj(){
    let date = new Date();
    const NUMERO_DIA = date.getDate().toString().padStart(2, '0');
    const TEXTO_DIA = DIAS_SEMANA[date.getDay()];
    const TEXTO_MES = MESES[date.getMonth()];
    const NUMERO_AÑO = date.getFullYear();
    const HORA_ACTUAL = date.toLocaleTimeString('es-ES', OPCIONES_FORMATO);
    const [HORA, PERIODO] = HORA_ACTUAL.split(' ');
    const PERIODO_CLEAN = PERIODO.replace(/[\.\s]/g, '');
    horaEl.textContent = HORA;
    periodoEl.textContent = PERIODO_CLEAN;
    fechaEl.textContent = `${TEXTO_DIA}, ${NUMERO_DIA} ${TEXTO_MES} ${NUMERO_AÑO}`;
  }
  reloj();
  setInterval(reloj, 1000);
}
