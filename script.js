var titleInput = document.querySelector('.title');
var urlInput = document.querySelector('.url');
var createButton = document.querySelector('.create');

createButton.addEventListener('click', createLink);

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
  var deleteButton = document.createElement('button');
  link.appendChild(deleteButton);
  deleteButton.addEventListener('click', deleteLink);
  deleteButton.innerHTML = 'delete';
  titleP.innerHTML = title;
  urlP.innerHTML = url;
  resetForm();
}

function resetForm() {
  titleInput.value = '';
  urlInput.value = '';
}

function deleteLink(e) {
  e.target.parentElement.remove();
}