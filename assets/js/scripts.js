/* 
v2.5
https://github.com/Alplox/
*/
const CHECKBOX_PERSONALIZAR_TEMA = document.querySelector('#boton-alternar-tema');

CHECKBOX_PERSONALIZAR_TEMA.addEventListener('change', () => {
  document.body.classList.remove('fade');
  aplicarTema(CHECKBOX_PERSONALIZAR_TEMA.checked)
  document.body.classList.toggle('fade');
})

function aplicarTema(esTemaOscuro) {
    if (esTemaOscuro) {
      CHECKBOX_PERSONALIZAR_TEMA.checked = true;
      document.body.classList.add('dark-mode');
      localStorage.setItem('tema', 'dark')
    } else {
      CHECKBOX_PERSONALIZAR_TEMA.checked = false;
      document.body.classList.remove('dark-mode');
      localStorage.setItem('tema', 'light');
    }
}

function detectarTemaSistema() {
    const TEMA_LOCALSTORAGE = localStorage.getItem('tema');
    const PREFIERE_TEMA_OSCURO = window.matchMedia("(prefers-color-scheme: dark)").matches;
    aplicarTema(TEMA_LOCALSTORAGE === null ? PREFIERE_TEMA_OSCURO : TEMA_LOCALSTORAGE === 'dark');
}

detectarTemaSistema()

const FECHA_ELEMENT = document.querySelector("#fecha");
const HORA_ELEMENT = document.querySelector("#hora");
const PERIODO_ELEMENT = document.querySelector("#am-pm");

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

function reloj(){
  let date = new Date();

  const NUMERO_DIA = date.getDate().toString().padStart(2, '0');
  const TEXTO_DIA = DIAS_SEMANA[date.getDay()];
  const TEXTO_MES = MESES[date.getMonth()];
  const NUMERO_AÑO = date.getFullYear();

  const HORA_ACTUAL = date.toLocaleTimeString('es-ES', OPCIONES_FORMATO);
  const [HORA, PERIODO] = HORA_ACTUAL.split(' '); // Separar el "AM" o "PM" del resto de la hora
  const PERIODO_CLEAN = PERIODO.replace(/[\.\s]/g, '');

  HORA_ELEMENT.textContent = HORA;
  PERIODO_ELEMENT.textContent = PERIODO_CLEAN;
  FECHA_ELEMENT.textContent = `${TEXTO_DIA}, ${NUMERO_DIA} ${TEXTO_MES} ${NUMERO_AÑO}`;
}
  
reloj();
setInterval(reloj,1000);

