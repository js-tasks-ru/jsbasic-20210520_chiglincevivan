function makeFriendsList(friends) {

  const ul = document.createElement('ul'); // создаём <ul>

  const strLi = friends.map(_obj => {
    const _li = document.createElement('li'); // создаём <li> 
    _li.append(`${_obj.firstName} ${_obj.lastName}`); // добавляем текст внутрь <li>
    ul.append(_li); // добавляем <li> в <ul>
  });

  return ul
}
