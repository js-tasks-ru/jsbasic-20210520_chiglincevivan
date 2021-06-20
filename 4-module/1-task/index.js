// todo:
// сделать свойства объектов в строку
// строки засунуть в li
// все li засунуть в ul

function makeFriendsList(friends) {

  const strLi = friends.map(_obj => {
    const _li = document.createElement('li'); // создаём <li> 
    _li.innerText = `${_obj['firstName']} ${_obj['lastName']}`; // внутрь <li> помещаем строку созданную из объекта
    return _li
  });

  const ul = document.createElement('ul'); // создаём <ul>

  for (ele of strLi) {
    // ul.insertAdjacentElement('beforeend', ele); // помещаем все созданные <li> в <ul>
    ul.append(ele);
  }

  return ul
}