const PERSONALIZED_BOOKMARKS = [
	{
    name: "Bruh",
    bookmarks: {
      "Teles": "https://alplox.github.io/teles/",
      "Google News": "https://news.google.com",
      "Microsoft News": "https://microsoftnews.msn.com/",
      "Google Trends": "https://trends.google.com/trends/trendingsearches/daily?geo=CL",
      "💬OpenAI Chat": "https://chatgpt.com/",
      "💬Bing Chat": "https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx",
      "💬Perplexity": "https://www.perplexity.ai/",
      "💬You Chat": "https://you.com/search?q=&tbm=youchat&cfr=chat",
      "💬Gemini Chat": "https://gemini.google.com/",
      "💬Poe Chat": "https://poe.com/",
      "💬LMSYS Chatbots": "https://chat.lmsys.org/",
      "Gmail": "https://mail.google.com/",
      "Google Keep": "https://keep.google.com/u/0/",
      "Google Drive": "https://drive.google.com/drive/",
      "Steamgifts": "https://www.steamgifts.com/",
      "Github": "https://github.com",
      "Gitlab": "https://gitlab.com",
      "WhatsApp": "https://web.whatsapp.com/",
      "Twitter": "https://x.com/home",
      "Instagram": "https://www.instagram.com/",
      "Telegram": "https://web.telegram.org/",
    }
  },
  {
    name: "Reddit",
    bookmarks: {
      "/r/FreeGameFindings": "https://old.reddit.com/r/FreeGameFindings/",
      "/r/chile": "https://old.reddit.com/r/chile/",
      "/r/RepublicadeChile": "https://old.reddit.com/r/RepublicadeChile/",
      "Multi Latinoamérica": "https://old.reddit.com/r/BOLIVIA+Colombia+Dominican+ElSalvador+Honduras+Nicaragua+PERU+Panama+Paraguay+PuertoRico+argentina+brasil+chile+costa_rica+cuba+ecuador+es+guatemala+mexico+spain+uruguay+venezuela/",
      "/r/movies": "https://old.reddit.com/r/movies/",
      "/r/Piracy": "https://old.reddit.com/r/Piracy/",
      "/r/privacy": "https://old.reddit.com/r/privacy/",
      "/r/PCMR": "https://old.reddit.com/r/pcmasterrace/",
      "/r/hiphopheads": "https://old.reddit.com/r/hiphopheads/",
      // IT
      "/r/sysadmin": "https://old.reddit.com/r/chileIT",
      "/r/sysadmin": "https://old.reddit.com/r/sysadmin/",
      "/r/DataHoarder": "https://old.reddit.com/r/DataHoarder/",
      "/r/homelab": "https://old.reddit.com/r/homelab/",
      "/r/Cisco": "https://old.reddit.com/r/Cisco+ccda+ccdp+ccie+ccna+ccnp",
      "/r/datacenter": "https://old.reddit.com/r/datacenter/",
      "/r/PowerShell": "https://old.reddit.com/r/PowerShell/",
      // IT Memes
      "/r/ShittySysadmin": "https://old.reddit.com/r/ShittySysadmin/",
      "/r/iiiiiiitttttttttttt": "https://old.reddit.com/r/iiiiiiitttttttttttt/",
      "/r/techsupportgore": "https://old.reddit.com/r/techsupportgore/",
      "/r/networkingmemes": "https://old.reddit.com/r/networkingmemes/",
      // IT Security
      "/r/hacking": "https://old.reddit.com/r/hacking/",
      "/r/netsec": "https://old.reddit.com/r/netsec/",
      "/r/Malware": "https://old.reddit.com/r/Malware/",
      "/r/cybersecurity": "https://old.reddit.com/r/cybersecurity/",
      "/r/computerforensics": "https://old.reddit.com/r/computerforensics/",
      // IT Questions
      "/r/techsupport": "https://old.reddit.com/r/techsupport/",
      "/r/ITCQuestions": "https://old.reddit.com/r/ITCareerQuestions/",
      "/r/helpdesk": "https://old.reddit.com/r/helpdesk/",
      // WEB DEV
      "/r/webdev": "https://old.reddit.com/r/webdev/",
      "/r/web_design": "https://old.reddit.com/r/web_design/",
      "/r/Frontend": "https://old.reddit.com/r/Frontend/",
      "/r/javascript": "https://old.reddit.com/r/javascript/",
      "/r/firefox": "https://old.reddit.com/r/firefox/",
      // INSPO
      "/r/Art": "https://old.reddit.com/r/Art/",
      "/r/StableDiffusion": "https://old.reddit.com/r/StableDiffusion/",
      "/r/battlestations": "https://old.reddit.com/r/battlestations",
      "/r/unixporn": "https://old.reddit.com/r/unixporn",
      "/r/startpages": "https://old.reddit.com/r/startpages/",
      "/r/cableporn": "https://old.reddit.com/r/cableporn/",
      "/r/DIY": "https://old.reddit.com/r/DIY/",
      "/r/EDC": "https://old.reddit.com/r/EDC/",
      "/r/redneckengineering": "https://old.reddit.com/r/redneckengineering",
      "/r/redneckengineering": "https://old.reddit.com/r/DesignDesign/",
      // Garden
      "/r/composting": "https://old.reddit.com/r/composting/",
      "/r/gardening": "https://old.reddit.com/r/gardening/",
      "/r/urbanfarming": "https://old.reddit.com/r/urbanfarming/",
      "/r/SquareFootGardening": "https://old.reddit.com/r/SquareFootGardening/",
      "/r/ZeroWaste": "https://old.reddit.com/r/ZeroWaste/",
      // Crypto
      "/r/Bitcoin": "https://old.reddit.com/r/Bitcoin/",
      "/r/CryptoCurrency": "https://old.reddit.com/r/CryptoCurrency/",
      "/r/gpumining": "https://old.reddit.com/r/gpumining/",
      "/r/EtherMining": "https://old.reddit.com/r/EtherMining/",
      "/r/brave_browser": "https://old.reddit.com/r/brave_browser/",
      "/r/BATProject": "https://old.reddit.com/r/BATProject/",
      // ?
      "/r/worldnews": "https://old.reddit.com/r/worldnews/",
      "/r/science": "https://old.reddit.com/r/science/",
      "/r/IIB": "https://old.reddit.com/r/InternetIsBeautiful/",
      "/r/WSB": "https://old.reddit.com/r/wallstreetbets/",
      "/r/linux": "https://old.reddit.com/r/linux/",
      "/r/raspberry_pi": "https://old.reddit.com/r/raspberry_pi/",
      "/r/rpcs3": "https://old.reddit.com/r/rpcs3/",
      "/r/homeassistant": "https://old.reddit.com/r/homeassistant/",
      "/r/excel": "https://old.reddit.com/r/excel/",
      "/r/Amd": "https://old.reddit.com/r/Amd/",
      "/r/onebag": "https://old.reddit.com/r/onebag/",
      "/r/multitools": "https://old.reddit.com/r/multitools/",
      "/r/solotravel": "https://old.reddit.com/r/solotravel/",
      "/r/techwearclothing": "https://old.reddit.com/r/techwearclothing/",
      "/r/streetwear": "https://old.reddit.com/r/streetwear/",
      // le cheap
      "/r/Frugal": "https://old.reddit.com/r/Frugal/",
      "/r/BuyItForLife": "https://old.reddit.com/r/BuyItForLife/",
      "/r/minimalism": "https://old.reddit.com/r/minimalism/",
      "/r/MealPrepSunday": "https://old.reddit.com/r/MealPrepSunday/",
      "/r/udemyfreebies": "https://old.reddit.com/r/udemyfreebies/",
    }
  },
  {
    name: "Boards",
    bookmarks: {
      "/tv/": "https://boards.4channel.org/tv/",
      "/g/": "https://boards.4channel.org/g/",
      "/mu/": "https://boards.4channel.org/mu/",
      "/gd/": "https://boards.4channel.org/gd/",
      "/fa/": "https://boards.4channel.org/fa/",
      "/fit/": "https://boards.4channel.org/fit/",
      "/biz/": "https://boards.4channel.org/biz/",
      "/r9k/": "https://boards.4chan.org/r9k/",
      "/v/": "https://boards.4channel.org/v/",
      "/wsg/": "https://boards.4channel.org/wsg/",
      "/λ/": "https://www.lainchan.org/%CE%BB/catalog.html",
      "/sec/": "https://www.lainchan.org/sec/catalog.html",
      "/music/": "https://lainchan.org/music/catalog.html",
      "/vis/": "https://lainchan.org/vis/index.html",
      "/Ω/": "https://lainchan.org/%CE%A9/catalog.html",
      "bandada.club": "https://bandada.club/cl/",
    }
  },
  {
    name: "🎥/🎵/📻",
    bookmarks: {
      "🎥FMHY": "https://fmhy.pages.dev/",
      "🎥Youtube": "https://youtube.com",
      "🎥Twitch": "https://www.twitch.tv",
      "🎥Udemy": "https://www.udemy.com/",
      "🎥Ondamedia": "https://ondamedia.cl/",
      "🎵Spotify": "https://open.spotify.com",
      "🎵Soundcloud": "https://soundcloud.com",
      "🎵Deathgrind": "https://deathgrind.club/",
      "📻Coreradio": "https://coreradio.ru/",
      "📻Radio.garden": "https://radio.garden/",
      "📻Plaza.one": "https://plaza.one/",
      "📻Radiooooo": "https://radiooooo.com/",
      "📻Rainwave": "https://rainwave.cc/all/",
      "📻Poolside": "https://poolside.fm/",
      "📻Cmd.to": "https://cmd.to/fm",
      "📻R-a-d.io": "https://r-a-d.io/",
      "📻Listen.moe": "https://listen.moe/",
      "📻Di.fm": "https://www.di.fm/",
      "📻Deko.fm/": "https://deko.fm/",
      "📻rofi": "https://rofi.vercel.app/",
      "📻loficlub": "https://loficlub.vercel.app/",
      //Background noise generators
      "🌧️Asoftmurmur": "https://asoftmurmur.com/",
      "🌧️Naturemixer": "https://naturemixer.com",
      "🌧️Moodil": "https://www.moodil.com/",
      "🌧️Rainymood": "https://www.rainymood.com/",
      "🌧️Soundscape": "https://soundscape.world/",
      "🌧️Defonic": "https://defonic.com/",
      "🌧️Rainbowhunt": "https://rainbowhunt.com/",
    }
  },
  {
		name: "Tools",
		bookmarks: {
			 //Tools
       "Temp-mail": "https://temp-mail.org",
       "Recursos": "https://alplox.github.io/mis-recursos-webdev/",
       "G Translate": "https://translate.google.com/",
       "D Translate": "https://www.deepl.com/en/translator",
       "Onlineocr": "https://www.onlineocr.net/",
       "Timer-tab": "https://www.timer-tab.com/",
       "ilovepdf": "https://www.ilovepdf.com/",
       "diagrams.net": "https://www.diagrams.net/",
       //Image
       "Photopea": "https://www.photopea.com/",
       "Pixlr E": "https://pixlr.com/es/e/",
       "Paint sumo.app": "https://sumo.app/paint/en",
       "Waifu2x": "http://waifu2x.udp.jp/",
       "Waifu2x.pro": "https://waifu2x.pro/",
       "Waifu2x.booru": "https://waifu2x.booru.pics/",
       //Internet
       "Virustotal": "https://www.virustotal.com/",
       "Virustracker":"https://virustracker.net/",
       "Blacklight": "https://themarkup.org/blacklight",
       "Speedtest.net": "https://www.speedtest.net/",
       "Speed.cloudflare": "https://speed.cloudflare.com/",
       "Fast":"https://fast.com/",
       "Dnsleaktest": "https://www.dnsleaktest.com/",
       "Ciberpatrulla": "https://ciberpatrulla.com/links/",
       "Osintframework": "https://osintframework.com/",
       "Unblockit": "https://unblockit.ltd/",
       //Share
       "☁️ Wetransfer": "https://wetransfer.com/",
       "☁️ Mirrorace": "https://mirrorace.com/",
       "☁️ Wormhole": "https://wormhole.app/",
       "☁️ Filen.io": "https://filen.io/",
       "☁️ Crypter": "https://www.crypter.dev/",
       "☁️ Toffeeshare (P2P)": "https://toffeeshare.com/",
       "☁️ File.pizza (P2P)": "https://file.pizza/",
       "☁️ GNU CAT": "https://gnu.cat/",
       "☁️ Send-anywhere": "https://send-anywhere.com/",
       "☁️ Tmp.ninja": "https://tmp.ninja/",
       "☁️ Fileconvoy": "http://fileconvoy.com/",
       "☁️ Catbox": "https://catbox.moe/",
       "☁️ Temp.sh": "https://temp.sh/",
       "☁️ Streamja": "https://streamja.com/",
       "☁️ Justbeamit": "https://justbeamit.com/",
       //Inspo
       "Product Hunt": "https://www.producthunt.com/",
       "Behance": "https://www.behance.net/",
       "Dribbbe": "https://dribbble.com/",
       "Brand New": "https://www.underconsideration.com/brandnew/",
       "SP/webdevhome": "https://webdevhome.github.io/",
       "SP/weboas.is": "https://weboas.is/",
       "Goodsites.tech": "https://www.goodsites.tech/",
       "Learnxinyminutes": "https://learnxinyminutes.com/",
       "Deviantart": "https://www.deviantart.com",
       "Artstation": "https://www.artstation.com"
		}
	}
]

