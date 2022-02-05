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

let tema_actual = localStorage.getItem('tema')
const btn_cambia_tema = $d.qS('#btn-cambia-tema');
/* const tema_preferido_dark = window.matchMedia('(prefers-color-scheme: dark)'); */

const habilitar_dark_mode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('tema', 'dark')
}

const desabilitar_dark_mode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('tema', 'light');
}

if (tema_actual === 'dark') {
    habilitar_dark_mode();
}

btn_cambia_tema.addEventListener('change', () => {
  document.body.classList.remove('fade');
  tema_actual = localStorage.getItem('tema');
        if(tema_actual !== 'dark') {
            habilitar_dark_mode()
        } else {
            desabilitar_dark_mode();
        }
    document.body.classList.add('fade');
})

// https://github.com/isai-ismael/reloj-digital
function reloj(){
  let fecha = $d.qS("#fecha");
  let hora = $d.qS("#hora");
  let am_pm = $d.qS("#am-pm");

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
  am_pm.textContent = `${estado}`;
}
  
reloj();
setInterval(reloj,1000);

// Bookmark Table
const tabs_title = $d.qA('.bm-tab-title');
const contents = $d.qA('.bm-content');

for (let i=0; i<tabs_title.length; i++){

  tabs_title[i].textContent = cards[i].name;

    let sites = Object.keys(cards[i].bookmarks);
    //Populate content with bookmarks
    for (let j=0; j<sites.length; j++){

        const a_link = document.createElement('a');
        a_link.textContent = sites[j];
        a_link.href = cards[i].bookmarks[sites[j]];
        a_link.setAttribute('rel', 'nofollow noreferrer');

        contents[i].appendChild(a_link);
    }

    // Make tab active on mouse click
    tabs_title[i].addEventListener('mouseenter', function(){
        for (let j=0; j<tabs_title.length; j++){
          tabs_title[j].classList.remove('active');
        }
        tabs_title[i].classList.add('active');

        for (let j=0; j<contents.length; j++){
            contents[j].classList.remove('active');
        }
        contents[i].classList.add('active');
    })
}

// MODAL https://www.w3schools.com/howto/howto_css_modals.asp
const modal = $d.qS("#modal");
const btn = $d.qS(".btn-skull");
const span = $d.qS(".close");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// SEARCH https://github.com/TB-96/Evening-Startpage

// https://www.npmjs.com/search?q=
// https://soundcloud.com/search/people?q=
// https://www.google.com/maps/search/
// https://github.com/search?q=
// https://www.reddit.com/r/
// https://aur.archlinux.org/packages/?O=0&K=
// https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=
// https://thepiratebay.org/search/
// https://www.bing.com/search?q=
// https://www.reddit.com/search?q=
// https://www.etsy.com/search?q=

// You can add your own search query here for anything you're interested in.
// [command character]: ['search url', 'title']
function engines () {
  return {
    g: ["https://google.com/search?q=", "Google"],
    d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
    s: ["https://www.startpage.com/do/search?q=", "Startpage"],
    q: ["https://www.qwant.com/?q=", "Qwant"],
    yt: ["https://youtube.com/results?search_query=", "Youtube"],
    i: ["https://google.com/search?tbm=isch&q=", "Google Images"],
    st: ["https://stackoverflow.com/search?q=", "Stackoverflow"],
    st_es: ["https://es.stackoverflow.com/search?q=", "Stackoverflow Español"],
    a: ["https://web.archive.org/web/*/", "Archive"],
    w: ["https://en.wikipedia.org/w/index.php?search=", "Wikipedia"],
  };
}

const search = $d.qS('#search');
const input = $d.qS('#search input[type="search"]');
    
const search_engines = engines();

for (let key in search_engines) {
  $d.qS('.search-engines').innerHTML += `<li><p title="${search_engines[key][1]}">!${key}</p></li>`;
}

document.onkeydown = () => {

  input.focus();
  input.scrollIntoView();

  search.onkeyup = (e) => {
    // separa !comando de texto dps del espacio https://es.stackoverflow.com/a/207413 
    let args   = e.target.value.toLowerCase().split(' ') 
    // lo separado en el string antes del espacio [0], lo luego del espacio queda en [1] / arg = argumento
    let prefix = args[0];   
    // buscador por defecto (Qwant), esto toma la url [0] de la key ['key']
    let engine = search_engines['q'][0];
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
        (engine = search_engines[prefix.substr(1)][0], str = prefix.length + 1);
        // cambia ventana por direccion completa de busqueda
        window.location = engine + args.join(' ').substr(str).toString().replace(/\s+/m, '%20');
      } else if (e.keyCode == 27) {
        input.value = '';
        input.blur()
      }
    };
  };
};

function remove_active() {
  $d.qA('.search-engines li').forEach(eng => {
    eng.classList.remove('active');
  });
};

// cambiar buscador con clic
$d.qA('.search-engines li').forEach(eng => {
  eng.addEventListener('click', () => {
    input.focus();
    remove_active();
    eng.classList.add('active');
    input.value = `${eng.textContent} `
  });
});

// input pierde focus
input.addEventListener('blur', () => {
  /* input.value = '' */
  remove_active();
});