var titleInput = document.querySelector('.title');
var urlInput = document.querySelector('.url');
var createButton = document.querySelector('.create');

createButton.addEventListener('click', otherCreateLink);

function createLink() {
  event.preventDefault();
  title = titleInput.value;
  url = urlInput.value;
  var list = document.querySelector('aside');
  var link = document.createElement('article');
  list.appendChild(link);
  var titleP = document.createElement('p');
  var urlP = document.createElement('p')
  link.appendChild(titleP);
  link.appendChild(urlP);
  titleP.innerHTML = title;
  urlP.innerHTML = url;
  resetForm();
}

function resetForm() {
  titleInput.value = '';
  urlInput.value = '';
}

function otherCreateLink() {
  event.preventDefault();
  title = titleInput.value;
  url = urlInput.value;
  var list = document.querySelector('aside');
  link = 
    `<arcticle>
      <p>${title}</p>
      <p>${url}</p>
     <article>`
  list.innerHTML += link;
  resetForm();
}