const BOOKMARK_COLUMNS_TITLES = document.querySelectorAll('.bm-tab-title');
const BOOKMARK_COLUMNS_CONTENT = document.querySelectorAll('.bm-content');

BOOKMARK_COLUMNS_TITLES.forEach((column, i) => {
  column.textContent = PERSONALIZED_BOOKMARKS[i].name;
  populateBookmarks(BOOKMARK_COLUMNS_CONTENT[i], PERSONALIZED_BOOKMARKS[i].bookmarks);
  
  column.addEventListener('mouseenter', () => activateTab(i));
});

function populateBookmarks(contentElement, bookmarks) {
  Object.entries(bookmarks).forEach(([site, url]) => {
    const aElement = document.createElement('a');
    aElement.textContent = site;
    aElement.href = url;
    aElement.setAttribute('rel', 'nofollow noreferrer');
    contentElement.append(aElement);
  });
}

function activateTab(index) {
  BOOKMARK_COLUMNS_TITLES.forEach((column, i) => {
    column.classList.toggle('active', i === index);
  });
  
  BOOKMARK_COLUMNS_CONTENT.forEach((content, i) => {
    content.classList.toggle('active', i === index);
  });
}

const MODAL_CONTAINER = document.querySelector("#modal");
const BOTON_MODAL = document.querySelector(".boton-open-modal");
const BOTON_CERRAR_MODAL = document.querySelector(".close");

