export default class UserTable {
  constructor(rows) {
    this.data = rows;
    this.elem = document.createElement('TABLE');
    this.render();

    this.elem.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') event.target.closest('tr').remove();
    });
  }

  render() {
    const thead = document.createElement('THEAD');
    thead.insertAdjacentHTML('beforeend', '<tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr>');

    const tbody = document.createElement('TBODY');
    const trs = this.data.map(_obj => `<tr><td>${_obj.name}</td><td>${_obj.age}</td><td>${_obj.salary}</td><td>${_obj.city}</td><td><button>X</button></td></tr>`);
    trs.forEach(ele => tbody.insertAdjacentHTML('beforeend', ele));

    this.elem.append(thead);
    this.elem.append(tbody);
  }

}