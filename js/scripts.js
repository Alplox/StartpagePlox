// Reloj
function updateClock() {
  var now = new Date();
  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  if (hou >= 12) {
    pe = "PM";
  }
  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou = hou - 12;
  }

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  };

  var months = [
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
    "Diciembre",
  ];
  var week = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  var ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hour",
    "minutes",
    "seconds",
    "period",
  ];
  var values = [
    week[dname],
    dnum.pad(2),
    months[mo],
    yr,
    hou.pad(2),
    min.pad(2),
    sec.pad(2),
    pe,
  ];
  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

initClock();

//Bookmark Table
var tabs = document.querySelectorAll('.tab');
var contents = document.querySelectorAll('.content');

for (let i=0; i<tabs.length; i++){

    tabs[i].innerHTML = cards[i].name;

    var sites = Object.keys(cards[i].bookmarks);
    //Populate content with bookmarks
    for (let j=0; j<sites.length; j++){

        var a_link = document.createElement('a');
        a_link.innerHTML = sites[j];
        a_link.href = cards[i].bookmarks[sites[j]];

        contents[i].appendChild(a_link);
    }

    // Make tab active on mouse click
    tabs[i].addEventListener('mouseenter', function(){
        for (let j=0; j<tabs.length; j++){
            tabs[j].classList.remove('active');
        }
        tabs[i].classList.add('active');

        for (let j=0; j<contents.length; j++){
            contents[j].classList.remove('active');
        }
        contents[i].classList.add('active');
    })
}

// MODAL https://www.w3schools.com/howto/howto_css_modals.asp
var modal = document.getElementById("myModal");
var btn = document.getElementById("Btn_skull");
var span = document.getElementsByClassName("close")[0];

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
const $s = {
  qS: (e) => document.querySelector(e),
  qA: (e) => document.querySelectorAll(e),
};

// You can add your own search query here for anything you're interested in.
// [command character]: ['search url', 'title']
function engines() {
  return {
    g: ["https://google.com/search?q=", "Google"],
    d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
    s: ["https://www.startpage.com/do/search?q=", "Startpage"],
    q: ["https://www.qwant.com/?q=", "Qwant"],
    yt: ["https://youtube.com/results?search_query=", "Youtube"],
    i: ["https://google.com/search?tbm=isch&q=", "Google Images"],
    st: ["https://stackoverflow.com/search?q=", "Stackoverflow"],
    a: ["https://web.archive.org/web/*/", "Archive"],
    w: ["https://en.wikipedia.org/w/index.php?search=", "Wikipedia"],
  };
}

var search = $s.qS("#search"),
  input = $s.qS('#search input[type="text"]'),
  engines = engines();

for (var key in engines)
  $s.qS(
    ".search-engines"
  ).innerHTML += `<li><p title="${engines[key][1]}">!${key}</p></li>`;

document.onkeypress = (e) => {
  if (e.key == "s") search.classList.add("active");

  input.focus();
  input.scrollIntoView();

  search.onkeyup = (e) => {
    let args = e.target.value.split(" "),
      prefix = args[0],
      engine = engines["q"][0], // the default engine (Qwant in this case)
      str = 0;

    $s.qA(".search-engines li p").forEach((eng) => {
      let current = eng.parentNode;

      prefix == eng.innerHTML
        ? current.classList.add("active")
        : current.classList.remove("active");
    });

    if (e.key == "Enter") {
      if (prefix.indexOf("!") == 0)
        (engine = engines[prefix.substr(1)][0]), (str = 3);

      window.location =
        engine + args.join(" ").substr(str).toString().replace(/\s+/m, "%20");
    } else if (e.key == "Escape") {
      search.classList.remove("active");
      input.value = "";
    }
  };
};

console.log("\r\n$$\\      $$\\ $$$$$$$$\\ $$\\   $$\\  $$$$$$\\        $$\\      $$\\ $$$$$$$$\\ $$\\   $$\\  $$$$$$\\  \r\n$$ | $\\  $$ |$$  _____|$$$\\  $$ |$$  __$$\\       $$ | $\\  $$ |$$  _____|$$$\\  $$ |$$  __$$\\ \r\n$$ |$$$\\ $$ |$$ |      $$$$\\ $$ |$$ \/  $$ |      $$ |$$$\\ $$ |$$ |      $$$$\\ $$ |$$ \/  $$ |\r\n$$ $$ $$\\$$ |$$$$$\\    $$ $$\\$$ |$$$$$$$$ |      $$ $$ $$\\$$ |$$$$$\\    $$ $$\\$$ |$$$$$$$$ |\r\n$$$$  _$$$$ |$$  __|   $$ \\$$$$ |$$  __$$ |      $$$$  _$$$$ |$$  __|   $$ \\$$$$ |$$  __$$ |\r\n$$$  \/ \\$$$ |$$ |      $$ |\\$$$ |$$ |  $$ |      $$$  \/ \\$$$ |$$ |      $$ |\\$$$ |$$ |  $$ |\r\n$$  \/   \\$$ |$$$$$$$$\\ $$ | \\$$ |$$ |  $$ |      $$  \/   \\$$ |$$$$$$$$\\ $$ | \\$$ |$$ |  $$ |\r\n\\__\/     \\__|\\________|\\__|  \\__|\\__|  \\__|      \\__\/     \\__|\\________|\\__|  \\__|\\__|  \\__|\r\n                                                                                            \r\n                                                                                            \r\n                                                                                            \r\n")