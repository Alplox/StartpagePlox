/* 
Scripts v2.4
por Alplox 
https://github.com/Alplox/
*/

/* Acortadores */
const $d = {
  qS: e => document.querySelector(e),
  qA: e => document.querySelectorAll(e)
};

// dark mode
// https://youtu.be/xodD0nw2veQ
// https://daveyhert.hashnode.dev/how-to-create-animated-toggle-switches-with-just-css-and-implement-a-darkmode-feature
// https://youtu.be/wodWDIdV9BY

let temaActual = localStorage.getItem('tema')
const btnCambiaTema = $d.qS('#btn-cambia-tema');
/* const temaPreferidoDarkMode = window.matchMedia('(prefers-color-scheme: dark)'); */

const habilitarDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('tema', 'dark')
}

const deshabilitarDarkMode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('tema', 'light');
}

if (temaActual === 'dark') {
  habilitarDarkMode();
}

btnCambiaTema.addEventListener('change', () => {
  document.body.classList.remove('fade');
  temaActual = localStorage.getItem('tema');
  if(temaActual !== 'dark') {
    habilitarDarkMode()
  } else {
    deshabilitarDarkMode();
  }
  document.body.classList.add('fade');
})

// https://github.com/isai-ismael/reloj-digital
function reloj(){
  let fecha = $d.qS("#fecha");
  let hora = $d.qS("#hora");
  let amPm = $d.qS("#am-pm");

  let date = new Date();
  let semana = [ 
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
  ];
  let mes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  let diaNuevo;
  let estado;

  /* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */
  date.getHours() >= 12 ? estado = "PM" : estado = "AM";
  date.getDate() < 10 ? diaNuevo = `0${date.getDate()}` : diaNuevo = `${date.getDate()}`;
  
  fecha.textContent = `${semana[date.getDay()] + ", " + diaNuevo + " " + mes[date.getMonth()] + " " + date.getFullYear()}`;
  hora.textContent = `${date.toLocaleTimeString()}`;
  amPm.textContent = `${estado}`;
}
  
reloj();
setInterval(reloj,1000);

// Bookmark Table
const bmTabsTitle = $d.qA('.bm-tab-title');
const bmContent = $d.qA('.bm-content');

for (let i=0; i<bmTabsTitle.length; i++){
  bmTabsTitle[i].textContent = cards[i].name;
  let sites = Object.keys(cards[i].bookmarks);
    //Populate content with bookmarks
    for (let j=0; j<sites.length; j++){
      const a = document.createElement('a');
        a.textContent = sites[j];
        a.href = cards[i].bookmarks[sites[j]];
        a.setAttribute('rel', 'nofollow noreferrer');
      bmContent[i].append(a);
    }

    // Make tab active on mouse click
  bmTabsTitle[i].addEventListener('mouseenter', function(){
    for (let j=0; j<bmTabsTitle.length; j++){
      bmTabsTitle[j].classList.remove('active');
    }
    bmTabsTitle[i].classList.add('active');

    for (let j=0; j<bmContent.length; j++){
        bmContent[j].classList.remove('active');
    }
    bmContent[i].classList.add('active');
  })
}

// MODAL https://www.w3schools.com/howto/howto_css_modals.asp
const modal = $d.qS("#modal");
const btn = $d.qS(".btn-skull");
const span = $d.qS(".close");

btn.addEventListener('click', () => {
  modal.style.display = "block";
});

span.addEventListener('click', () =>{
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// SEARCH https://github.com/TB-96/Evening-Startpage

// https://www.npmjs.com/search?q=
// https://soundcloud.com/search/people?q=
// https://www.google.com/maps/search/
// https://github.com/search?q=
// https://www.reddit.com/r/
// https://aur.archlinux.org/packages/?O=0&K=
// https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=
// https://thepiratebay.org/search/
// https://www.reddit.com/search?q=
// https://www.etsy.com/search?q=

// You can add your own search query here for anything you're interested in.
// [command character]: ['search url', 'title']
function engines () {
  return {
    g: ["https://google.com/search?q=", "Google"],
    b: ["https://www.bing.com/search?q=", "Bing"],
    d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
    s: ["https://www.startpage.com/do/search?q=", "Startpage"],
    q: ["https://www.qwant.com/?q=", "Qwant"],
    y: ["https://you.com/search?q=", "You"],
    yt: ["https://youtube.com/results?search_query=", "Youtube"],
    i: ["https://google.com/search?tbm=isch&q=", "Google Images"],
    st: ["https://stackoverflow.com/search?q=", "Stackoverflow"],
    st_es: ["https://es.stackoverflow.com/search?q=", "Stackoverflow Español"],
    a: ["https://web.archive.org/web/*/", "Archive"],
    w: ["https://en.wikipedia.org/w/index.php?search=", "Wikipedia"],
  };
}

const barraBusquedaInput = $d.qS('#main-search');
const searchEngines = engines();

for (let key in searchEngines) {
  $d.qS('.search-engines').innerHTML += `<li><p title="${searchEngines[key][1]}">!${key}</p></li>`;
}

document.onkeydown = () => {
  barraBusquedaInput.focus()
  barraBusquedaInput.scrollIntoView();

  barraBusquedaInput.onkeyup = (e) => {
    // separa !comando de texto dps del espacio https://es.stackoverflow.com/a/207413 
    let args = e.target.value.toLowerCase().split(' ') 
    // lo separado en el string antes del espacio [0], lo luego del espacio queda en [1] / arg = argumento
    let prefix = args[0];   
    // buscador por defecto (Qwant), esto toma la url [0] de la key ['key']
    let engine = searchEngines['q'][0];
    let str = 0;
    // eng = engine
    $d.qA('.search-engines li p').forEach(eng => { 
      let current = eng.parentNode;
      // si lo escrito !comando es igual a lo de <p> 
      (prefix == eng.innerHTML)     
        ? current.classList.add('active')
        : current.classList.remove('active');
    });

    if (e.key == 'Enter') {
      if (prefix.indexOf('!') == 0) {
        // transforma engine a la url, str es nº inicio para extraer texto que le sigue
        // prefix.substr(1) = !g termino_a_buscar => g termino_a_buscar
        // (g = 2) = (str = 2 + 1) de forma que cuando (g buscar) extraiga el texto desde la posicion 3, siempre tras el espacio
        (engine = searchEngines[prefix.substr(1)][0], str = prefix.length + 1);
        // cambia ventana por direccion completa de busqueda
        window.location = engine + args.join(' ').substr(str).toString().replace(/\s+/m, '%20');
      } else {
        window.location = engine + args.join(' ').substr(str).toString().replace(/\s+/m, '%20');
      }
    } else if (e.keyCode == 27 || e.keyCode == 'Escape') {
      barraBusquedaInput.value = '',
      barraBusquedaInput.blur();
    };
  };
};

function removeActiveSearchEngine() {
  $d.qA('.search-engines li').forEach(eng => {
    eng.classList.remove('active');
  });
};

// cambiar buscador con clic
$d.qA('.search-engines li').forEach(eng => {
  eng.addEventListener('click', () => {
    barraBusquedaInput.focus();
    removeActiveSearchEngine();
    eng.classList.add('active');
    barraBusquedaInput.value = `${eng.textContent} `
  });
});

// barraBusquedaInput pierde focus
barraBusquedaInput.addEventListener('blur', () => {
  /* barraBusquedaInput.value = '' */
  removeActiveSearchEngine();
});