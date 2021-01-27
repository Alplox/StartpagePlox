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
