// Módulo de bookmarks: poblar y activar pestañas
export function populateBookmarks(contentElement, bookmarks) {
  Object.entries(bookmarks).forEach(([site, url]) => {
    const aElement = document.createElement('a');
    aElement.textContent = site;
    aElement.href = url;
    aElement.setAttribute('rel', 'nofollow noreferrer');
    contentElement.append(aElement);
  });
}

export function activateTab(titles, contents, index) {
  titles.forEach((column, i) => {
    column.classList.toggle('active', i === index);
  });
  contents.forEach((content, i) => {
    content.classList.toggle('active', i === index);
  });
}
