// https://github.com/Jaredk3nt/homepage
// Handle writing out Bookmarks
function setupBookmarks() {
  const bookmarkContainer = document.getElementById("bookmark-container");
  bookmarkContainer.innerHTML = bookmarks
    .map((b) => {
      const html = ["<div class='bookmark-set'>"];
      html.push(`<div class="bookmark-title">${b.title}</div>`);
      html.push('<div class="bookmark-inner-container">');
      html.push(
        ...b.links.map(
          (l) =>
            `<a class="bookmark" href="${l.url}" target="_blank">${l.name}</a>`
        )
      );
      html.push("</div></div>");
      return html.join("");
    })
    .join("");
}
window.onload = () => {
  setupBookmarks();
};

// MODAL https://www.w3schools.com/howto/howto_css_modals.asp
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
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
      engine = engines["g"][0], // the default engine (google in this case)
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

// here starts the code to make the multiples iframes appear
// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Toggle Hide and Show
function myFunction() {
  var x = document.getElementById("myDIV-show");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