BOTON_MODAL.addEventListener('click', () => {
  MODAL_CONTAINER.style.display = "block";
  MODAL_CONTAINER.setAttribute('tabindex', '0')
});

BOTON_CERRAR_MODAL.addEventListener('click', () =>{
  MODAL_CONTAINER.style.display = "none";
  MODAL_CONTAINER.setAttribute('tabindex', '-1')
});

window.addEventListener('click', (e) => {
  if (e.target == MODAL_CONTAINER) MODAL_CONTAINER.style.display = "none";
});

// [command character]: ['search url', 'title']
const engines = () => ({
  g: ["https://google.com/search?q=", "Google"],
  b: ["https://www.bing.com/search?q=", "Bing"],
  d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
  s: ["https://www.startpage.com/do/search?q=", "Startpage"],
  q: ["https://www.qwant.com/?q=", "Qwant"],
  y: ["https://you.com/search?q=", "You"],
  yt: ["https://youtube.com/results?search_query=", "Youtube"],
  i: ["https://google.com/search?tbm=isch&q=", "Google Images"],
  st: ["https://stackoverflow.com/search?q=", "Stackoverflow"],
  stes: ["https://es.stackoverflow.com/search?q=", "Stackoverflow Español"],
  a: ["https://web.archive.org/web/*/", "Archive"],
  w: ["https://en.wikipedia.org/w/index.php?search=", "Wikipedia"],
  x: ["https://x.com/search?q=", "Twitter"],
  npm: ["https://www.npmjs.com/search?q=", "NPM"],
  sc: ["https://soundcloud.com/search/people?q=", "SoundCloud"],
  gh: ["https://github.com/search?q=", "GitHub"],
  tw: ["https://www.twitch.tv/search?term=", "Twitch"],
  im: ["https://www.imdb.com/find/?q=", "IMDB"],
  rd: ["https://old.reddit.com/search?q=", "Reddit"],
  aur: ["https://aur.archlinux.org/packages/?O=0&K=", "Archlinux"],
  amz: ["https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=", "Amazon"],
  tpb: ["https://thepiratebay.org/search/", "The Pirate Bay"],
  r: ["https://www.reddit.com/search?q=", "Reddit"],
  rs: ["https://www.reddit.com/r/", "Reddit Subreddits"],
  et: ["https://www.etsy.com/search?q=", "Etsy"],
});

