// todo:
// сделать свойства объектов в строку
// строки засунуть в li
// все li засунуть в ul

function makeFriendsList(friends) {
  // создаём <li> 
  // внутрь помещаем созданную из объекта с помощью map
  const strLi = friends.map(_obj => {
    const _li = document.createElement('li');
    _li.innerText = `${_obj['firstName']} ${_obj['lastName']}`;
    return _li
  });

  // создаём ul
  const ul = document.createElement('ul');

  // помещаем все созданные li в ul
  for (ele of strLi) {
    ul.insertAdjacentElement('beforeend', ele);
  }

  return ul
}
