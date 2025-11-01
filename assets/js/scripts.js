/* 
v2.6
https://github.com/Alplox/
*/
import { PERSONALIZED_BOOKMARKS } from "./bookmarks.js";
import { aplicarTema, detectarTemaSistema } from "./theme.js";
import { iniciarReloj } from "./clock.js";
import { populateBookmarks, activateTab } from "./bookmarks-ui.js";
import { setupModal } from "./modal.js";
import { searchEngines, search } from "./searchbar.js";

// Tema
const CHECKBOX_PERSONALIZAR_TEMA = document.querySelector('#boton-alternar-tema');
CHECKBOX_PERSONALIZAR_TEMA.addEventListener('change', () => {
    document.body.classList.remove('fade');
    aplicarTema(CHECKBOX_PERSONALIZAR_TEMA.checked, CHECKBOX_PERSONALIZAR_TEMA);
    document.body.classList.toggle('fade');
});
detectarTemaSistema(CHECKBOX_PERSONALIZAR_TEMA);

// Reloj
const FECHA_ELEMENT = document.querySelector("#fecha");
const HORA_ELEMENT = document.querySelector("#hora");
const PERIODO_ELEMENT = document.querySelector("#am-pm");
iniciarReloj(FECHA_ELEMENT, HORA_ELEMENT, PERIODO_ELEMENT);

// Bookmarks
const BOOKMARK_COLUMNS_TITLES = document.querySelectorAll('.bm-tab-title');
const BOOKMARK_COLUMNS_CONTENT = document.querySelectorAll('.bm-content');
BOOKMARK_COLUMNS_TITLES.forEach((column, i) => {
    column.textContent = PERSONALIZED_BOOKMARKS[i].name;
    populateBookmarks(BOOKMARK_COLUMNS_CONTENT[i], PERSONALIZED_BOOKMARKS[i].bookmarks);
    column.addEventListener('mouseenter', () => activateTab(BOOKMARK_COLUMNS_TITLES, BOOKMARK_COLUMNS_CONTENT, i));
});

// Modal
const MODAL_CONTAINER = document.querySelector("#modal");
const BOTON_MODAL = document.querySelector(".boton-open-modal");
const BOTON_CERRAR_MODAL = document.querySelector(".close");
setupModal(MODAL_CONTAINER, BOTON_MODAL, BOTON_CERRAR_MODAL);

// Buscador
const BARRA_BUSQUEDA = document.querySelector('#input-buscador');
const DEFAULT_ENGINE_KEY = 'd';
let selectedEngineKey = DEFAULT_ENGINE_KEY;

// Iconos ahora están en searchbar.js junto con los datos de cada buscador
function getEngineIcon(key) {
    return searchEngines[key]?.icon || "";
}

// Genera botones de motores de búsqueda
// Custom select: crear lista de opciones
const searchSelectBtn = document.getElementById('search-select-btn');
const searchSelectList = document.getElementById('search-select-list');

function renderSearchSelect() {
    // Botón compacto con icono
    searchSelectBtn.innerHTML = getEngineIcon(selectedEngineKey);
    searchSelectBtn.classList.toggle('active', true);
    searchSelectBtn.title = getEngineNameByKey(selectedEngineKey);

    // Lista de opciones
    searchSelectList.innerHTML = '';
    Object.entries(searchEngines).forEach(([key, engine]) => {
        const option = document.createElement('button');
        option.className = 'search-select-option' + (key === selectedEngineKey ? ' active' : '');
        option.innerHTML = `${getEngineIcon(key)} <span class="search-command">!${key}</span> <span class="search-name">${engine.name}</span>`;
        option.dataset.engineKey = key;
        option.type = 'button';
        option.tabIndex = 0;
        option.addEventListener('click', () => {
            selectedEngineKey = key;
            renderSearchSelect();
            searchSelectList.classList.remove('active');
            BARRA_BUSQUEDA.placeholder = `Buscar (${engine.name} seleccionado)`;
            BARRA_BUSQUEDA.focus();
        });
        searchSelectList.appendChild(option);
    });
}
renderSearchSelect();

// Mostrar/ocultar lista al hacer click en el botón
searchSelectBtn.addEventListener('click', () => {
    searchSelectList.classList.toggle('active');
});

// Cerrar lista al hacer click fuera
document.addEventListener('click', (e) => {
    if (!searchSelectBtn.contains(e.target) && !searchSelectList.contains(e.target)) {
        searchSelectList.classList.remove('active');
    }
});

function getEngineUrlByKey(key) {
    return searchEngines[key]?.url || searchEngines[DEFAULT_ENGINE_KEY].url;
}
function getEngineNameByKey(key) {
    return searchEngines[key]?.name || searchEngines[DEFAULT_ENGINE_KEY].name;
}

// Eventos de la barra de búsqueda
// Sincroniza el botón activo con el comando en el input
BARRA_BUSQUEDA.addEventListener('keyup', (e) => {
    const args = BARRA_BUSQUEDA.value.toLowerCase().split(' ');
    const prefix = args[0];
    let engineUrl = getEngineUrlByKey(selectedEngineKey);
    let str = 0;
    // Activar buscador por comando
    if (prefix.startsWith('!') && searchEngines[prefix.substring(1)]) {
        selectedEngineKey = prefix.substring(1);
        renderSearchSelect();
        BARRA_BUSQUEDA.placeholder = `Buscar (${getEngineNameByKey(selectedEngineKey)} seleccionado)`;
    }
    if (!prefix.startsWith('!')) {
        renderSearchSelect();
    }
    if (e.key === 'Enter') {
        if (prefix.startsWith('!')) {
            engineUrl = getEngineUrlByKey(prefix.substring(1));
            str = prefix.length + 1;
            selectedEngineKey = prefix.substring(1);
            renderSearchSelect();
            BARRA_BUSQUEDA.placeholder = `Buscar (${getEngineNameByKey(selectedEngineKey)} seleccionado)`;
        }
        search(engineUrl, args.join(' ').substring(str).trim());
    } else if (e.key === 'Escape') {
        BARRA_BUSQUEDA.value = '';
        BARRA_BUSQUEDA.blur();
        renderSearchSelect();
    }
});