const BARRA_BUSQUEDA = document.querySelector('#input-buscador');
const searchEngines = engines();
const searchEnginesContainer = document.querySelector('.container-search-engines');

Object.entries(searchEngines).forEach(([key, [, name]]) => {
  let botonBuscador = document.createElement('button');
    botonBuscador.type = 'button';
    botonBuscador.title = name;
    botonBuscador.classList.add('boton-buscadores', 'sombra-sm');
    botonBuscador.dataset.buscadorId = key;
    botonBuscador.innerHTML = `!${key} <span class="nombre-buscador">${name}</span>`;

    botonBuscador.addEventListener('click', () => {
      BARRA_BUSQUEDA.value = `!${key} `;
      BARRA_BUSQUEDA.focus();
      removeActiveSearchEngine();
      botonBuscador.classList.toggle('active');
    });

  searchEnginesContainer.append(botonBuscador);
});

const search = (engineUrl, query) => {
  window.open(`${engineUrl}${encodeURIComponent(query)}`, '_blank');
};


BARRA_BUSQUEDA.addEventListener('keyup', (e) => {
  const args = BARRA_BUSQUEDA.value.toLowerCase().split(' ');
  const prefix = args[0];
  let engineUrl = searchEngines['q'][0];
  let str = 0;

  document.querySelectorAll('.boton-buscadores')?.forEach(botonBuscadorEnDOM => {
    botonBuscadorEnDOM.classList.toggle('active', prefix === `!${botonBuscadorEnDOM.dataset.buscadorId}`);
  });

  document.querySelector('.active')?.scrollIntoView()

  if (e.key === 'Enter') {
    if (prefix.startsWith('!')) {
      engineUrl = searchEngines[prefix.substring(1)][0];
      str = prefix.length + 1;
    }
    search(engineUrl, args.join(' ').substring(str).trim());
  } else if (e.key === 'Escape') {
    BARRA_BUSQUEDA.value = '';
    BARRA_BUSQUEDA.blur();
    removeActiveSearchEngine()
  }
});

function removeActiveSearchEngine() {
  document.querySelectorAll('.boton-buscadores').forEach(botonBuscadorEnDOM => {
    botonBuscadorEnDOM.classList.remove('active');
  });
};
/* 
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Tab') {
    BARRA_BUSQUEDA.focus();
    BARRA_BUSQUEDA.scrollIntoView();
  }
}); */